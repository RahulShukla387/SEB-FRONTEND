


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

// function Notice() {
//   const [Data, setData] = useState([]);
//      const [user, setUser] = useState(null);

//     useEffect(() => {
// // axios.get(`${BACKEND_URL}/api/debug`, { withCredentials: true })
// axios.get(`http://localhost:5000/api/debug`, { withCredentials: true })
//       .then(res => setUser(res.data.user))
//       .catch(err => console.error(err));
//   }, []);

//   async function getData() {
// //  const res = await axios.post(`${BACKEND_URL}/api/getNotice`);
//  const res = await axios.post(`http://localhost:5000/api/getNotice`);
//     setData(res.data);
//   }

//   useEffect(() => {
//     getData();
//   }, []);

//   // 🔥 Delete function
//   async function deleteNotice(id) {
//     try {
//       // await axios.delete(`${BACKEND_URL}/api/notice/${id}`);
//       await axios.delete(`http://localhost:5000/api/notice/${id}`);
//       // Update UI by filtering out deleted notice
//       setData(Data.filter((notice) => notice._id !== id));
//     } catch (error) {
//       console.error("Error deleting notice", error);
//     }
//   }

//   return (
//     <div className="mt-20 max-w-3xl mx-auto">
//       <h1 className="text-center font-serif text-gray-500">Notice Section</h1>
//       <ul className="space-y-4">
//         {Data && Data.map((notice, index) => (
//           <div
//             key={index}
//             className="bg-white shadow-md rounded-lg p-4 hover:shadow-xl transition-shadow duration-300 flex justify-between items-center"
//           >
//             <a
//               href={notice.imgUrl}
//               download={notice.originalName || notice.title}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-blue-600 font-semibold hover:text-blue-800 hover:underline transition-colors duration-200"
//             >
//               {notice.title}
//             </a>
            
//             {/* Delete Button */}
        
//         {   
//         user && user.role === "admin" &&(
//         <button 
//               onClick={() => deleteNotice(notice._id)}
//               className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition-colors duration-200"
//             >
//               Delete
//             </button>)}
//           </div>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default Notice;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
import* as jwtDecode from "jwt-decode";


function Notice() {
  const [Data, setData] = useState([]);
  const [user, setUser] = useState(null);

  // useEffect(() => {
  //   const token = localStorage.getItem("token");
  //   if (!token) return;

  //   axios.get(`${BACKEND_URL}/api/debug`, {
  //     headers: { Authorization: `Bearer ${token}` },
  //   })
  //   .then(res => setUser(res.data.user))
  //   .catch(err => console.error(err));
  // }, []);

  useEffect(() => {
  const token = localStorage.getItem("token");
  if (!token) return;

  try {
    const decoded = jwtDecode(token);
    setUser(decoded);  // decoded contains role, email, name, etc.
  } catch (e) {
    console.error("Invalid token", e);
  }
}, []);

  async function getData() {
    const res = await axios.post(`${BACKEND_URL}/api/getNotice`);
    setData(res.data);
  }

  useEffect(() => {
    getData();
  }, []);

  async function deleteNotice(id) {
    try {
      const token = localStorage.getItem("token");
      await axios.delete(`${BACKEND_URL}/api/notice/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setData(Data.filter((notice) => notice._id !== id));
    } catch (error) {
      console.error("Error deleting notice", error);
    }
  }

  return (
    <div className="mt-20 max-w-3xl mx-auto">
      <h1 className="text-center font-serif text-gray-500">Notice Section</h1>
      <ul className="space-y-4">
        {Data.map((notice, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-4 hover:shadow-xl transition-shadow duration-300 flex justify-between items-center"
          >
            <a
              href={notice.imgUrl}
              download={notice.originalName || notice.title}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 font-semibold hover:text-blue-800 hover:underline transition-colors duration-200"
            >
              {notice.title}
            </a>

            {user && user.role === "admin" && (
              <button 
                onClick={() => deleteNotice(notice._id)}
                className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition-colors duration-200"
              >
                Delete
              </button>
            )}
          </div>
        ))}
      </ul>
    </div>
  );
}

export default Notice;

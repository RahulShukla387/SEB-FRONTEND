


import React, { useState, useEffect } from 'react';
import axios from 'axios';
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
import { jwtDecode } from "jwt-decode";


function Notice() {
  const [Data, setData] = useState([]);
  const [user, setUser] = useState(null);

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
            {/* <a
              href={notice.imgUrl}
              download={notice.originalName || notice.title}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 font-semibold hover:text-blue-800 hover:underline transition-colors duration-200"
            >
              {notice.title}
            </a> */}

                 <a
              href={`${BACKEND_URL}/api/download/${notice._id}`}
              download={notice.originalName || notice.title || "notice"}
              className="text-blue-600 font-semibold hover:text-blue-800 hover:underline transition-colors duration-200"
            >
              {notice.title}
            </a>

            { user && user.role === "admin" && (
            <button
              onClick={() => deleteNotice(notice._id)}
              className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition-colors duration-200"
            >
              Delete
            </button>
          )}
    </div>
  ))
}
      </ul >
    </div >
  );
}

export default Notice;

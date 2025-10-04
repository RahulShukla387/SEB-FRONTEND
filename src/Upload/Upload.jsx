
// import { Typography } from '@mui/material';
// import { Card, CardContent, CardMedia, Grid } from "@mui/material";
// import { useNavigate } from 'react-router-dom';
// const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

// function Upload() {

//    const navigate = useNavigate();

//     const events = [
// {
// name: "Upload Notice",
// photo: "/images/noticeimg.png",
// link: "/api/UploadNotice",
// },


// ];


//     return ( <>
//      <div className='mt-[5%]'>
//      <div className='text-center item-center'  >
//                 <Typography
//   className='text-center mt-[10%] mb-10  text-gray-500'
// variant="h2"
// sx={{
// fontWeight: 800,
// lineHeight: 1.05,
// fontSize: { xs: "1rem", sm: "2.5rem", md: "3.5rem" },
// // gradient text
// background: "linear-gradient(90deg,rgba(89, 173, 89, 1),rgba(100, 23, 225, 1))",
// WebkitBackgroundClip: "text",
// WebkitTextFillColor: "transparent",
// // subtle letter spacing for elegance
// letterSpacing: "-0.5px",
// }}
// >

//  Upload <br />

// </Typography>
//       <h2  className=' text-center font-serif text-gray-500 ' >Events create a platform for ideas to connect, grow, and inspire change.  </h2>    
//       {/* <h3  className=' text-center font-serif text-gray-500 ' >The Social Engineers' Board organizes various events throughout the year to make a real impact on students, <br /> and help them become well-rounded engineers. </h3>     */}
//       <h3  className=' text-center font-serif text-gray-500 ' > Login With <b><u>Official Handle </u></b> first to Upload </h3>    
//             <div className="flex space-x-4 justify-center mt-6">
//   {/* Sign In Button */}
//   <a
//     href={`${BACKEND_URL}/auth/google`}
//     className="px-6 py-2 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-600 transition-colors flex items-center space-x-2"
//   >
//     {/* Optional Google Icon */}
//     <svg
//       className="w-5 h-5"
//       viewBox="0 0 533.5 544.3"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <path
//         d="M533.5 278.4c0-17.4-1.6-34-4.6-50.2H272v95.2h146.9c-6.3 34.2-25.4 63.1-54.3 82.5v68.5h87.7c51.3-47.3 80.2-117 80.2-196z"
//         fill="#4285F4"
//       />
//       <path
//         d="M272 544.3c73.6 0 135.4-24.4 180.6-66.2l-87.7-68.5c-24.3 16.3-55.5 25.9-92.9 25.9-71.4 0-131.9-48.1-153.5-112.5H28.3v70.7C73.5 476.3 167 544.3 272 544.3z"
//         fill="#34A853"
//       />
//       <path
//         d="M118.5 323.5c-5.7-16.3-8.9-33.6-8.9-51.5s3.2-35.2 8.9-51.5V149.8H28.3C10.3 186.1 0 224.2 0 272s10.3 85.9 28.3 122.2l90.2-70.7z"
//         fill="#FBBC05"
//       />
//       <path
//         d="M272 107.7c39.7 0 75.4 13.7 103.6 40.7l77.6-77.6C407.3 25.2 345.5 0 272 0 167 0 73.5 68 28.3 149.8l90.2 70.7c21.6-64.4 82.1-112.8 153.5-112.8z"
//         fill="#EA4335"
//       />
//     </svg>
//     <span>Sign In with Google</span>
//   </a>

//   {/* Logout Button */}
//   <a
//     // href={`${BACKEND_URL}/logout`}
//     href={`http://localhost:5000/logout`}
//     className="px-6 py-2 bg-gray-200 text-gray-800 font-semibold rounded-lg shadow-md hover:bg-gray-300 transition-colors"
//   >
//     Logout
//   </a>
// </div>


                   
//                     <Grid container spacing={25} justifyContent="center" sx={{ mt: 2 }}>
//               {events.map((event, index) => (
//                 <Grid item sm={12} md={6} lg={6} key={index} spacing={4} >
//                   <Card 
//                   onClick={() => navigate(event.link)}
//                    className=''
//                    sx={{
//                     cursor: "pointer",
//                         scale:0.9,
//                      maxWidth: 500,
//                      width: 300,
//                      height: 400,
//                      borderRadius: 3,
//                      boxShadow: 3,
//                      "&:hover": { boxShadow: 10 , scale:0.92 },
//                      overflow: "hidden",
//                     }}
//                   >
//                     <CardContent sx={{ textAlign: "center" }}>
//                       <Typography variant="h3" fontWeight="bold">
//                         {event.name}
//                       </Typography>
//                     </CardContent>
//                     <CardMedia
//                       component="img"
//                       image={event.photo}
//                       className=''
//                       alt={event.name}
//                         sx={{
//                         height: 300,        // fixed height
//                         objectFit: "cover", // fills space without stretching
//                         width: "100%",      // full card width
//             }}
//                     />
//                       <CardContent sx={{ textAlign: "center" }}>
//                       <Typography variant="h5" fontWeight="bold">
//                         Know More
//                       </Typography>
//                     </CardContent>
                    
//                   </Card>
//                 </Grid>
//               ))}
//             </Grid>
//      </div>
//     </div>
//     </> );
// }

// export default Upload;


import { Typography } from '@mui/material';
import { Card, CardContent, CardMedia, Grid } from "@mui/material";
import { useNavigate } from 'react-router-dom';

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

function Upload() {
  const navigate = useNavigate();

  const events = [
    {
      name: "Upload Notice",
      photo: "/images/noticeimg.png",
      link: "/UploadNotice",
    },
  ];

  return (
    <div className='mt-[5%]'>
      <div className='text-center item-center'>
        <Typography
          className='text-center mt-[10%] mb-10 text-gray-500'
          variant="h2"
          sx={{
            fontWeight: 800,
            lineHeight: 1.05,
            fontSize: { xs: "1rem", sm: "2.5rem", md: "3.5rem" },
            background: "linear-gradient(90deg,rgba(89, 173, 89, 1),rgba(100, 23, 225, 1))",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            letterSpacing: "-0.5px",
          }}
        >
          Upload <br />
        </Typography>

        <h3 className='text-center font-serif text-gray-500'>
          Login With <b><u>Official Handle</u></b> first to Upload
        </h3>

        <div className="flex space-x-4 justify-center mt-6">
          <a
            href={`${BACKEND_URL}/auth/google`}
            className="px-6 py-2 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-600 transition-colors flex items-center space-x-2"
          >
            Sign In with Google
          </a>

          <button
            onClick={() => localStorage.removeItem("token")}
            className="px-6 py-2 bg-gray-200 text-gray-800 font-semibold rounded-lg shadow-md hover:bg-gray-300 transition-colors"
          >
            Logout
          </button>
        </div>

        <Grid container spacing={25} justifyContent="center" sx={{ mt: 2 }}>
          {events.map((event, index) => (
            <Grid item sm={12} md={6} lg={6} key={index}>
              <Card
                onClick={() => navigate(event.link)}
                sx={{
                  cursor: "pointer",
                  scale: 0.9,
                  maxWidth: 500,
                  width: 300,
                  height: 400,
                  borderRadius: 3,
                  boxShadow: 3,
                  "&:hover": { boxShadow: 10, scale: 0.92 },
                  overflow: "hidden",
                }}
              >
                <CardContent sx={{ textAlign: "center" }}>
                  <Typography variant="h3" fontWeight="bold">{event.name}</Typography>
                </CardContent>
                <CardMedia
                  component="img"
                  image={event.photo}
                  alt={event.name}
                  sx={{
                    height: 300,
                    objectFit: "cover",
                    width: "100%",
                  }}
                />
                <CardContent sx={{ textAlign: "center" }}>
                  <Typography variant="h5" fontWeight="bold">Know More</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
}

export default Upload;

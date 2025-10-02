import Typography from '@mui/material/Typography';
import React from 'react';
import { FaUsers, FaCalendarAlt, FaImages, FaBullhorn, FaUpload, FaInstagram, FaFacebook } from "react-icons/fa";

function Footer() {
    return ( 
        <>
        <div  className='bg-blue-900 text-white mt-40 '>

   {/* <Typography
  variant="h4" // controls size (h1–h6, body1, etc.)
  align="center" // equivalent of text-center
  sx={{
    fontWeight: 700,
    fontFamily: "Montserrat, sans-serif",
    background: "linear-gradient(90deg, #0047AB, #FFC107, #32269cff)",
    backgroundSize: "200% 200%",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    animation: "gradientMove 6s ease infinite",
  }}
>
  Grooming Personality
</Typography> */}

        <div className="grid lg:grid-cols-[0.1fr_2fr_2fr_2fr_2fr_0.1fr]    ">
            <div></div>
  <div className="">
    <img className=' lg:w-1/3 , sm:w-1/6 ' src="\images\seblogo-removebg-preview.png" alt="" />
    <p className='font-serif '> ©  The Social Engineer’s Board, MMMUT. <br />
     All Rights Reserved </p>
  </div>
  <div className="">
    <h1 className='font-mono text-xl  '> <u> Events </u> </h1>
    <a className='text-white' href="">Drishya</a> <br />
    <a className='text-white' href="">Dhishan</a> <br />
    <a className='text-white' href="">Paravartan</a> <br />
    <a className='text-white' href="">Blood Donation Camp</a> <br />
    <p className='font-mono text-xl  '>  </p>

  </div>
  <div className="">
    <h1 className='font-mono text-xl  '> <u> Navigation </u> </h1>
    <a className='text-white' href=""> <FaUsers />  &nbsp; Members</a> <br />
    <a className='text-white' href=""> < FaCalendarAlt /> {}  &nbsp; Events</a> <br />
    <a className='text-white' href=""> <FaImages/>  &nbsp;  Gallery</a> <br />
    <a className='text-white' href=""> <FaBullhorn/>  &nbsp;  Notice</a> <br />
    <a className='text-white' href=""> <FaUpload/>  &nbsp; Upload</a> <br />
  </div>
  <div className=''>
    <h1 className='font-mono text-xl  '> <u> Connect Us </u> </h1>
    <a className=' text-3xl ' href="https://www.instagram.com/seb.mmmut/"> < FaInstagram/> </a> &nbsp; &nbsp; &nbsp; <br />
    <a className=' text-3xl ' href="https://www.facebook.com/seb.mmmut"> <FaFacebook/>  </a> <br />
   <b> sendusatseb@gmail.com  </b> 
  </div>
  <div></div>
</div>
        </div>
        </>
     );
}

export default Footer;
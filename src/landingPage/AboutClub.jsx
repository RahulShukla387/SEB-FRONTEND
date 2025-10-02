import React from 'react';
import { Divider } from '@mui/material';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Box, Typography } from "@mui/material";
function About() {

  const images = [
    "/images/indn3.png",
    "/images/Drishyaa5.png",
    "/images/glimpse1.png",
    "/images/dhishani4.JPG",
    "/images/dhishani3.JPG",
    "/images/indn2.png",
    "/images/indn1.png"
  ];

    return ( 
        <>

        <Divider
      className='mx-[12%]'
      sx={{
        my: 4,
        height: 3,
        // border: "2px solid grey",
        borderRadius: 2,
        background: "linear-gradient(to right, #f9f4f9ff, #f9f4f9ff)",
        boxShadow: "0px 2px 8px rgba(160, 154, 154, 0.2)",
      }}
     />   
      {/* <Typography variant="h1" color='success' gutterBottom>
         Search For Weather !.
      </Typography> */}
        <p className='font-serif text-start ml-20'>The Social Engineers' Board was established by students of MMMEC, Naveen Krishna Rai (ECE, 2016 passout) and Mohit Jha (ECE, 2016 passout) in the year 2013.
With the motto of <b> Grooming Personalities, </b>  the board aims at not only refining the engineering graduates academically, but holistically. It believes in the collective responsibility of the student fraternity towards the betterment of society and thus, constantly works in the direction of achieving this cause.
The board tries to achieve its goals by a series of various events conducted throughout the academic year, both inside and outside the university.
</p>
         
          <Typography
               variant="h2"
               align="center"
               sx={{
                 fontWeight: 800,
                 lineHeight: 1.05,
                 fontSize: { xs: "2rem", sm: "3rem", md: "3.5rem" },
                 background: "linear-gradient(90deg,rgba(89, 173, 89, 1),rgba(100, 23, 225, 1))",
                 WebkitBackgroundClip: "text",
                 WebkitTextFillColor: "transparent",
                 letterSpacing: "-0.5px",
                 mb: 5
               }}
             >
               Some Glimpses <br />
             </Typography>
             <Box
               sx={{
                 width: "100vw",
                 display: "flex",
                 justifyContent: "center"
               }}
             >
               <Box
                 sx={{
                   width: { xs: "90vw", md: "70vw" }
                 }}
               >
                 <Swiper
                   modules={[Autoplay]}
                   autoplay={{ delay: 2000, disableOnInteraction: false }}
                   loop
                   speed={2000}
                   spaceBetween={20}
                   centeredSlides={true}
                   slidesPerView={2}
                   breakpoints={{
                     1024: { slidesPerView: 3 }
                   }}
                   style={{ width: "100%", paddingTop: 10, paddingBottom: 10 }}
                 >
                   {images.map((img, index) => (
                     <SwiperSlide key={index}>
                       <Box
                         sx={{
                           m: "auto",
                           width: { xs: 150, sm: 200, md: 260 },
                           height: { xs: 100, sm: 140, md: 180 },
                           borderRadius: "1rem",
                           overflow: "hidden",
                           border: "2px solid #3b82f6",
                           boxShadow: 3,
                           background: "#fff",
                           display: "flex",
                           alignItems: "center",
                           justifyContent: "center",
                         }}
                       >
                         <img
                           src={img}
                           alt="Highlights"
                           style={{ width: "100%", height: "100%", objectFit: "cover" }}
                         />
                       </Box>
                     </SwiperSlide>
                   ))}
                 </Swiper>
               </Box>
             </Box>
           
        </>
     );
}

export default About
;
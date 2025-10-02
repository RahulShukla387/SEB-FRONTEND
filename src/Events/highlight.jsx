
import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Box } from "@mui/material";
import Typography from '@mui/material/Typography';

function Highlight({ images }) {
  return (
    <>
      <div className='ml-[15%]'>
        <h1 className=' lg:mr-[12%]   sm:text-start lg:text-center font-serif text-gray-500'>
          Event Glimpses
        </h1>
        <Box>
          <Swiper
            modules={[Autoplay]}   // <-- register module here
            autoplay={{ delay: 1500, disableOnInteraction: false }}
            loop={true}
            speed={2000}
              breakpoints={{
            600: { slidesPerView: 1 },
            900: { slidesPerView: 2 }
          }}
              spaceBetween={24}
          >
            {images.map((img, index) => (
              <SwiperSlide key={index}
              

              >
                <div
                  className="ml-5 border-2 border-blue-500 shadow-lg flex items-center justify-center overflow-hidden bg-white hover:shadow-xl transition"
                  
                  style={{
                    width: 400,    // fixed width in px (adjust as needed)
                    height: 300,   // fixed height in px (adjust as needed)
                    borderRadius: '1rem',
                  }}
                >
                    
                  <img
                    className='w-full h-full object-cover'
                    src={img}
                    alt="Highlights"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </div>
    </>
  );
}

export default Highlight;

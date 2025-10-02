





import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
// import "./landingStyle.css";
import { Autoplay } from "swiper/modules";
import { Box, Typography } from "@mui/material";
import { useState, useEffect } from 'react';

function Highlight() {
 

// Helper component for Icons
const Icon = ({ name, className }) => {
  const icons = {
    compass: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <circle cx="12" cy="12" r="10"></circle>
        <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>
      </svg>
    ),
    users: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
        <circle cx="9" cy="7" r="4"></circle>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
      </svg>
    ),
    'trending-up': (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
            <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
            <polyline points="17 6 23 6 23 12"></polyline>
        </svg>
    ),
    handshake: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
            <path d="M14.5 18L12 20.5 9.5 18"></path>
            <path d="M7 14.5l-4.5 4.5"></path>
            <path d="M12 12l1.5-1.5c2.8-2.8 2.8-7.2 0-10l-4-4c-2.8-2.8-7.2-2.8-10 0l1.5 1.5"></path>
            <path d="m19 5-4 4"></path>
            <path d="m15 9-4 4"></path>
        </svg>
    ),
    briefcase: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
            <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
        </svg>
    ),
    'message-square': (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        </svg>
    ),
    lightbulb: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
            <path d="M9 18h6"></path>
            <path d="M10 22h4"></path>
            <path d="M12 2a7 7 0 0 0-7 7c0 3.03 1.09 5.4 2.78 6.87L12 22l4.22-6.13C17.91 14.4 19 11.03 19 9a7 7 0 0 0-7-7z"></path>
        </svg>
    ),
    presentation: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
            <path d="M2 3h20v12H2z"></path>
            <path d="M12 15v5"></path>
            <path d="M8 20h8"></path>
            <path d="m6 8 3 3 5-5"></path>
        </svg>
    ),
    code: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
            <polyline points="16 18 22 12 16 6"></polyline>
            <polyline points="8 6 2 12 8 18"></polyline>
        </svg>
    ),
    heart: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
        </svg>
    ),
    menu: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
    ),
  };
  return icons[name] || null;
};




  return (
  <>
            <section  id="about" className="mt-[8%] px-[5%]">
              {/* <h1 className='text-center font-serif text-gray-500 '> The Social Engineer's Board </h1>   */}
                <div className="container mx-auto px-6 text-center">
                    {/* <h2 className="section-title">Who We Are</h2> */}
                    <p className="section-subtitle">The Social Engineer's Board is a student-led society at MMMUT dedicated to fostering personal and professional growth. We are a community of thinkers, leaders, and helpers, passionate about making a positive impact.</p>
                 
        

      {/* Prominent Images Carousel */}
      {/* <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          mt: 0,
          minHeight: { xs: 140, sm: 160, md: 220, lg: 270 },
        }}
      >
        <Swiper
         speed={1000}
          className="image-swiper"
          modules={[Autoplay]}
          autoplay={{ delay: 2200, disableOnInteraction: false }}
          loop={true}
          slidesPerView={2}
          spaceBetween={24}
          breakpoints={{
            600: { slidesPerView: 2 },
            900: { slidesPerView: 3 }
          }}
        >
          {/* Repeat for each image */}
          {/* {[
            "/images/seb bg1.jpg",
            "/images/mmmutLogo.jpeg",
            "/images/seblogo-removebg-preview.png",
            "/images/TechnicalSubcouncil.jpeg",
          ].map((src, idx) => (
            <SwiperSlide key={src}>
              <Box
                sx={{
                  ml: 15,
                  width: { xs: 110, sm: 120, md: 130, lg: 150 },
                  height: { xs: 110, sm: 120, md: 130, lg: 150 },
                  borderRadius: "50%",
                  border: "3px solid #6417E1",
                  boxShadow: "0px 4px 20px 1px rgba(100,23,225,0.07)",
                  overflow: "hidden",
                  background: "#fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "box-shadow 0.25s, transform 0.25s",
                  "&:hover": {
                    boxShadow: "0px 6px 30px 2px rgba(100,23,225,0.21)",
                    transform: "scale(1.01)"
                  }
                }}
              >
                <img
                  src={src.replace(/\\/g, "/")}
                  alt={`Highlight ${idx + 1}`}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "50%",
                  }}
                />
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box> */} 

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Card 1 */}
                        <div className="bg-white p-6 rounded-lg shadow-lg text-center transform hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
                           <div className="bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                               <Icon name="compass" className="text-blue-600 h-10 w-10" />
                           </div>
                            <h3 className="text-xl font-semibold mb-2 text-gray-800">Our Mission</h3>
                            <p className="text-gray-600">To guide students towards their career goals through mentorship and support.</p>
                        </div>
                         {/* Card 2 */}
                        <div className="bg-white p-6 rounded-lg shadow-lg text-center transform hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
                           <div className="bg-green-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                                <Icon name="users" className="text-green-600 h-10 w-10" />
                           </div>
                            <h3 className="text-xl font-semibold mb-2 text-gray-800">Our Community</h3>
                            <p className="text-gray-600">A vibrant network where ideas are shared and friendships are built.</p>
                        </div>
                         {/* Card 3 */}
                        <div className="bg-white p-6 rounded-lg shadow-lg text-center transform hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
                            <div className="bg-purple-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                                <Icon name="trending-up" className="text-purple-600 h-10 w-10" />
                           </div>
                            <h3 className="text-xl font-semibold mb-2 text-gray-800">Our Vision</h3>
                            <p className="text-gray-600">To empower every student to become a confident and successful professional.</p>
                        </div>
                         {/* Card 4 */}
                         <div className="bg-white p-6 rounded-lg shadow-lg text-center transform hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
                           <div className="bg-yellow-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                                <Icon name="handshake" className="text-yellow-600 h-10 w-10" />
                           </div>
                            <h3 className="text-xl font-semibold mb-2 text-gray-800">Our Values</h3>
                            <p className="text-gray-600">Collaboration, Integrity, and a commitment to helping one another succeed.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* What We Do Section */}
            <section id="what-we-do" className=" px-[5%] py-20 bg-white">
                <div className="container mx-auto px-6">
                    <h2 className="section-title">What We Offer</h2>
                    <p className="section-subtitle">We provide a range of activities designed to build skills, broaden perspectives, and prepare you for the professional world.</p>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Service Card 1 */}
                        <div className="bg-gray-50 p-8 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 ease-in-out">
                            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-600 mb-6">
                                <Icon name="briefcase" className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-semibold mb-3 text-gray-800">Career Counselling</h3>
                            <p className="text-gray-600">Get personalized guidance from seniors and industry experts to map out your career path.</p>
                        </div>
                        {/* Service Card 2 */}
                        <div className="bg-gray-50 p-8 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 ease-in-out">
                            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-green-100 text-green-600 mb-6">
                               <Icon name="message-square" className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-semibold mb-3 text-gray-800">Discussions & Debates</h3>
                            <p className="text-gray-600">Engage in stimulating conversations on current affairs, technology, and more to sharpen your critical thinking.</p>
                        </div>
                        {/* Service Card 3 */}
                        <div className="bg-gray-50 p-8 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 ease-in-out">
                            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-purple-100 text-purple-600 mb-6">
                                <Icon name="lightbulb" className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-semibold mb-3 text-gray-800">Skill Workshops</h3>
                            <p className="text-gray-600">Participate in workshops on public speaking, resume building, interview skills, and more.</p>
                        </div>
                        {/* Service Card 4 */}
                        <div className="bg-gray-50 p-8 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 ease-in-out">
                            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-red-100 text-red-600 mb-6">
                                <Icon name="presentation" className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-semibold mb-3 text-gray-800">Guest Lectures</h3>
                            <p className="text-gray-600">Learn from the experiences of successful professionals and alumni.</p>
                        </div>
                        {/* Service Card 5 */}
                         <div className="bg-gray-50 p-8 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 ease-in-out">
                            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-indigo-100 text-indigo-600 mb-6">
                                <Icon name="code" className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-semibold mb-3 text-gray-800">Technical Projects</h3>
                            <p className="text-gray-600">Collaborate on projects to gain hands-on experience and build your portfolio.</p>
                        </div>
                        {/* Service Card 6 */}
                         <div className="bg-gray-50 p-8 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 ease-in-out">
                            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-pink-100 text-pink-600 mb-6">
                                <Icon name="heart" className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-semibold mb-3 text-gray-800">Community Service</h3>
                            <p className="text-gray-600">Give back to the community through various social initiatives and outreach programs.</p>
                        </div>
                    </div>
                </div>
            </section>
     </>
  );
}

export default Highlight;

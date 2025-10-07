// import React from 'react';
// import { Card, CardContent, CardMedia, Typography, Grid } from "@mui/material";

// const members = [
//   {
//   name: "Devesh Yadav",
//   designation: "President",
//   Year: "Final Year",
//   Branch: "MED",
//   photo: "/images/deveshSirPresident.jpg",
//   },
//   {
//     name: "Prince Yadav",
//     designation: "Vice-President",
//     Year: "Final Year",
//     Branch: "ECED",
//     photo: "/members/gallery3.JPG",
//   },
// {
// name: "Bhavya Srivastava",
// designation: "Secretery",
// Year: "Final Year",
// Branch: "CSED",
// photo: "/members/IMG-20250906-WA0007 - Bhavya Srivastava (2).jpg",
// },

// ];
// function Incharge() {
//     return (  
//         <>
//       <Typography
//              variant="h4"
//              component="h1"
//              align="center"
//              sx={{ fontFamily: 'serif', color: 'gray', mb: 1, mt: 4 }}
//            >
//              Our Teams
//            </Typography>
     
//            <Typography
//              variant="h5"
//              component="h2"
//              align="center"
//              sx={{ fontFamily: 'serif', color: 'gray', mb: 4 }}
//            >
//              Club Incharges
//            </Typography> 

//             <Grid container spacing={25} justifyContent="center" sx={{ mt: 2 }}>
//               {members.map((member, index) => (
//                 <Grid item xs={12} sm={6} md={4} key={index} spacing={4} >
//                   <Card 
//                    className=''
//                    sx={{
//                         scale:0.9,
//                      maxWidth: 500,
//                      width: 300,
//                      height: 480,
//                      borderRadius: 3,
//                      boxShadow: 3,
//                      "&:hover": { boxShadow: 10 , scale:0.92 },
//                      overflow: "hidden",
//                     }}
//                   >
//                     <CardMedia
//                       component="img"
//                       image={member.photo}
//                       // className='rounded-[9rem]'
//                       // className='rounded-bl-[8rem] rounded-br-[8rem]'
//                       alt={member.name}
//                         sx={{
//                         height: 350,        // fixed height
//                         objectFit: "cover", // fills space without stretching
//                         width: "100%",      // full card width
//             }}
//                     />
//                     <CardContent sx={{ textAlign: "center" }}>
//                       <Typography variant="h6" fontWeight="bold">
//                         {member.name}
//                       </Typography>
//                       <Typography variant="body3" color="text.secondary">
//                         {member.designation}
//                       </Typography>
//                       <Typography variant="body2" color="text.secondary">
//                         {member.Year}
//                       </Typography>
//                       <Typography variant="body2" color="text.secondary">
//                         {member.Branch}
//                       </Typography>
//                     </CardContent>
//                   </Card>
//                 </Grid>
//               ))}
//             </Grid>
//         </>
//      );
// }


import React, { useRef, useState } from 'react';
import { Card, CardContent, CardMedia, Typography, Box, IconButton, useTheme, useMediaQuery } from "@mui/material";
import { ArrowBackIosNew, ArrowForwardIos } from '@mui/icons-material';

const members = [
    { name: "Devesh Yadav", Year: "Final Year", Branch: "MED", photo: "/images/deveshSirPresident.jpg", designation: "President" },
    { name: "Prince Yadav", Year: "Final Year", Branch: "ECED", photo: "/members/PrinceYadavSirNew.jpg", designation: "Vice-President" },
    { name: "Bhavya Srivastava", Year: " Final Year", Branch: "CSED", photo: "/members/IMG-20250906-WA0007 - Bhavya Srivastava (2).jpg" , designation: "Secretery" },
    { name: "Priya Chaudhary", Year: " Final Year", Branch: "CED", photo: "/members/PriyaChaudhary.jpg" , designation: "Treasurer" },
    { name: "Sanjana Agrahari", Year: " Final Year", Branch: "ECED", photo: "/members/SanjanaAgrahari.jpg" , designation: "Editorial Head" },
    { name: "Devraj Anand", Year: " Final Year", Branch: "EED", photo: "/images/DevrajAnand.jpg" , designation: "Technical Head" },
    { name: "Divya Kumar Mishra", Year: " Final Year", Branch: "CED", photo: "/images/DivyaKumarMishra.jpg" , designation: "Technical Head" },
    { name: "Sneha Jaiswal", Year: " Final Year", Branch: "CED", photo: "/members/SnehaJaiswal.jpg" , designation: "Editorial Head" },
    { name: "Aditya Sharma", Year: " Final Year", Branch: "EED", photo: "/images/adityaSharma.jpg" , designation: "Treasurer" },
    
];

function Incharge() {
    const theme = useTheme();
    const isLg = useMediaQuery(theme.breakpoints.up('lg'));
    const isMd = useMediaQuery(theme.breakpoints.up('md'));
    const isSm = useMediaQuery(theme.breakpoints.up('sm'));

    const getVisibleCards = () => {
        if (isLg) return 5;
        if (isMd) return 4;
        if (isSm) return 2;
        return 1;
    };

    const containerRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const visibleCards = getVisibleCards();

    const handleScroll = (direction) => {
        const newIndex = currentIndex + direction * visibleCards;
        if (newIndex >= 0 && newIndex < members.length) {
            const scrollAmount = containerRef.current.offsetWidth;
            containerRef.current.scrollBy({
                left: direction * scrollAmount,
                behavior: 'smooth'
            });
            setCurrentIndex(newIndex);
        }
    };

    const canScrollLeft = currentIndex > 0;
    const canScrollRight = currentIndex + visibleCards < members.length;

    return (
        <Box sx={{ my: 10 }}>
            <Typography
                variant="h4"
                component="h2"
                align="center"
                sx={{ fontFamily: 'serif', color: 'gray', mb: 10 }}
            >
                 Club Incharges
            </Typography>

            <Box sx={{ position: 'relative', px: { xs: 1, sm: 2, md: 4 } }}>
                <IconButton
                    onClick={() => handleScroll(-1)}
                    disabled={!canScrollLeft}
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: { xs: -10, md: -20 },
                        transform: 'translateY(-50%)',
                        zIndex: 2,
                        bgcolor: 'rgba(255, 255, 255, 0.7)',
                        '&:hover': { bgcolor: 'white' },
                        display: canScrollLeft ? 'flex' : 'none',
                    }}
                >
                    <ArrowBackIosNew />
                </IconButton>

                <Box
                    ref={containerRef}
                    sx={{
                        display: 'flex',
                        overflowX: 'auto',
                        scrollSnapType: 'x mandatory',
                        '&::-webkit-scrollbar': { display: 'none' },
                        scrollbarWidth: 'none',
                        gap: 3,
                        px: 1,
                    }}
                >
                    {members.map((member, index) => (
                        <Box
                            key={index}
                            sx={{
                                flex: `0 0 calc((100% / ${visibleCards}) - ${1.5 * (visibleCards - 1) / visibleCards}rem)`,
                                scrollSnapAlign: 'start',
                            }}
                        >
                            <Card
                                sx={{
                                    height: 380,
                                    borderRadius: 3,
                                    boxShadow: 3,
                                    overflow: "hidden",
                                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                                    "&:hover": {
                                        boxShadow: 10,
                                        transform: "scale(1.04)",
                                    },
                                    cursor: "pointer",
                                    background: "#fff",
                                    display: "flex",
                                    flexDirection: "column",
                                }}
                            >
                                <Box sx={{ position: 'relative', height: 280, overflow: 'hidden' }}>
                                    <CardMedia
                                        component="img"
                                        image={member.photo}
                                        alt={member.name}
                                        sx={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover',
                                            objectPosition: 'top',
                                            transition: "transform 0.5s ease",
                                        }}
                                    />
                                    <Box
                                        sx={{
                                            position: 'absolute',
                                            bottom: 0,
                                            left: 0,
                                            right: 0,
                                            height: '25%',
                                            background: 'linear-gradient(to top, rgba(0, 0, 0, 0.5), transparent)',
                                        }}
                                    />
                                </Box>
                                <CardContent sx={{ textAlign: "center", pt: 3, flexGrow: 1 }}>
                                    <Typography variant="h6" fontWeight="bold" gutterBottom>
                                        {member.name}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {member.Year} | {member.Branch}
                                    </Typography>
                                    <Typography variant="body3" color="text.secondary">
                                        {member.designation}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Box>
                    ))}
                </Box>

                <IconButton
                    onClick={() => handleScroll(1)}
                    disabled={!canScrollRight}
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        right: { xs: -10, md: -20 },
                        transform: 'translateY(-50%)',
                        zIndex: 2,
                        bgcolor: 'rgba(255, 255, 255, 0.7)',
                        '&:hover': { bgcolor: 'white' },
                        display: canScrollRight ? 'flex' : 'none',
                    }}
                >
                    <ArrowForwardIos />
                </IconButton>
            </Box>
        </Box>
    );
}

// export default Members;

export default Incharge;
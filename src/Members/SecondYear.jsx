
import React, { useRef, useState } from 'react';
import { Card, CardContent, CardMedia, Typography, Box, IconButton, useTheme, useMediaQuery } from "@mui/material";
import { ArrowBackIosNew, ArrowForwardIos } from '@mui/icons-material';

const members = [
    { name: "Rahul Shukla", Year: "Sophomore Year", Branch: "CSED", photo: "/images/WhatsApp Image 2025-09-14 at 23.54.31_cb617739.jpg" },
    { name: "Prathit Mishra", Year: "Sophomore Year", Branch: "EED", photo: "/images/Screenshot_20250927_035519_Gallery - Prathit (1).jpg" },
    { name: "Aditya Mishra", Year: "Sophomore Year", Branch: "ECED", photo: "/images/Aditya Mishra.jpg" },
    { name: "Devesh Singh", Year: "Sophomore Year", Branch: "ECE", photo: "/images/IMG_20241229_180114181 - Devesh Singh.jpg" },
    { name: "Abhishek Tiwari", Year: "Sophomore Year", Branch: "ECED", photo: "/images/IMG_20250216_225502 - Abhishek Tiwari.jpg" },
    { name: "Shweta Gautam", Year: "Sophomore Year", Branch: "CSED", photo: "/images/IMG_20250303_144112 - Shweta Gautam.jpg" },
    { name: "Shreya Singh", Year: "Sophomore Year", Branch: "CSED", photo: "/images/Shreya Singh.jpg" },
    { name: "Aditya Jaiswal", Year: "Sophomore Year", Branch: "CED", photo: "/images/IMG_20250520_140627 - Aditya Jaiswal.jpg" },
    { name: "Vidya Prajapati", Year: "Sophomore Year", Branch: "ECE(IOT)", photo: "/images/IMG_20250927_174459 - Vidya Prajapati.jpg" },
    { name: "Abhishek Priyadarshi", Year: "Sophomore Year", Branch: "CED", photo: "/images/IMG_20250928_004929 - Abhishek Priyadarshi.jpg" },
    { name: "Sonal Jaiswal", Year: "Sophomore Year", Branch: "ECED", photo: "/images/IMG-20241124-WA0083 - Sonal Jaiswal.jpg" },
    { name: "Kislay Dubey", Year: "Sophomore Year", Branch: "CSED", photo: "/images/IMG-20250209-WA0026 - Kislay Dubey.jpg" },
    { name: "Shruti Tiwari", Year: "Sophomore Year", Branch: "ECED", photo: "/images/IMG-20250412-WA0021 - Subodh Tiwari (1).jpg" },
];

function Second() {
    const theme = useTheme();
    const isLg = useMediaQuery(theme.breakpoints.up('lg'));
    const isMd = useMediaQuery(theme.breakpoints.up('md'));
    const isSm = useMediaQuery(theme.breakpoints.up('sm'));

    const getVisibleCards = () => {
        if (isLg) return 5;
        if (isMd) return 3;
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

export default Second;


import React, { useRef, useState } from 'react';
import { Card, CardContent, CardMedia, Typography, Box, IconButton, useTheme, useMediaQuery } from "@mui/material";
import { ArrowBackIosNew, ArrowForwardIos } from '@mui/icons-material';

const members = [
    { name: "Kanishka Singh", Year: "Pre Final Year", Branch: "EED", photo: "/members/IMG_8333 - Kanishka Singh (1).JPG" },
    { name: "Aditya Kumar Saroj", Year: "Pre Final Year", Branch: "MED", photo: "/members/IMG-20250929-WA0011 - ADITYA KUMAR SAROJ (1).jpg" },
    { name: "Amit Kanojiya", Year: "Pre Final Year", Branch: "EED", photo: "/members/28c1c469c36c9278523d485165d3e4e9249e04ae449a78024cd4969539f92646 - Amit Kanaujiya.jpg" },
    { name: "Vaishnavi Shukla", Year: "Pre Final Year", Branch: "MED", photo: "/members/IMG_20250904_223659 - AVS.jpg" },
    { name: "Ankita Agrahari", Year: "Pre Final Year", Branch: "CSED", photo: "/members/Snapchat-1919705206 - Ankita Agrahari (1).jpg" },
    { name: "Priyanshu Mathur", Year: "Pre Final Year", Branch: "CSED", photo: "/members/DSC_6775_2 - Priyanshu Mathur.JPG" },
    { name: "Anshika Chaudhary", Year: "Pre Final Year", Branch: "CED", photo: "/members/IMG_20250929_181700 - Anshika Chaudhary (1).jpg" },
    { name: "Divyansh Singh", Year: "Pre Final Year", Branch: "CED", photo: "/members/IMG_4893 - _Divyansh.jpg" },
    { name: "Harshit Jaiswal", Year: "Pre Final Year", Branch: "CED", photo: "/members/IMG-20250720-WA0389 - Harshit (1).jpg" },
    { name: "Mridul Goel", Year: "Pre Final Year", Branch: "CED", photo: "/members/IMG-20240503-WA0046 - Mridul Goel (1).jpg" },
    { name: "Rahul Singh", Year: "Pre Final Year", Branch: "CHED", photo: "/members/IMG_20240429_111437 - Rahul Singh.jpg" },
      {
    name: "Kartikey Yadav",
    Year: "Pre Final Year",
    Branch: "EED",
    // photo: "/images/Shivam Sir Faculty Advisor.jpg",
  },
  {
    name: "Mayank Agarwal",
    Year: "Pre Final Year",
    Branch: "EED",
    // photo: "/images/Shivam Sir Faculty Advisor.jpg",
  },
    {
    name: "Abhinav Sahani",
    Year: "Pre Final Year",
    Branch: "CHED",
    // photo: "/images/Shivam Sir Faculty Advisor.jpg",
  },
];

function Members() {
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
            <Typography
                variant="h4"
                component="h2"
                align="center"
                sx={{ fontFamily: 'serif', color: 'gray', mb: 10 }}
            >
                Executive Members
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

export default Members;
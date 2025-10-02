


import React from 'react';
import { Typography, Box, Container } from '@mui/material';

// A reusable component for the feature sections to keep the code DRY
const FeatureSection = ({ title, description, imageUrl, imageOnLeft = true }) => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: { 
                    xs: 'column', 
                    // Use 'row-reverse' to place the image on the right
                    md: imageOnLeft ? 'row' : 'row-reverse' 
                },
                alignItems: 'center',
                gap: { xs: 4, md: 8 },
            }}
        >
            {/* Text Content */}
            <Box sx={{ flex: 1 }}>
                <Typography
                    variant="h4"
                    component="h3"
                    sx={{
                        fontWeight: 700,
                        mb: 2,
                        color: 'grey.800',
                    }}
                >
                    {title}
                </Typography>
                <Typography
                    variant="body1"
                    sx={{
                        color: 'grey.600',
                        lineHeight: 1.7,
                        fontSize: '1.1rem',
                    }}
                >
                    {description}
                </Typography>
            </Box>

            {/* Image Content */}
            <Box sx={{ flex: 1, width: '100%' }}>
                <Box
                    component="img"
                    src={imageUrl}
                    alt={title}
                    sx={{
                        width: '100%',
                        height: 'auto',
                        borderRadius: '16px', // Softer, modern corners
                        boxShadow: '0 8px 32px rgba(0,0,0,0.12)', // Subtle shadow for depth
                        objectFit: 'cover',
                    }}
                />
            </Box>
        </Box>
    );
};

function Drishyaa() {
    return (
        <Container maxWidth="lg" sx={{ my: { xs: 8, md: 12 } }}>
            {/* Main Heading */}
            <Box sx={{ textAlign: 'center', mb: 10 }}>
                <Typography
                    variant="h2"
                    sx={{
                        fontWeight: 800,
                        lineHeight: 1.2,
                        fontSize: { xs: "2.5rem", sm: "3.5rem", md: "4.5rem" },
                        background: "linear-gradient(90deg, rgba(89, 173, 89, 1), rgba(100, 23, 225, 1))",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        letterSpacing: "-1px",
                    }}
                >
                    Drishyaa
                </Typography>
                <Typography
                    variant="h5"
                    sx={{
                        mt: 2,
                        color: 'grey.700',
                        maxWidth: '700px',
                        mx: 'auto',
                        fontWeight: 400,
                    }}
                >
                    Drishyaa is not just an event, it is a vision. A platform dedicated to nurturing young minds and shaping brighter futures.
                </Typography>
            </Box>

            {/* Sections Container */}
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 8, md: 12 } }}>
                <FeatureSection
                    title="A Journey of Growth"
                    description="Through collective efforts, we aim to support students in their journey of growth and success. This social initiative brings together ideas, opportunities, and guidance for the leaders of tomorrow."
                    imageUrl="/members/gallery1.JPG"
                    imageOnLeft={false} // Image on the right
                />
                <FeatureSection
                    title="Inspiring Meaningful Change"
                    description="With this event, we aspire to create meaningful impact and inspire change. Together, let’s empower students and build a stronger tomorrow."
                    imageUrl="/images/Drishyaa5.png"
                    imageOnLeft={true} // Image on the left
                />
            </Box>
        </Container>
    );
}

export default Drishyaa;
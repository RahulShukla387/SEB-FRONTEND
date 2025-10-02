


import React from 'react';
import { Typography, Box, Container } from '@mui/material';

// A reusable component for the feature sections to keep the code DRY and consistent
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

function Dhishan() {
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
                    Dhishan
                </Typography>
                <Typography
                    variant="h5"
                    sx={{
                        mt: 2,
                        color: 'grey.700',
                        maxWidth: '800px',
                        mx: 'auto',
                        fontWeight: 400,
                    }}
                >
                    An occasion bringing together influential leaders to discuss and shape the future of governance and innovation.
                </Typography>
            </Box>

            {/* Sections Container */}
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 8, md: 12 } }}>
                <FeatureSection
                    title="Shaping the Future"
                    description="Each challenge faced is a chance to evolve, fortifying our resolve and enriching our collective wisdom. The Dhishan event is a platform for this growth."
                    imageUrl="/images/dhishani4.JPG"
                    imageOnLeft={false} // Image on the right
                />
                <FeatureSection
                    title="A Legacy of Leadership"
                    description="This journey not only tests our mettle but also unites us in pursuing a shared vision, ensuring that every participant emerges stronger, ready to contribute to our legacy of intellectual leadership and innovation."
                    imageUrl="/images/dhishani2.JPG"
                    imageOnLeft={true} // Image on the left
                />
            </Box>
        </Container>
    );
}

export default Dhishan;



import React from 'react';

// Reusable component for the abstract SVG graphic (Growth and Network)
const GrowthNetworkGraphic = () => (
    <div className=" max-w-lg mx-auto w-full">
        <svg className="w-full h-auto" viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
            {/* Abstract Background Shape (Soft Glow) */}
            <circle cx="200" cy="100" r="100" fill="url(#gradientCenter)" opacity="0.15"/>
            <defs>
                <radialGradient id="gradientCenter" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                    {/* Using direct hex/rgb values since custom Tailwind colors are not defined in this scope */}
                    <stop offset="0%" style={{stopColor: 'rgb(30, 58, 138)', stopOpacity: 1}} />
                    <stop offset="100%" style={{stopColor: 'rgb(249, 250, 251)', stopOpacity: 1}} />
                </radialGradient>
                {/* Gradient for the main line to give an upward glow */}
                <linearGradient id="upwardGradient" x1="0%" y1="100%" x2="0%" y2="0%">
                    <stop offset="0%" style={{stopColor: '#1E3A8A', stopOpacity: 0.3}} />
                    <stop offset="100%" style={{stopColor: '#F59E0B', stopOpacity: 1}} />
                </linearGradient>
            </defs>

            {/* Dynamic Network Lines (Growth/Connections) */}
            <path d="M50 150 Q100 50 200 100 T350 50" stroke="#1E3A8A" strokeWidth="2" fill="none" opacity="0.3"/>
            <path d="M50 170 Q150 190 250 130 T350 100" stroke="#F59E0B" strokeWidth="2" fill="none" opacity="0.4"/>

            {/* Main Upward Trajectory Line (Shaping Tomorrow) */}
            <path d="M100 180 C150 150, 250 50, 300 20" stroke="url(#upwardGradient)" strokeWidth="4" fill="none" strokeLinecap="round"/>

            {/* Nodes (Personalities/Engineers) */}
            <circle cx="300" cy="20" r="6" fill="#F59E0B"/>
            <circle cx="250" cy="130" r="5" fill="#1E3A8A"/>
            <circle cx="50" cy="170" r="5" fill="#1E3A8A"/>
            <circle cx="200" cy="100" r="7" fill="#1E3A8A"/>
            <circle cx="350" cy="100" r="5" fill="#1E3A8A"/>
        </svg>
    </div>
);


const Home = () => {
    // Custom colors used in the original HTML (using hex values directly)
    const sebPrimary = '#1E3A8A'; // Dark Blue
    const sebSecondary = '#F59E0B'; // Amber/Orange
    const sebBackground = '#F9FAFB'; // Light Gray

    return (
        // The main container for the content, replacing the <body> tag content
        // We use the custom background color and font setup here
        <div className={`font-sans bg-[${sebBackground}] text-gray-800 min-h-screen`}>


            {/* SECTION I: HERO - Direct and Inspiring */}
            <section id="hero" className="pb-16 md: md:pb-24 bg-white">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    {/* Headline: Bold and prominent */}
                    <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-gray-900 mb-6">
                        <span className="block">Grooming Personalities.</span>
                        <span className="block text-[${sebPrimary}] mt-1 md:mt-2">Shaping Tomorrow.</span>
                    </h1>
                    
                    {/* Sub-Headline: Clear mission statement */}
                    <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                        The Social Engineers' Board is a student-led society at MMMUT dedicated to fostering <strong className="font-semibold">holistic</strong> personal and professional growth through community action and skill refinement.
                    </p>

                    {/* Call-to-Action (CTA) */}
                    <div className="mt-10 flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                        <a 
                            href="/api/CurrentEvent" 
                            // Replicating card-shadow hover logic with native Tailwind utility classes
                            className={`inline-block bg-[${sebSecondary}] text-blue font-semibold px-8 py-3 rounded-xl shadow-xl hover:bg-yellow-600 transition duration-300 transform hover:-translate-y-1 hover:shadow-2xl`}
                        >
                            Join The Live Events Of Drishyaa &rarr;
                        </a>
                    </div>

                    {/* SVG Graphic for Growth and Network */}
                    <GrowthNetworkGraphic />

                    {/* Origin Statement */}
                    <p className="mt-10 text-sm text-gray-500 max-w-3xl mx-auto">
                        Established in 2013 by students of MMMEC: Naveen Krishna Rai and Mohit Jha (ECE, 2016 passout).
                    </p>
                </div>
            </section>
        </div>
    );
};

// Exporting the component as the default App component as per the instructions
export default Home;


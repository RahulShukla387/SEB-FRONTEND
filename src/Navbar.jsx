// import React, { useState, useEffect } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHome, faUsers, faCalendarAlt, faBullhorn, faUpload } from '@fortawesome/free-solid-svg-icons';
// // Note: Since this environment assumes no React Router is set up, 
// // <Link> is replaced with a standard <a> tag for portability, 
// // though the path structure is retained.

// // --- Color and Data Constants (Matching Home.jsx) ---
// const SEB_PRIMARY = '#1E3A8A';   // Dark Blue
// // const SEB_SECONDARY = '#F59E0B'; // Amber/Orange

// const pages = [
//     { label: "Home", path: "/", icon: faHome },
//     { label: "Members", path: "/Members", icon: faUsers },
//     { label: "Events", path: "/Events", icon: faCalendarAlt },
//     { label: "Notice", path: "/Notice", icon: faBullhorn},
//     { label: "Upload", path: "/Upload", icon: faUpload },
// ];

// const FULL_TITLE = "The Social Engineer's Board";

// // --- Typing Animation Component ---
// const TypingTitle = ({ text }) => {
//     const [displayedText, setDisplayedText] = useState('');
//     const [index, setIndex] = useState(0);
//     const typingSpeed = 70; // ms per character
//     const delayBeforeRestart = 2500; // ms

//     useEffect(() => {
//         if (index < text.length) {
//             const timeout = setTimeout(() => {
//                 setDisplayedText(prev => prev + text[index]);
//                 setIndex(index + 1);
//             }, typingSpeed);
//             return () => clearTimeout(timeout);
//         } else if (index === text.length) {
//             // Once typing is complete, wait for the delay period
//             const resetTimeout = setTimeout(() => {
//                 setDisplayedText('');
//                 setIndex(0);
//             }, delayBeforeRestart);
//             return () => clearTimeout(resetTimeout);
//         }
//     }, [index, text]);

//     // The text now uses a single, solid color matching the SEB_PRIMARY blue.
//     return (
//         <a href="/" className="flex items-center space-x-2 no-underline">
//             <h1 
//                 className={`text-xl font-extrabold tracking-wide min-h-[1.5em] text-[${SEB_PRIMARY}]`}
//             >
//                 {displayedText}
//                 {/* Flashing cursor simulation */}
//                 <span className="animate-pulse" style={{ color: SEB_PRIMARY }}>|</span>
//             </h1>
//         </a>
//     );
// };


// // --- Main Navbar Component ---
// const Navbar = () => {
//     const [isMenuOpen, setIsMenuOpen] = useState(false);

//     return (
//         <header 
//             className="bg-white sticky top-0 z-20 shadow-md transition-all duration-300"
//             style={{ borderBottom: `2px solid ${SEB_PRIMARY}1a` }} // Subtle bottom border
//         >
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">

//                 {/* Left Side: Logo and Animated Title */}
//                 <div className="flex items-center space-x-4">
//                     {/* SEB Logo (Assuming you have access to the image path) */}
//                     <a href="/">
//                         <img 
//                             src="/images/seblogo-removebg-preview.png" 
//                             alt="SEB Logo" 
//                             className="rounded-full w-10 h-10 object-cover p-1 shadow-inner"
//                             style={{ backgroundColor: SEB_PRIMARY }}
//                         />
//                     </a>
                    
//                     {/* Desktop Animated Title */}
//                     <div className="hidden md:block">
//                         <TypingTitle text={FULL_TITLE} />
//                     </div>
                    
//                     {/* Mobile Title */}
//                     <h1 className="text-xl font-extrabold md:hidden" style={{ color: SEB_PRIMARY }}>SEB</h1>
//                 </div>

//                 {/* Right Side: Desktop Nav Links (Hidden on Mobile) */}
//                 <nav className="hidden md:flex items-center space-x-6">
//                     {pages.map((page) => (
//                         <a 
//                             key={page.label}
//                             href={page.path}

//                             className={`
//                                 text-gray-600 font-medium text-sm py-1 relative group transition duration-300
//                                 hover:text-gray-900 
//                                 hover:font-semibold
//                             `}
//                         >   
//                             <FontAwesomeIcon icon={page.icon} />
//                             {page.label}
//                             {/* Underline effect on hover */}
//                             <span 
//                                 className="absolute bottom-0 left-0 w-full h-0.5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
//                                 // style={{ backgroundColor: SEB_SECONDARY }}
//                             ></span>
//                         </a>
//                     ))}
                    
//                     {/* MMMUT Logo/Link */}
//                     <a 
//                         href="https://mmmut.ac.in/" 
//                         target="_blank" 
//                         rel="noopener noreferrer" 
//                         className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 transition duration-150 ml-4"
//                     >
//                         <span className="text-sm font-semibold">MMMUT</span>
//                         <img 
//                             src="/images/mmmut logo.jpeg" 
//                             alt="MMMU Logo" 
//                             className="w-8 h-8 rounded-full object-cover" 
//                             style={{ border: `2px solid ${SEB_PRIMARY}` }}
//                         />
//                     </a>
//                 </nav>

//                 {/* Mobile Menu Button (Hamburger Icon) */}
//                 <div className="md:hidden">
//                     <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 rounded-md focus:outline-none" aria-label="Toggle menu">
//                         <svg className="w-6 h-6" fill="none" stroke={SEB_PRIMARY} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
//                         </svg>
//                     </button>
//                 </div>

//             </div>

//             {/* Mobile Menu Dropdown (Animated with Transition) */}
//             <div 
//                 className={`md:hidden overflow-hidden transition-max-height duration-500 ease-in-out ${isMenuOpen ? 'max-h-96' : 'max-h-0'}`}
//                 style={{ maxHeight: isMenuOpen ? '500px' : '0' }} // Custom transition for max-height
//             >
//                 <div className="flex flex-col space-y-2 p-4 border-t border-gray-100">
//                     {pages.map((page) => (
//                         <a 
//                             key={page.label}
//                             href={page.path}
//                             onClick={() => setIsMenuOpen(false)}
//                             className={`block px-3 py-2 text-base rounded-lg transition duration-150 text-gray-700 hover:bg-gray-50 hover:text-[${SEB_PRIMARY}] font-medium`}
//                         >
//                             {page.label}
//                         </a>
//                     ))}
//                     <a 
//                         href="https://mmmut.ac.in/" 
//                         target="_blank" 
//                         rel="noopener noreferrer" 
//                         className={`block px-3 py-2 text-base rounded-lg transition duration-150 text-gray-700 hover:bg-gray-50 hover:text-[${SEB_PRIMARY}] font-medium border-t mt-2`}
//                     >
//                         Visit MMMUT Portal
//                     </a>
//                 </div>
//             </div>
//         </header>
//     );
// };

// export default Navbar;
import React, { useState, useEffect } from 'react';

// --- SVG Icon Component ---
// I've replaced the FontAwesome icons with inline SVGs to remove external dependencies
// that were causing the compilation error.
const Icon = ({ name, className }) => {
    const iconProps = {
        className: className,
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        stroke: "currentColor",
        strokeWidth: 2
    };

    switch (name) {
        case 'home':
            return <svg {...iconProps}><path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>;
        case 'users':
            return <svg {...iconProps}><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M15 21v-1a6 6 0 00-1.78-4.125a4 4 0 00-6.44 0A6 6 0 003 20v1z" /></svg>;
        case 'calendar':
            return <svg {...iconProps}><path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>;
        case 'bullhorn':
            return <svg {...iconProps}><path strokeLinecap="round" strokeLinejoin="round" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-2.433 9.168-6M10.322 16.672C12.18 13.65 15.245 12 18.5 12h.083a2.498 2.498 0 002.417-2.316l.002-.016a2.5 2.5 0 00-2.5-2.5h-.083a4.5 4.5 0 00-4.417 3.328M12 12l-1.07-1.07" /></svg>;
        case 'upload':
            return <svg {...iconProps}><path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" /></svg>;
        case 'Gallery':
  return (
    <svg {...iconProps} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 17m0 0l4-4m-4 
           4H4a2 2 0 01-2-2V6a2 2 0 012-2h16a2 2 0 
           012 2v9a2 2 0 01-2 2z"
      />
    </svg>
  );

        default:
            return null;
    }
};


// --- Color and Data Constants ---
const SEB_PRIMARY = 'rgba(111, 111, 206, 1)'; // Dark Blue

const pages = [
    { label: "Home", path: "/", icon: "home" },
    { label: "Members", path: "/Members", icon: "users" },
    { label: "Events", path: "/Events", icon: "calendar" },
    { label: "Notice", path: "/Notice", icon: "bullhorn" },
    { label: "Gallery", path: "/Gallery", icon: "bullhorn" },
    { label: "Upload", path: "/Upload", icon: "upload" },
];

const FULL_TITLE = "The Social Engineer's Board";

// --- Typing Animation Component ---
const TypingTitle = ({ text }) => {
    const [displayedText, setDisplayedText] = useState('');
    const [index, setIndex] = useState(0);
    const typingSpeed = 70; // ms per character
    const delayBeforeRestart = 2500; // ms

    useEffect(() => {
        if (index < text.length) {
            const timeout = setTimeout(() => {
                setDisplayedText(prev => prev + text[index]);
                setIndex(index + 1);
            }, typingSpeed);
            return () => clearTimeout(timeout);
        } else if (index === text.length) {
            const resetTimeout = setTimeout(() => {
                setDisplayedText('');
                setIndex(0);
            }, delayBeforeRestart);
            return () => clearTimeout(resetTimeout);
        }
    }, [index, text]);

    return (
        <a href="/" className="flex items-center space-x-2 no-underline">
            <h1
                className={`text-xl font-extrabold tracking-wide min-h-[1.5em] text-[${SEB_PRIMARY}]`}
            >
                {displayedText}
                <span className="animate-pulse" style={{ color: SEB_PRIMARY }}>|</span>
            </h1>
        </a>
    );
};


// --- Main Navbar Component ---
const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activePage, setActivePage] = useState('');

    useEffect(() => {
        setActivePage(window.location.pathname);
    }, []);


    return (
        <header
            className="bg-white sticky top-0 z-20 shadow-md transition-all duration-300"
            style={{ borderBottom: `2px solid ${SEB_PRIMARY}1a` }}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">

                {/* Left Side: Logo and Animated Title */}
                <div className="flex items-center space-x-4">
                    <a href="/">
                        <img
                            src="/images/seblogo-removebg-preview.png"
                            alt="SEB Logo"
                            className="rounded-full w-10 h-10 object-cover p-1 shadow-inner"
                            // style={{ backgroundColor: SEB_PRIMARY }}
                        />
                    </a>
                    <div className="hidden md:block">
                        <TypingTitle text={FULL_TITLE} />
                    </div>
                    <h1 className="text-xl font-extrabold md:hidden" style={{ color: SEB_PRIMARY }}>SEB</h1>
                </div>

                {/* Right Side: Desktop Nav Links */}
                <nav className="hidden md:flex items-center space-x-2">
                    {pages.map((page) => (
                        <a
                            key={page.label}
                            href={page.path}
                            className={`
                                text-sm py-1 px-2 rounded-md relative group transition-colors duration-300
                                ${activePage === page.path
                                    ? `bg-blue-100 text-[${SEB_PRIMARY}] font-semibold`
                                    : `text-gray-600 hover:text-gray-900 hover:font-semibold font-medium`
                                }
                            `}
                        >
                            <Icon name={page.icon} className="inline-block h-4 w-4 mr-1 align-middle" />
                            {page.label}
                            {/* Underline effect restored from original design */}
                            {/* <span
                                className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                            ></span> */}
                        </a>
                    ))}
                    <a
                        href="https://mmmut.ac.in/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 transition duration-150 ml-4"
                    >
                        <span className="text-sm ">MMMUT</span>
                        <img
                            src="/images/mmmutLogo.jpeg"
                            alt="MMMU Logo"
                            className="w-8 h-8 rounded-full object-cover"
                            // style={{ border: `2px solid ${SEB_PRIMARY}` }}
                        />
                    </a>
                </nav>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 rounded-md focus:outline-none" aria-label="Toggle menu">
                        <svg className="w-6 h-6" fill="none" stroke={SEB_PRIMARY} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
                        </svg>
                    </button>
                </div>

            </div>

            {/* Mobile Menu Dropdown */}
            <div
                className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${isMenuOpen ? 'max-h-96' : 'max-h-0'}`}
            >
                <div className="flex flex-col space-y-2 p-4 border-t border-gray-100">
                    {pages.map((page) => (
                        <a
                            key={page.label}
                            href={page.path}
                            onClick={() => setIsMenuOpen(false)}
                             className={`
                                block px-3 py-2 text-base rounded-lg transition-colors duration-150 font-medium
                                ${activePage === page.path
                                    ? `bg-blue-100 text-[${SEB_PRIMARY}]`
                                    : `text-gray-700 hover:bg-gray-50 hover:text-[${SEB_PRIMARY}]`
                                }
                            `}
                        >
                             {/* Icons removed from mobile view to match original design */}
                             {page.label}
                        </a>
                    ))}
                    <a
                        href="https://mmmut.ac.in/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`block px-3 py-2 text-base rounded-lg transition duration-150 text-gray-700 hover:bg-gray-50 hover:text-[${SEB_PRIMARY}] font-medium border-t mt-2`}
                    >
                        Visit MMMUT Portal
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Navbar;


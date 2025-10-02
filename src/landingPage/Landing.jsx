import React from 'react';
import Navbar from '../Navbar';
import Highlight from './HighLights';
import Home from './Home';
import About from './AboutClub';
import Footer from '../Footer';
function Landing() {
    return ( 
        <>
        <Home/>
        <Highlight/>
        <About/>
        </>
     );
}

export default Landing;
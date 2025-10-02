import React from 'react';
import Drishyaa from './Drishyaa';
import Highlight from './highlight';
function DrishyaaEvent() {
    return ( <>
       <Drishyaa/>
       <Highlight images={["/images/gallery1.JPG","/images/gallery2.JPG", "/images/Drishyaa3.png", "/images/Drishyaa2.png", "/images/Drishyaa5.png"] } />
    </> );
}

export default DrishyaaEvent;
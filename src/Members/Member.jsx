import React from 'react';
// import Incharge from './Incharge';
import Faculty from './Faculty';
import Members from './Members';
import Incharge from './Incharge';
import Second from './SecondYear';
function Member() {
    return ( <>
    <div className='mt-[5%]'>
    <Faculty/>
    <Incharge/>
    <Members/>
    <Second/>
    </div>
    </>  );
}

export default Member;
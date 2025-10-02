 import Dhishan from "./Dhishan";
 import Highlight from "./highlight";
function DhishaanEvent() {
    return ( <>
       <div className='mt-[10%]'>
     <div className='text-center item-center'  >
      <Dhishan/>
      <Highlight images={["/images/dhishani1.JPG","/images/dhishani2.JPG", "/images/dhishani3.JPG", "/images/dhishani4.JPG", "/images/dhishani5.JPG"] } />
     </div>
    </div>
    </> );
}

export default DhishaanEvent;
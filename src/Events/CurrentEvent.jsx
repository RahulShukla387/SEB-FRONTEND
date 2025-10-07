import React from 'react';

function CurrentEvent() {
      const sebPrimary = '#1E3A8A'; // Dark Blue
    const sebSecondary = '#F59E0B'; // Amber/Orange
    const sebBackground = '#F9FAFB'; // Light Gray
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-50 to-blue-100">
      <div className="max-w-md w-full  rounded-2xl p-8 text-center">
        
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Drishyaa</h1>
        <h2 className="text-lg text-gray-600 mb-10">Join Our Live Events:</h2>

        {/* <a
          href="https://forms.gle/5ezVLdZRwjGeeaN19"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-600 text-white font-medium px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg transition duration-300"
        >
          Sherlock Holmes 🔍
        </a>  <br/> <br/><br/> &nbsp; &nbsp;
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSc6IHRl-9mMZ5-pEywX2jaJdAcp3v6W09KxuC-_SY0147j2KA/viewform"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-600 text-white font-medium px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg transition duration-300"
        >
         Ground Zero
        </a>   <br/><br/><br/> &nbsp; &nbsp;
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSf_ffu8PgW1KU84ZV_QKulaEUFOmigw9kpYBIGQclsIFlo-Hg/viewform"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-600 text-white font-medium px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg transition duration-300"
        >
         Resume x 
        </a>   <br/> <br/><br/> &nbsp; &nbsp; */}
        <div className='flex flex-col gap-20 md:flex-row md:gap-15 justify-center items-center'>
        <span  onClick={() => window.location.href = "https://unstop.com/p/resumex-mmmut-gorakhpur-1564848"} style={{ cursor: "pointer", borderRadius: "4px" }} >
          <img src="/Drishyaa/ResumeX.jpg" alt="" height={350} borderRadius={4} /> 
          Click here
        </span>
        <span onClick={() => window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLSfcr78S0w0jGwBLyIXsBgHZ4CnIdjDDef730NUnD23aTNh8Ng/viewform"} style={{ cursor: "pointer", borderRadius: "4px" }} >
          <img src="/Drishyaa/SherlockHolmes.jpg" alt="" height={350} borderRadius={4} /> 
           Click here
        </span>
        <span onClick={() => window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLSfUNZ-ALQqzJ39HuoggM47ta30okJ7dh-6tCVfyb5G2Pk9LhA/viewform"} style={{ cursor: "pointer", borderRadius: "4px" }} >
          <img src="/Drishyaa/BrainoMath.jpg" alt="" height={350} borderRadius={4} /> 
          Click here
        </span>
           </div>
      </div>
    </div>
  );
}

export default CurrentEvent;

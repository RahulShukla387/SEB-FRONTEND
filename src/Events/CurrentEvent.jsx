import React from 'react';

function CurrentEvent() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-50 to-blue-100">
      <div className="max-w-md w-full bg-white shadow-lg rounded-2xl p-8 text-center">
        
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Drishyaa</h1>
        <h2 className="text-lg text-gray-600 mb-6">Join Our Live Events:</h2>

        <a
          href="https://forms.gle/5ezVLdZRwjGeeaN19"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-600 text-white font-medium px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg transition duration-300"
        >
          Sherlock Holmes 🔍
        </a>
      </div>
    </div>
  );
}

export default CurrentEvent;

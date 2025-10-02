/** @type {import('tailwindcss').Config} */
export default {
  important: true, 
  content: [
     "./index.html",     
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
       fontFamily: {
        heading: ['Montserrat'], // for club name
        body: ['Poppins'],      // for normal text
      },
    },
  },
  plugins: [],
}


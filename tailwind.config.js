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
  screens: {
    'xs': '480px', // new custom breakpoint
    'sm': '640px',
    'md': '768px',
    'lg': '1024px',
  },
  },
  plugins: [],
}


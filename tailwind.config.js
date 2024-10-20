/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
       clamp:'clamp(0.8rem,1vw + 1.6rem,2.5rem)',
       screens:{
          vsm:"300px",
          gateW:"740px",
          ProSu:"920px",
          end:"50px"
       },
       colors:{
          deepblue:"#02042a"
       },
       styles:{
          transistion:"transistion duration-500",
          // dash:"w-7 h-1 bg-green-500 my-5"
       },
       boxShadow: {
         '3xl': '0 35px 60px 15px rgba(0, 0, 0, 0)',
       }
    },
  },
  plugins: [],
};

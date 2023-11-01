/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
   sm:"480px",
   md:"768px",
   lg:"1024px"
    },
    extend: {
      colors:{
        mycolor:"#01A8F7",
        textcolor: "#fff",
        menucolor: "#1F1F1F",
      }
    },
    container: {
      center: true,
      padding: {
        default: '1rem',
        sm: '1.5rem'
      }
    }, 
   fontFamily: {
    oswold:['Oswold', 'sans-serif,'],
    dmsans:['DM Sans','sans-serif']
   }    
  },
  plugins: [],
}
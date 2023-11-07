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
        navcolor:'blue',
      },
      keyframes: {
        move: {
          "50%": {transform: 'translateY(-1rem)'}
        }
      },
      animation: {
        'movingY': 'move 2s linear infinite'
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
    oswold:['Oswald', 'sans-serif,'],
    dmsans:['DM Sans','sans-serif']
   }    
  },
  plugins: [],
}
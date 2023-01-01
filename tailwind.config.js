/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'blue' : {
          main : '#DFE6FF',
          button : '#7A83D2'
        },
        'gray' : {
          glass : "rgba(205, 212, 238, 0.5)"
        }
      },
      fontFamily: {
        Montserrat : 'Montserrat'
      },
      screens: {
        'xs': '320px',
      }
    },
  },
  plugins: [],
  
}

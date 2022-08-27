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
          main : '#5B6AA0',
          button : '#7A83D2'
        },
      },
    },
  },
  plugins: [],
  
}

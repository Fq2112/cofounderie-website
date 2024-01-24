/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#29EEE8",
        middle: "#8585E6",
        secondary: "#AF56E7",
      },
      fontFamily: {
        arialBlack: ["Arial Black"],
        albraBlack: ["Albra Black"],
      },
      keyframes: {
        scrolldown: {
          '0%': { backgroundPosition: '0 -60px' },
          '50%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '0 60px' },
        }
      },
      animation: {
        scrolldown: 'scrolldown 2.5s cubic-bezier(.76,0,.3,1) forwards infinite',
      }
    },
  },
  plugins: [],
};

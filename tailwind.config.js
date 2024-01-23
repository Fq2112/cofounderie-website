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
      },
    },
  },
  plugins: [],
};

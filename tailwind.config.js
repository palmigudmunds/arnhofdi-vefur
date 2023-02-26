/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        maindarkblue: "#2d2534",
        maingold: "#ff8f26",
      },
    },
    fontFamily: {
      sans: ['"Lora"', "sans-serif"],
    },
  },
  plugins: [],
};

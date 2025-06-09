/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        skyblue: "#99b4c8",
        black: "#000000",
      },
      fontFamily: {
        inter: ['"Baloo 2"', "cursive"],
      },
    },
  },
  plugins: [],
};

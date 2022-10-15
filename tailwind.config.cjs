/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#16161a",
        button: "#7f5af0",
        white: "#fffffe",
        paragraph: "#94a1b2",
        stroke: "#010101",
        secondary: "#72757e",
        principal: "#fffffe",
        highlight: "#7f5af0",
      },
      fontFamily: {
        headingFont: ['Clash Display', "sans-serif"],
        logoFont: ['Permanent Marker', "cursive"]
      },
      backgroundImage: {
        hero: "url(src/assets/bg.png)",
        portrait: "url(src/assets/cv1.jpg)",
        squareDot: "url(src/assets/squareDot.svg)"
      }
    },
    screens: {
      xxs: "360px",
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1378px",
      xl: "1700px",
    },
  },
  plugins: [],
};
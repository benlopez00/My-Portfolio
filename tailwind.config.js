// tailwind.config.js
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        // Modo Claro
        light0: "rgb(255, 255, 255)",   // Más claro
        light1: "rgb(244, 245, 246)",
        light2: "rgb(238, 240, 241)",
        light3: "rgb(217, 219, 222)",
        light4: "rgb(216, 219, 222)",
        light5: "rgb(138, 148, 158)",
        light6: "rgb(107, 118, 128)",
        light7: "rgb(31, 31, 31)",     // Más oscuro
        lightTransparent: "rgba(0, 0, 0, 0.24)",
        
        // Modo Oscuro
        dark0: "rgb(9, 9, 9)",       // Más oscuro
        dark1: "rgb(20, 20, 20)",
        dark2: "rgb(31, 31, 31)",
        dark3: "rgb(36, 36, 36)",
        dark4: "rgb(51, 51, 51)",
        dark5: "rgb(102, 102, 102)",
        dark6: "rgb(172, 172, 172)",
        dark7: "rgb(204, 204, 204)", // Más claro
        darkTransparent: "rgba(255, 255, 255, 0.24)",
        
        // Verde adicional
        darkPrimary: "#4DC46C",
      },
      fontFamily: {
        sans: ['var(--font-dm-sans)'],
      },
      fontSize: {
        h1: "42px",
        h2: "28px",
        base: "18px",
        secondary: "16px",
        code: "14px",
      },
      borderRadius: {
        card: "32px",
      },
    },
  },
  plugins: [],
});
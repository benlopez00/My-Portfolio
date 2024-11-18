// tailwind.config.js
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  carkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        // Modo Claro
        lightBackground: "#F9F9F9",
        lightPrimary: "#4CAF50",
        lightText: "#222222",
        lightBorder: "#D6D6D6",
        lightHighlight: "#FFC107",
        
        // Modo Oscuro
        darkBackground: "#202020",
        darkPrimary: "#4CAF50",
        darkText: "#E1E1E1",
        darkBorder: "#303030",
        darkHighlight: "#2196F3",
      },
      fontFamily: {
        primary: ["Helvetica Neue", "Inter", "sans-serif"],
        secondary: ["IBM Plex Mono", "Fira Code", "monospace"],
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
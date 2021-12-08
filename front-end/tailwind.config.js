const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      body: ["Nunito", "serif"],
    },
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        brown: {
          300: "#72147e",
          200: "#66391a",
          DEFAULT: "#e5d8c8",
          100: "#F7F2EF",
          50: "#FAF9F7",
        },
      },
    },
  },
  variants: {
    extend: { textColor: ["active"] },
  },
  plugins: [],
};

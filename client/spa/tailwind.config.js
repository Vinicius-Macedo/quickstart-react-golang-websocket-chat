/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
    extend: {
      fontFamily: {
        instrument: ['"Instrument Sans"', "serif"],
      },
      colors: {
        purple: {
          DEFAULT: "#4C2290",
          light: "#C8C8F5",
          dark: "#3A3B6A",
          "dark-light": "#DEC9FF",
        },

        black: {
          DEFAULT: "#222222",
        }
      },
    },
    safelist: [
      "ml-1",
      "ml-2",
      "ml-3",
      "ml-4",
      "ml-5",
      "ml-6",
      "ml-7",
      "ml-8",
      "ml-9",
      "ml-10",
      "ml-11",
      "ml-12",
      "ml-13",
      "ml-14",
      "ml-15",
    ],
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};

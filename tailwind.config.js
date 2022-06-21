/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        dark: "#0F172A",
        darkblue: {
          50: " #EDF1FF",
          100: "#C9D5FE",
          200: "#A5B9FE",
          300: "#819CFD",
          400: "6F8EFD",
          DEFAULT: "#4B72FC",
          600: "#4467E3",
          700: "#3C5BCA",
          800: "#3550B0",
          900: "#2D4497",
        },
        lightblue: {
          DEFAULT: "#57AADE",
          100: "#9ACCEB",
        },
      },
    },
  },
  plugins: [],
};

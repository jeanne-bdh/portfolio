const { blackA } = require("@radix-ui/colors");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ...blackA,
      }
    },
  },
  plugins: [],
}
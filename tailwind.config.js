/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      "white-ghots": "#F7F8FB",
      white: "#FFFFFF",
      "blue-dodger": "#109DFF",
      "blue-light-sky": "#7CC9FF",
      "blue-light": "#ADE2FF",
      "blue-deep-sky": "#38B9FF",
      gray: "#818181",
      "gray-dark-slate": "#424242",
      "gold-tahiti": "#EE9009",
    },
    fontFamily: {
      sans: ["Poppins", "san-serif"],
      serif: ["Courier New", "serif"],
    },
    extend: {},
  },
  plugins: [],
};

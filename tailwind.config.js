/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#232448",
        "primary-light": "#3C3D6F",
        "light-yellow": "#F8C741",
        "light-grey": "#B5B5B5",
        "dark-yellow":"#927526",
        "light-blue":"#3C3D6F",
      },
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"],
        raleway: ["Raleway", "sans-serif"],
      },
    },
  },
  plugins: [],
};

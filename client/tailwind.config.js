/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        mobile: { min: "100px", max: "360px" },
        tablet: { min: "361px", max: "768px" },
        laptop: { min: "769px", max: "1440px " },
        pc: { min: "1441px" },
      },
      colors: {
        "main-color": "#393d46",
        "dark-grey": "#9f9f9f",
        "medium-grey": "#cdcfd1",
        "light-grey": "#dcdcdc",
        "dark-white": "#ffffff",
        "medium-white": "#f5f5f5",
        "light-white": "#f6f7fb",
      },
      fontSize: {
        12: "12px",
      },
      fontWeight: {
        100: "100",
        200: "200",
        300: "300",
        400: "400",
        500: "500",
        600: "600",
        700: "700",
        800: "800",
        900: "900",
      },
      letterSpacing: {
        0.3: "0.3px",
      },
      width: {
        7: "7%",
        10: "10%",
        12: "12%",
        30: "30%",
        95: "95%",
      },
      height: {
        5: "5%",
      },
      borderRadius: {
        1.5: "1.5px",
      },
      margin: {
        2.5: "2.5%",
        3: "3px",
      },
      padding: {
        1: "1px",
      },
      gap: {
        10: "10px",
        26: "26%",
      },
    },
  },
  plugins: [],
};

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
        15: "15%",
        19: "19.2%",
        22: "22%",
        30: "30%",
        70: "70%",
        90: "84.1%",
        95: "95%",
      },
      height: {
        5: "5%",
        15: "15%",
        20: "20%",
        30: "30%",
        32: "32.5%",
        60: "60%",
        65: "65%",
        75: "75%",
        80: "80%",
      },
      borderRadius: {
        1.5: "1.5px",
        50: "50%",
      },
      margin: {
        2.5: "2.5%",
        3: "3px",
      },
      padding: {
        1: "1px",
        5: "5px",
      },
      gap: {
        "3p": "3%",
        "5p": "5%",
        7: "7px",
        10: "10px",
        26: "26%",
      },
    },
  },
  plugins: [],
};

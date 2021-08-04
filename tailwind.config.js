module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./Components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "grayish-green": "#2c4d51",
        blue: "#0e5eff",
      },
      width: {
        "90vw": "90vw",
        "95vw": "95vw",
      },
      padding: {
        "40vh": "40vh",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

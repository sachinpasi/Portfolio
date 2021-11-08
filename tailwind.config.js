module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./Components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "grayish-green": "#2c4d51",
        blue: "#0e5eff",
        darkblue: "#112e62",
        lightvoilet: "#f4edff",
      },
      width: {
        "90vw": "90vw",
        "95vw": "95vw",
        "80vw": "80vw",
        "600px": "600px",
      },
      height: {
        "90vh": "90vh",
        "95vh": "95vh",
        "600px": "600px",
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

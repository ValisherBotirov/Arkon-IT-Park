module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      lineHeight: {
        // Need refactor these px values
        13: "13px",
        19: "19px",
        130: "130%",
        134: "134%",
        137: "137%",
        138: "138%",
        35: "35px",
      },
      screens: {
        sx: "320px",
        xs: "375px",
        ms: "500px",
        sm: "640px",

      },
      colors: {
        black: "#232323",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // colori principali
        primary: "#e63943",
        primaryLight: "#ff9fa4",
        primaryLighter: "#ffe1e3",
        accent: "#171e25",
        accentDark: "#192027",
        accentDesaturated: "#f0f1f5",
        accentParagraph: "#9496a1",
        accentLight: "#dfe0e7",
        light: "#fff",

        // colori per i vari campi
        entrepreneurship: "#7367f0",
        economy: "#44ddef",
        training: "#ffa34b",
        operation: "#faeb65",
      },
      fontFamily: {
        main: ["Open Sans", "sans-serif"],
        secondary: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [
    {
      // safelist: [
      //   "w-[0%]",
      //   "w-[10%]",
      //   "w-[20%]",
      //   "w-[30%]",
      //   "w-[40%]",
      //   "w-[50%]",
      //   "w-[60%]",
      //   "w-[70%]",
      //   "w-[80%]",
      //   "w-[90%]",
      //   "w-[100%]",
      // ],
      // safelist: [{ pattern: /w-./ }],
    },
  ],
};

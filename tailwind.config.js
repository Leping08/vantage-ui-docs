/* eslint-disable */
const colors = require("tailwindcss/colors");
const { vantageSafelist, vantageContent } = require("./vantagePlugin");
/* eslint-enable */

module.exports = {
  purge: {
    options: {
      safelist: [
        ...vantageSafelist([
          "lime",
          "green",
          "emerald",
          "teal",
          "cyan",
          "lightBlue",
          "blue",
          "indigo",
          "violet",
          "purple",
          "fuchsia",
          "pink",
          "rose",
          "red",
          "orange",
          "amber",
          "yellow",
          "blueGray",
          "coolGray",
          "gray",
          "trueGray",
          "warmGray"
        ])
      ]
    },
    content: ["./src/**/*.vue", "./src/**/*.js", ...vantageContent()]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: colors
    }
  },
  variants: {
    extend: {
      backgroundColor: ["active"]
    }
  },
  plugins: [require("@tailwindcss/forms")]
};

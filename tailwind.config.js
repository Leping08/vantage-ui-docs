/* eslint-disable */
const colors = require("tailwindcss/colors");
const { vantageSafelist, vantageContent } = require("./vantagePlugin");
/* eslint-enable */

module.exports = {
  purge: {
    options: {
      safelist: [...vantageSafelist(["blue"])]
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

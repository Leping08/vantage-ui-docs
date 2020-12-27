// vue.config.js
module.exports = {
  chainWebpack: config => {
    // clear the existing entry point
    config.entry("app").clear();

    // add your custom entry point
    config.entry("app").add("./src/main.js");
  }
};

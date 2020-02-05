const { addLessLoader, override } = require("customize-cra");

const loaderOptions = {
  javascriptEnabled: true,
  importLoaders: true,
  modifyVars: {}
};

module.exports = override(addLessLoader(loaderOptions));

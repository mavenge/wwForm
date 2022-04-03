const monacoWebpackPlugin = require("monaco-editor-webpack-plugin");

module.exports = {
  configureWebpack: {
    plugins: [new monacoWebpackPlugin()],
  },
};

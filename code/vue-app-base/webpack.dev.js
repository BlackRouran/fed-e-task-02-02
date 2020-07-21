const common = require("./webpack.common");
const webpack = require("webpack");
const HtmlWebpackPlugin =require('html-webpack-plugin')
const {merge} = require("webpack-merge");

module.exports = merge(common, {
  mode: "production",
  devServer: {
    port: 8080,
    contentBase: ["./public/"],
    hot: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'webpack',
      url:'./public/favicon.ico',
      template: "./public/index.html"
    }),  
    new webpack.HotModuleReplacementPlugin()
  ],
});

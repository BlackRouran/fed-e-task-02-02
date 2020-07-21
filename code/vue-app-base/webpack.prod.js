const common = require("./webpack.common");
const {merge} = require("webpack-merge");
const HtmlWebpackPlugin =require('html-webpack-plugin')
const CopyWebpackPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = merge(common, {
  mode: "production",
  devtool: 'none',
  plugins: [
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "./public/*.ico",
          to: "",
          transformPath(targetPath, absolutePath) {
            return targetPath.replace("public", "");
          },
          toType: "dir",
        },
      ],
    }),
    new HtmlWebpackPlugin({
      title: 'webpack',
      url:'./favicon.ico',
      template: "./public/index.html"
    }),
  ]
});

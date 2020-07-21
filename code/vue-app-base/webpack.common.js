const path = require("path");
const VueLoaderPlugin = require("vue-loader/lib/plugin");

const config = {
    entry: path.join(__dirname,'./src/main.js'),
    output: {
      filename: "bundle.js",
      path: path.join(__dirname, "/dist"),
      publicPath: "",
    },
    module: {
      rules: [
        {
          test: /\.vue$/,
          use: "vue-loader",
        },
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"],
        },
        {
          test: /\.(png|svg|jpg|gif)$/,
          use: [
            {
              loader: "url-loader",
              options: {
                limit: 1024 * 4
              },
            },
          ],
        },
        {
          test: /\.less$/,
          use: ["style-loader", "css-loader", "less-loader"],
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"],
            },
          },
        },
      ],
    },
    plugins: [
      new VueLoaderPlugin()
    ],
  };

  module.exports = config;
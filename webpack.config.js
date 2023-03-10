var path = require("path");
var config = {
  context: path.resolve(__dirname + "/src"),
  entry: "./index.jsx",
  output: {
    filename: "app.js",
    path: path.resolve(__dirname + "/dist"),
  },
  devServer: {
    contentBase: path.join(__dirname + "/dist"),
    port: 3000,
    open: true,
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.css$/,
        loader: "style!css",
      },
      {
        test: /\.gif$/,
        loaders: ["file?name=[path][name].[ext]", "image-webpack"],
      },
      { test: /\.(html)$/, loader: "file?name=[path][name].[ext]" },
    ],
  },
};
module.exports = config;

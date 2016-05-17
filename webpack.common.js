var webpack = require("webpack");
var version = require("./package.json").version;
var banner =
  "/**\n" +
  " * vue-chart v" + version + "\n" +
  " * https://github.com/miaolz123/vue-chart\n" +
  " * MIT License\n" +
  " */\n";

module.exports = {
  entry: "./src/VueChart.js",
  target: "node",
  output: {
    path: "./dist",
    filename: "vue-chart.common.js",
    library: "VueChart",
    libraryTarget: "umd"
  },
  externals: /^[^.]/,
  plugins: [
    new webpack.BannerPlugin(banner, { raw: true })
  ],
  module: {
    loaders: [{
      test: /\.vue$/,
      loader: "vue"
    }, {
        test: /\.js$/,
        loader: "babel",
        exclude: /node_modules/
      }, {
        test: /\.css$/,
        loader: "style!css"
      }, {
        test: /\.json$/,
        loader: "json-loader"
      }]
  },
}

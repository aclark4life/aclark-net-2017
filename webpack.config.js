var BundleTracker = require("webpack-bundle-tracker");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var webpack = require("webpack");

module.exports = {
    context: __dirname + "/project/app/static",
    entry: "./entry",
    output: {
        path: __dirname + "/project/app/static/webpack_bundles",
        filename: "[name]-[hash].js"
    },
    plugins: [
        new BundleTracker({filename: './webpack-stats.json'}),
        new ExtractTextPlugin("[name]-[hash].css"),
        // http://getbootstrap.com/docs/4.0/getting-started/webpack/#importing-javascript
        new webpack.ProvidePlugin({
          $: 'jquery',
          jQuery: 'jquery',
          'window.jQuery': 'jquery',
          Popper: ['popper.js', 'default'],
        })
    ],
    // https://github.com/webpack-contrib/extract-text-webpack-plugin#usage
    module: {
      loaders: [
        {   
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
              fallback: "style-loader",
              use: "css-loader"
            })
        },
      ],
    },  
};

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const commonPaths = require('./common-paths');

const port = process.env.PORT || 3000;

module.exports = {
  mode: 'development',
  entry: {
    vendor: [], // Vendor modules here
    app: [`${commonPaths.appEntry}/index.js`]
  },
  output: {
    filename: 'bundle.[hash].js'
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.(jpe?g|gif|png|svg|woff|ttf|wav|mp3)$/,
        loader: "file-loader"
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              camelCase: true,
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [{
            loader: "style-loader"
        }, {
            loader: "css-loader"
        }, {
            loader: "sass-loader"
        }]
      }
    ]
  },
  devServer: {
    host: 'localhost',
    port: port,
    historyApiFallback: true,
    open: true
  }
};

/**
 * Created by xmityaz on 12.04.16.
 */

const webpack = require('webpack');
const path = require('path');

module.exports = {
  context: path.join(__dirname, './src'),

  entry: {
    jsx: "./index.js",
    html: "./index.html"
  },

  output: {
    path: path.join(__dirname, './bundle'),
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      {
        test: /\.html$/,
        loader: 'file?name=[name].[ext]'
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel']
      }
    ]
  },

  resolve: {
    extensions: ['', '.js', '.jsx']
  },
};
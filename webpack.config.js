/**
 * Created by xmityaz on 12.04.16.
 */

const webpack = require('webpack');
const path = require('path');
const autoprefixer = require('autoprefixer');

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
      },
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader?modules', 'postcss-loader']
      }
    ]
  },

  postcss: function () {
    return [autoprefixer];
  },

  resolve: {
    extensions: ['', '.js', '.jsx']
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development') },
    }),
  ]
};
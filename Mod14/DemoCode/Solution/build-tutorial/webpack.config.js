var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: {
    app: './wwwroot/scripts/app.js'
  },
  output: {
    path: path.resolve(__dirname, 'wwwroot/dist'),
    filename: '[name].bundle.js',
    publicPath: '/dist/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  stats: {
    colors: true
  },
  devtool: 'source-map'
};
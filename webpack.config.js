'use strict';
const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/app.ts',
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
  },
  plugins: [(
    new HtmlWebpackPlugin({
      template: './src/index.html',
      inject: 'body'
    })
  )],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
  module: {
    rules: [{
      test: /\.(js|jsx|tsx|ts)$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }, {
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    }, {
      test: /\.html$/,
      use: 'raw-loader'
    }]
  },
  resolve: {
    extensions: ['.*', '.js', '.jsx', '.tsx', '.ts'],
  }  
};
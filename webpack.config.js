
const htmlPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

module.exports = {
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 8080,
    hot: true
  },
  entry: path.join(__dirname, 'todo', 'App.jsx'),
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.s?css/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist')
  },
  plugins: [
    new webpack.DefinePlugin({
      'STYLE': JSON.stringify(process.env.STYLE === 'dark' ? 'dark' : 'light')
    }),
    new htmlPlugin({
      title: 'Bulwark UI - TODO Demo App',
      filename: 'index.html',
      template: path.join(__dirname, 'react', 'template.html'),
      inject: 'body',
      favicon: path.join(__dirname, 'ico', 'favicon.png'),
      hash: true,
      showErrors: true
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx']
  }
};

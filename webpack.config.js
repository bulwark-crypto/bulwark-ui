const htmlPlugin = require('html-webpack-plugin')
const path = require('path')
const webpack = require('webpack')

module.exports = {
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 8080,
    hot: true,
    overlay: true
  },
  entry: path.join(__dirname, 'demo/web', 'App.jsx'),
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
      'STYLE': JSON.stringify(process.env.STYLE === 'dark' ? 'dark' : 'light'),
      'process.env': {
        REBEM_MOD_DELIM: JSON.stringify('--'),
        REBEM_ELEM_DELIM: JSON.stringify('__')
      }
    }),
    new htmlPlugin({ // eslint-disable-line new-cap
      title: 'Bulwark Design Framework - Documentation and examples',
      filename: 'index.html',
      template: path.join(__dirname, 'web', 'template.html'),
      inject: 'body',
      favicon: path.join(__dirname, 'ico', 'favicon.png'),
      hash: true,
      showErrors: true
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx']
  }
}

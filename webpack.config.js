//  Add path module to manipulate file paths
const path = require('path');
// Add pluging for creating HTML file
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = { 
  // Add react entry file
  entry: './src/index.js',
  // Output deals with where the complied code goes. It add it into a bundle file located in the dist folder.
  output: {
    path: path.join(__dirname, '/dist'),
    fileName: 'index_bundle.js'
  },
  // Specifiy loader
  module: { 
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use:{
          loader: 'babel-loader'
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ]
};
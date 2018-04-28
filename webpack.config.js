const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');


module.exports = {
  entry: [
         './src/index.js',
         './index.html'
  ],
       devtool: 'inline-source-map',
       devServer: {
             contentBase: './dist',
             hot: true
           },
       plugins: [
              new webpack.HotModuleReplacementPlugin()
           ],
  output: {
    filename: 'bundle.js',
    publicPath: '/',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
         rules: [
           {
             test: /\.css$/,
             use: [
               'style-loader',
               'css-loader'
             ]
           },
           {
              test: /\.(png|svg|jpg|gif)$/,
              use: [
                'file-loader'
                ]
            },
            {
              test: /\.(woff|woff2|eot|ttf|otf)$/,
              use: [
                'file-loader'
                ]
            },
            {
              test: /\.(js|jsx)$/,
              exclude: /node_modules/,
              use: ['babel-loader']
            },
            {
              test: /\.html$/,
              use: [
                {
                  loader: 'file-loader',
                  options: {
                    name: '[name].[ext]'
                  }
                }
              ]
            }
         ]
       },
       resolve: {
        extensions: ['*', '.js', '.jsx']
      },
       mode: 'development'
};

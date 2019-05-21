const webpack = require('webpack');
const path = require('path');
const common = require('./webpack.common.js');
// 用于合并 WEBPACK 
const merge = require('webpack-merge');

module.exports = merge(common, {
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    hot: true
  },
  output: {
    filename: './js/[name].[hash].bundle.js',
  },
  plugins: [
    // 模块热替换
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
});
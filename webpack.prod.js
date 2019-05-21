const common = require('./webpack.common.js');
// 用于合并 WEBPACK 
const merge = require('webpack-merge');
// 代码压缩
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
// 清理打包文件夹
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = merge(common, {
  output: {
    filename: './js/[name].[chunkHash].bundle.js',
  },
  plugins: [

    // 清理
    new CleanWebpackPlugin(),

    // 代码压缩
    new UglifyJSPlugin()
  ]
});
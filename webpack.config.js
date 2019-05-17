const webpack = require('webpack');
const path = require('path');
// 打包html的插件
const HtmlWebpackPlugin = require('html-webpack-plugin');
// 清理打包文件夹
const CleanWebpackPlugin = require('clean-webpack-plugin');
// 将单个文件或整个目录复制到构建目录 插件
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {

  entry: {
    'index': './src/js/index.js'  //入口文件
  },
  devServer: {
    contentBase: './dist'
  },
  output: {
    // 输出文件都放到 dist 目录下
    path: path.resolve(__dirname, './dist'),
    filename: './js/[name].[chunkHash].bundle.js',
  },


  //插件
  plugins: [

    new CleanWebpackPlugin(),

    new HtmlWebpackPlugin({
      // 输出文件的路径
      filename: 'index.html',
      // 源文件路径
      template: 'src/page/index.html'
    }),

    new CopyWebpackPlugin([
      { from: 'src/assets/css', to: 'assets/css' },
      { from: 'src/assets/img', to: 'assets/img' },
    ]),
  ]
}
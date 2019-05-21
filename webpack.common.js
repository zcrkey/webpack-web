const webpack = require('webpack');
const path = require('path');
// 打包html的插件
const HtmlWebpackPlugin = require('html-webpack-plugin');
// 将单个文件或整个目录复制到构建目录 插件
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {

  // 入口文件
  entry: {
    // 首页
    'index': './src/ts/index.ts',
    // 登录页
    'login': './src/ts/login.ts',
    // 注册页
    'register': './src/ts/register.ts'
  },

  // 输出文件
  output: {
    // 输出文件都放到 dist 目录下
    path: path.resolve(__dirname, './dist')
  },

  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },

      // typescript 装载机
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },

  //插件
  plugins: [

    new HtmlWebpackPlugin({
      // 输出文件的路径
      filename: 'index.html',
      // 源文件路径
      template: 'src/page/index.html',
      // 
      chunks: ['index']
    }),

    new HtmlWebpackPlugin({
      filename: 'login.html',
      template: 'src/page/login.html',
      chunks: ['login']
    }),

    new HtmlWebpackPlugin({
      filename: 'register.html',
      template: 'src/page/register.html',
      chunks: ['register']
    }),

    new CopyWebpackPlugin([
      { from: 'src/assets/css', to: 'assets/css' },
      { from: 'src/assets/img', to: 'assets/img' },
    ])
  ]
}
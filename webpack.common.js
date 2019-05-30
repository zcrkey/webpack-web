const webpack = require('webpack');
const path = require('path');
// 入口文件
const entry = require('./webpack.entry.js');
// html 插件
const pluginsHtml = require("./webpack.plugins.html.js")

// 打包css的插件
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// 将单个文件或整个目录复制到构建目录 插件
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {

  // 入口文件
  entry: entry,

  // 输出文件
  output: {
    // 输出文件都放到 dist 目录下
    path: path.resolve(__dirname, './dist')
  },

  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },

  // 模板
  module: {
    rules: [

      // es6 转 es5
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
      },

      // css
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: process.env.NODE_ENV === 'development',
            },
          },
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },

      // css 图像文件装载器
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              // 名称
              name: '[name].[ext]',
              // 输出路径
              outputPath:'assets/img/',
              // 公共路径
              publicPath:'../assets/img/'
            }
          }
        ]
      }

    ]
  },

  //插件
  plugins: [

    new MiniCssExtractPlugin({
      filename: 'css/[name].[chunkHash].css',
      // chunkFilename: '[id].css',
    }),

    new CopyWebpackPlugin([
      { from: 'src/assets/img', to: 'assets/img' }
    ]),

  ].concat(pluginsHtml)
}
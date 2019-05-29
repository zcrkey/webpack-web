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
  optimization: {
    // 打包提取第三方库
    // 打包提取公共 ts 或者 js 文件
    splitChunks: {
      cacheGroups: {
        vendor: {
          // node_modules内的依赖库
          chunks: "all",
          test: /[\\/]node_modules[\\/]/,
          name: "vendor",
          // 被不同entry引用次数(import),1次的话没必要提取
          minChunks: 1,
          maxInitialRequests: 5,
          minSize: 0,
          priority: 100,
          // enforce: true?
        },
        common: {
          // src/ts下的ts文件或者src/js下的js文件
          chunks: "all",
          //也可以子文件/[\\/]src[\\/](ts|js)[\\/].*\.(ts|js)/,  
          test: /[\\/]src[\\/](ts|js)[\\/]/,
          //生成文件名，依据output规则
          name: "common",
          minChunks: 2,
          maxInitialRequests: 5,
          minSize: 0,
          priority: 1
        }
      }
    }
  },
  plugins: [

    // 清理
    new CleanWebpackPlugin(),

    // 代码压缩
    new UglifyJSPlugin()

  ]
});
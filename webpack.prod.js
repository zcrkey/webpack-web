const common = require('./webpack.common.js');
// 用于合并 WEBPACK 
const merge = require('webpack-merge');
// css 代码压缩
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
// js 代码压缩
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
// 清理打包文件夹
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = merge(common, {
  output: {
    filename: './js/[name].[chunkHash].bundle.js',
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        // 打包提取第三方库
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
        // 打包提取公共 ts 或者 js 文件
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
        },
        // 打包提取公共 scss 或者 sass 或者 css 文件
        styles: {
          chunks: "all",
          test: /\.(sc|sa|c)ss$/,
          name: "styles",
          // 表示提取公共部分最少的文件数
          minChunks: 2,
          enforce: true
        }
      }
    }
  },
  plugins: [

    // 清理
    new CleanWebpackPlugin(),

    // css 压缩
    new OptimizeCssAssetsPlugin(),

    // js 代码压缩
    new UglifyJSPlugin(),

  ]
});
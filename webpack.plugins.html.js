// 入口文件
const entry = require('./webpack.entry.js');

// 打包html的插件
const HtmlWebpackPlugin = require('html-webpack-plugin');

let html = [];

Object.keys(entry).forEach(k => {
    let hwp = new HtmlWebpackPlugin({
        title: k,
        filename: `${k}.html`,
        template: `src/page/${k}.html`,
        inject: true,
        chunks: [k]
    })
    html.push(hwp)
});

module.exports = html;
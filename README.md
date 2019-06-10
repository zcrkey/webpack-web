# 使用 webpack 构建一个多页面的 web 应用

## 开发环境
* os: windows10
* node: v10.15.3
* npm: 6.4.1
* webpack: ^4.32.0

## 功能实现
* webpack 拆分为 开发环境（dev） 和 产品环境（prod）
* webpack 中的入口文件配置和多页面插件配置进行进一步封装，实现自动生成多页面配置信息
* webpack 配置模块热替换功能
* webpack 配置提取公共部分代码（js、css）
* 打包 js 代码，压缩 js 代码
* 打包 css 代码，压缩 css 代码
* 打包 css 字体库文件
* 打包图片
* 引入 typescript 装载器
* 引入 scss 装载器,并且引入自动添加浏览器 css 样式前缀 postcss-loader 装载器
* 引入 es6 转 es5 装载器


## 插件实现功能说明
* webpack-dev-server 插件：实现拆分开发环境和产品环境
* webpack-merge 插件：实现合并 webpack 配置信息
* uglifyjs-webpack-plugin 插件：实现 js 代压缩
* typescript 插件、ts-loader 插件：实现将 typescript 代码转化成 javascript 代码，配置文件（tsconfig.json）
* sass-loader 插件、node-sass 插件：实现将 scss 文件转化为 css 文件
* postcss-loader 插件、autoprefixer 插件：实现 css 自动添加浏览器前缀样式，配置文件（postcss.config.js）
* optimize-css-assets-webpack-plugin 插件：实现 css 代码压缩
* mini-css-extract-plugin 插件：实现 css 代码打包
* html-webpack-plugin 插件：实现 html 文件打包
* css-loader 插件：实现解析 css 导入问题
* copy-webpack-plugin 插件：实现将单个文件或整个目录复制到构建目录
* clean-webpack-plugin 插件：实现打包之前清理构建目录
* @babel/core 插件、@babel/preset-env 插件、 babel-loader 插件：实现将 es6 代码转化为 es5 代码
* file-loader 装载机： 实现支持 css 字体库引用、 css 图片引用
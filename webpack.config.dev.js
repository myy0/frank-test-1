const base = require('./webpack.config')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = Object.assign({}, base, {  //要导出的对象是这个对象,node.js的模块定义，必须这么写
    mode: 'development', //影响提示及代码最终效果
    plugins: [
      new HtmlWebpackPlugin({    //生成新的htmlHtmlWebpackPlugin配置
          title: 'FUI',
          template: 'index.html'  //原来的html是什么
        
      })
  ],
})
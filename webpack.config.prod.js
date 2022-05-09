const base = require('./webpack.config')
module.exports = Object.assign({}, base, {  //要导出的对象是这个对象,node.js的模块定义，必须这么写
    mode: 'production', 
    externals: {      //告诉webpack下面的两个是外部的库
    react: {
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'react',
      root: 'React',
    },
    'react-dom': {
      commonjs: 'react-dom',
      commonjs2: 'react-dom',
      amd: 'react-dom',
      root: 'ReactdOM',     
    },
  } 
}) 
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,//关闭语法检查
  /* //开启代理服务器（方式一）
  devServer: {
    proxy: 'http://localhost:5000'
  } */
  //方式二
  devServer: {
    proxy: {
      '/test1': {
        target: 'http://localhost:5000/students',
        pathRewrite:{'^/test1':''},
        ws: true,//用于支持websocket
        changeOrigin: true
      },
      '/test2': {
        target: 'http://localhost:5001/cars',
        pathRewrite:{'^/test2':''},
        ws:true,
      }
    }
  }
})

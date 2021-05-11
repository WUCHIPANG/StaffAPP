const webpack = require('webpack')
// const fs = require('fs')
console.log(process.env.VUE_APP_SERVER_URL)
module.exports = {
  productionSourceMap:process.env.NODE_EEEENV === 'production'?false:true, //生產環境下設置source map為FALSE以加速構建
  // 測試環境和生產環境,pubilcPath參數(佈署應用包時的基本URL)可能不同
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  lintOnSave: false,
  outputDir: process.env.outputDir,
  runtimeCompiler: true,
  configureWebpack: {
    //Necessary to run npm link https://webpack.js.org/configuration/resolve/#resolve-symlinks
    resolve: {
      symlinks: false,
    },
  },
  transpileDependencies: ['@coreui/utils', '@coreui/vue'],
}

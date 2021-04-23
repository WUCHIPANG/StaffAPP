const webpack = require('webpack')

module.exports = {
    // 測試環境和生產環境,pubilcPath參數(佈署應用包時的基本URL)可能不同
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  lintOnSave: false,
  runtimeCompiler: true,
  configureWebpack: {
    //Necessary to run npm link https://webpack.js.org/configuration/resolve/#resolve-symlinks
    resolve: {
       symlinks: false
    }
  },
  transpileDependencies: [
    '@coreui/utils',
    '@coreui/vue'
  ],
  // plugins: [
  // new webpack.ProvidePlugin({
  //    $: 'jquery',
  //    jquery: 'jquery',
  //    'window.jQuery': 'jquery',
  //    jQuery: 'jquery'
  //  })
  // ]
}

module.exports = {
  configureWebpack: {
      resolve: {
          alias: {
              'assets': '@/assets',
              'common': '@/common',
              'components': '@components',
              'network': '@/network',
              'views': '@/views'
          }
      }
  },
  publicPath: './',
  productionSourceMap: false,
  devServer: {
      port: 8888,
      https: false,
      hotOnly: false,
      disableHostCheck: true,
      proxy: {
          '/orchard': {
              target: 'http://119.23.53.78:8888/', // 生产环境
              // target: 'http://trace.yufengtek.com/', // 生产环境
              changeOrigin: true
          }
      }
  }
}

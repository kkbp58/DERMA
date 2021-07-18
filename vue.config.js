module.exports = {
  chainWebpack: config => {
    config.plugin('html').tap(args => {
      args[0].title = 'La Dermatologue'
      args[0].description = 'Cabinet de dermatologie'
      return args
    })
  }
}

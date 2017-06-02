Shell = require('child_process')

exports.postBuild = function (pages, callback) {
  Shell.execSync('cp -r static/* public/');
  callback();
}

exports.modifyWebpackConfig = function(config) {
  config.removeLoader('css')
  config.loader('css', function(cfg) {
    cfg.test = /\.css$/
    cfg.loader = 'style-loader!css-loader'

    return cfg
  })

  return config
}

var path = require('path')
module.exports = {
  entry: {
    app: ['./index.js']
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'transform-loader/cacheable?yo-yoify' }
    ]
  }
}

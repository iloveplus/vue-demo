var autoprefixer = require('autoprefixer')
var px2rem = require('postcss-px2rem')

module.exports = {
  plugins: [
    autoprefixer({ browsers: [ '> 5%', 'last 2 versions' ] }),
    px2rem({ remUnit: 37.5, baseDpr: 1, remPrecision: 8 })
  ]
}

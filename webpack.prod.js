const { merge } = require('webpack-merge')
const commonConfigs = require('./webpack.common.js')

module.exports = merge(commonConfigs, {
    mode: 'production',
    //type of source map recommended for production builds
    devtool: 'source-map'
})
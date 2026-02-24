import merge from 'webpack-merge'
import commonConfigs from './webpack.common.js'

export default merge(commonConfigs, {
    mode: 'production',
    //type of source map recommended for production builds
    devtool: 'source-map'
})
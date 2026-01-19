const { merge } = require('webpack-merge') //external tool that supplies the ability for multiple webpack files
const commonConfigs = require('./webpack.common.js')

module.exports = merge(commonConfigs, {
    mode: "development",
    //type of source map recommended for development builds
    devtool: 'eval-source-map',
    devServer: { //external tool 
        static: {
            directory: path.join(__dirname, 'dist')
        },
        //open: true, //automatically open the browser when dev-server is turned on
        hot: true, //only refresh the areas of the page that has new modification (avoiding slow and 'taxing' full page refreshes)
    }
})
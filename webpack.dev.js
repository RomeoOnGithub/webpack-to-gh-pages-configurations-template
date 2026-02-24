import path from 'path'
import { merge } from 'webpack-merge'
import commonConfigs from './webpack.common.js'
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default merge(commonConfigs, {
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
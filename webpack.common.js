const htmlWebpackPlugin = require('html-webpack-plugin') //external plugin (automates an output html file to be in sync with the latest bundled modules)
const ESLintPlugin = require('eslint-webpack-plugin')

module.exports = {
    entry: {
        app: './source/main.js'
    },
    plugins: [
        new htmlWebpackPlugin({
            template: './source/template.html', //template for the plugin's generated html file
            filename: 'index.html', //output html filename
        }),
        new ESLintPlugin
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'] //external packages
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i, //'i' = case insensitive
                type: 'asset/resource' //webpack-5 built-in package
            },
            {
                test: /\.html$/,
                use: 'html-loader'
            },
            {
                test: /\.js$/,
                exclude: /node_modules/, //don't bother processing these files
                use: {
                    loader: 'babel-loader', //transform source 
                }
            }
        ]
    }
}

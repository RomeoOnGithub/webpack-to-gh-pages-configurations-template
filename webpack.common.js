import HtmlWebpackPlugin from 'html-webpack-plugin'

export default {
    entry: {
        app: './source/main.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './source/template.html', //template for the plugin's generated html file
            filename: 'index.html', //output html filename
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [ //external packages
                    {loader: 'style-loader', options: {injectType: 'lazyStyleTag'}},
                    'css-loader'
                ]
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
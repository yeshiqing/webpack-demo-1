const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const base = require('./webpack.config.base.js')

module.exports = {
    ...base,
    devtool: 'eval',
    devServer: {
        contentBase: './dist'
    },
    mode: 'development',
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Jeffrey Ye',
            template: 'src/assets/index.html'
        })
    ],
    module: {
        rules: [
            ...base.module.rules,
            {
                test: /\.css$/i,
                use: [
                    "style-loader",
                    "css-loader"
                ]
            }
        ]
    }

}
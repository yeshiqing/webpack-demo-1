const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'foo.[contenthash].js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Jeffrey Ye',
            content: 'app content',
            template: 'src/assets/index.html'
        })
    ],
    module: {
        rules: [
        ]
    }

}
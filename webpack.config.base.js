const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');
const devMode = process.env.NODE_ENV !== "production";

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'foo.[contenthash].js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Jeffrey Ye',
            template: 'src/assets/index.html'
        })
    ],
    module: {
        rules: [
        ]
    }

}
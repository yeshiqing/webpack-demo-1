const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');
// const devMode = process.env.NODE_ENV !== "production";

const base = require('./webpack.config.base.js')

module.exports = {
    ...base,
    mode: 'production',
    plugins: [
        ...base.plugins,
        new MiniCssExtractPlugin({
            // filename: devMode ? "[name].css" : "[name].[contenthash].css",
            filename: "[name].[contenthash].css",
            chunkFilename: '[id].[contenthash].css',
            ignoreOrder: false
        })
    ],
    module: {
        rules: [
            ...base.module.rules,
            {
                test: /\.[s]{0,1}css$/i,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: "../"
                        },
                    },
                    "css-loader"
                ]
            }
        ]
    }

}
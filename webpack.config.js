const path = require('path')
const htmlPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ImageminPlugin =  require('imagemin-webpack-plugin').default

module.exports = {
    entry: {
        main: "./src/libs/component.js",
        // error: "./src/libs/error.js"
    },
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, "dist"),
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\.(png|svg|jpg)$/,
                use: ['file-loader']
            }
        ]
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                common: {
                    test: /[\\/]node_modules[\\/]/,
                    chunks: "all",
                    name: "vendors"
                }
            }
        }
    },
    devServer: {
        // static:{
        //     directory: path.resolve(__dirname, "dist")
        // },
        port: 8888
    },
    plugins: [
        new htmlPlugin({
            title: "Webpack App"
        }),
        new MiniCssExtractPlugin(),
        new ImageminPlugin({
            test: /\.(jpe?g|png|gif|svg)$/i
        })
    ],
    devtool: 'inline-source-map'
}

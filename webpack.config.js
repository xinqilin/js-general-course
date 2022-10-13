const path = require('path')
const htmlPlugin = require('html-webpack-plugin')
const {cleanPlugin} = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: {
        main: "./src/index.js",
        error: "./src/libs/error.js"
    },
    output: {
        filename: ["main", "error"],
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
                test: /\.(png|svg)/,
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
        port: 8081
    },
    plugins: [
        new htmlPlugin({
            title: "Webpack App"
        }),
        new MiniCssExtractPlugin(),
    ],
    devtool: 'inline-source-map'
}
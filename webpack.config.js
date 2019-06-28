const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "main.[hash].bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.(s*)css$/,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
            {
                test: /\.html$/,
                use: ["html-loader"]
            },
            {
                test: /\.png$/,
                use: [{
                    loader: "file-loader",
                    options: {
                        name: "[name].[hash].[ext]",
                        outputPath: "assets"
                    }
                }]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            inject: true,
            template: "./src/index.html"
        }),
    ]
}

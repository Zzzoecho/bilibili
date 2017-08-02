var webpack = require('webpack')
var path = require('path')
// var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: "./bilibili.js",
    output: {
        path: path.join(__dirname, "/public/js"),
        filename: "index.js"
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    },
    resolve: {
        alias: {
            jquery: path.join(__dirname, "src/js/jquery-3.2.1.js")
        }
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: 'jquery'
        })
    ]
}
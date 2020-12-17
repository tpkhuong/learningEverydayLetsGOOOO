var path = require('path');
var HtmlWebpackPlugin = require("html-webpack-plugin");


module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist")
    },
    module: {
        rules: [
            {
                test: /\.js$/i,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    plugins: [new HtmlWebpackPlugin({
        //once we added HtmlWebpackPlugin and pass in the obj {} with the template property pointing to our index.html file in dist live-reload works. WOOT!
        template: "./dist/index.html"
    })],
    devtool: "source-map",
    devServer: {
        contentBase: "./dist"
    }
}
var path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    entry: [__dirname + "/../src/client/index.jsx"],
    module: {
        rules: [
            {
                test: /\.(js|jsx|mjs)$/,
                exclude: /node_modules/,
                loader: "babel-loader",
            }
        ]
    },
    output: {
        path: __dirname + "/../client-dist",
        filename: "client-bundle[hash].js"
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Custom template",
            template: __dirname + "/../src/client/index.tmpl",
            filename: "index.html"
        })
    ],
    devServer: {
        contentBase: path.join(__dirname, "/../client-dist"),
        compress: true,
        port: 9080
    }
};

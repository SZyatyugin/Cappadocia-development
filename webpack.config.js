const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");
const PrettierPlugin = require("prettier-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist"),
        publicPath: "",
    },
    devServer:{
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000,
        overlay:true,
        open:true,
    },
    module: {
        rules: [
            {
                test: /\.(scss|sass)$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader",
                    "postcss-loader",
                    "resolve-url-loader",
                ],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: "prettier-loader",
            },
            {
                test: /\.(png|jpe?g|gif|jpg)$/,
                loader: "file-loader",
                options: {
                    name: "./assets/images/[name].[ext]",
                },
            },
            {
                test: /\.(svg|eot|woff|woff2|ttf)$/,
                loader: "file-loader",
                options: {
                    name: "./assets/fonts/[name].[ext]",
                },
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: "index.html",
            cache: false,
        }),
        new MiniCssExtractPlugin({
            filename: "style.css",
        }),
        new ESLintPlugin(),
        new PrettierPlugin(),
         new CleanWebpackPlugin(),
    ],
};

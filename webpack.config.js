const path = require('path');
const miniCSS = require('mini-css-extract-plugin');
const htmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPLugin = require('eslint-webpack-plugin');

module.exports = {
    entry: './build/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
    },
    module: {
        rules: [
            {
                test: /\.(sass|scss)$/,
                use: [
                    miniCSS.loader,
                    'css-loader',
                    'sass-loader',
                    'postcss-loader',
                ],
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: ['babel-loader', 'prettier-loader'],
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader?name=./assets/images/[name].[ext]',
                    },
                ],
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    {
                        loader: 'file-loader?name=./assets/fonts/[name].[ext]',
                    },
                ],
            },
        ],
    },
    plugins: [
        new htmlWebpackPlugin({
            title: 'My App',
            template: './build/index.html',
        }),
        new miniCSS({
            filename: 'style.css',
        }),
        new ESLintPLugin(),
    ],
};

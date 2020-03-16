const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackBar = require('webpackbar');

const constants = require('./constants.js');

const { config } = constants;

// Common config object
module.exports.client = {

    entry: {
        index: path.resolve(constants.JS_DIR, 'index.js'),
    },

    output: {
        path: constants.BUILD_DIR,
        publicPath: '/',
    },

    module: {
        rules: [
            {
                test: /\.(ico|gif|png|jpe?g)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name]-[md5:hash:hex:6].[ext]',
                            outputPath: 'images/',
                        },
                    },
                ],
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'fonts/',
                        },
                    },
                ],
            },
            {
                test: /\.jsx?/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        cacheDirectory: path.resolve(constants.WORK_DIR, 'node_modules/.cache/client/babel-loader'),
                        ...config.babelrc,
                    },
                },
            },
            {
                type: 'javascript/auto',
                test: /\.json/,
                loader: 'json-loader',
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.svg$/,
                use: [{
                    loader: '@svgr/webpack',
                    options: {
                        icon: true,
                    },
                }],
            },
        ],
    },

    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },

    plugins: [
        new HtmlWebpackPlugin({
            inject: true,
            template: path.resolve(constants.WORK_DIR, 'index.html'),
        }),
        new WebpackBar(),
    ],

};

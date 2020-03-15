const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const autoprefixer = require('autoprefixer');
const WebpackBar = require('webpackbar');

const constants = require('./constants.js');

const { config } = constants;

// Common config object
module.exports.client = {

    entry: {
        index: path.resolve(constants.JS_DIR, 'index.js'),
        scss: path.resolve(constants.SCSS_DIR, 'style.scss'),
    },

    output: {
        path: constants.BUILD_DIR,
        publicPath: '/build/',
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
                test: /\.(scss|sass)$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    {
                        loader: 'css-loader',
                        options: { minimize: true }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: function () {
                                return [autoprefixer({
                                    browsers: config.CSS_PREFIX
                                })]
                            }
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            implementation: require('sass'),
                        },
                    }
                ]
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
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css'
        }),
        new WebpackBar(),
    ],

};

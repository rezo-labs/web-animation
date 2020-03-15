const chalk = require('chalk');
const logSymbols = require('log-symbols');
const webpack = require('webpack');
const merge = require('webpack-merge');
const autoprefixer = require('autoprefixer');
const sass = require('sass');
const constants = require('./constants.js');

// Get common config
const { client } = require('./webpack.common.config.js');

const { config } = constants;
const commonConfig = config.webpack && config.webpack.client && config.webpack.client.common;
const devConfig = config.webpack && config.webpack.client && config.webpack.client.dev;

// Development mode
console.log(logSymbols.info, chalk.red.bold('DEVELOPMENT MODE'));
module.exports = ({ SSR = false }) => merge(client, {

    mode: 'development',

    devtool: 'cheap-module-eval-source-map',

    devServer: {
        historyApiFallback: true,
        inline: true,
        port: config.WEBPACK_PORT,
        publicPath: '/',
        stats: 'minimal',
        overlay: true,
        open: true,
    },

    module: {
        rules: [
            {
                test: /\.(scss|sass)$/,
                use: [
                    {
                        loader: 'style-loader',
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
                            implementation: sass,
                        },
                    }
                ]
            },
        ]
    },

    plugins: [
        // This makes everything reloaded when you change files
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin(Object.assign({}, constants.GLOBALS)),
    ],

}, commonConfig, devConfig);

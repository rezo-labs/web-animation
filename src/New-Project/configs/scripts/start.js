const program = require('commander');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const async = require('async');
const chalk = require('chalk');
const logSymbols = require('log-symbols');
const clientConfig = require('../webpack.client.development.config');

program
    .option('-l, --long', 'Verbose stats')
    .parse(process.argv);

const clientCompiler = webpack(clientConfig({ SSR: program.ssr }));
const { devServer } = clientConfig({ SSR: program.ssr });
let clientDevServer;

async.waterfall([
    (callback) => {
        clientDevServer = new WebpackDevServer(
            clientCompiler,
            !program.long ? devServer : Object.assign({}, devServer, {
                stats: { colors: true },
            }),
        );
        clientDevServer.listen(devServer.port, devServer.host, (err) => {
            if (err) {
                callback(err);
                return;
            }
            callback(null);
        });
    },
], (err) => {
    if (err) {
        console.error(err.stack || err);
        if (err.details) {
            console.error(chalk.red(err.details));
        }
        clientDevServer.close(() => console.log('Client closed.'));
    }
});

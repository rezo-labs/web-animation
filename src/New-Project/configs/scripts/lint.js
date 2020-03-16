const { CLIEngine } = require('eslint');
const fs = require('fs');
const chalk = require('chalk');
const logSymbols = require('log-symbols');
const path = require('path');
const {
    errorHandler,
} = require('./utils');
const {
    DIST_DIR,
} = require('../constants');

const cli = new CLIEngine({
    configFile: path.resolve(__dirname, '../.eslintrc.js'),
    ignorePath: path.resolve(__dirname, '../.eslintignore'),
    extensions: ['.js'],
});

const report = cli.executeOnFiles(['js/']);
const formatter = cli.getFormatter('html');
const outputPath = path.resolve(DIST_DIR, 'lint-report.html');

fs.writeFile(outputPath, formatter(report.results), (err) => {
    if (err) {
        errorHandler(err);
        return;
    }
    console.log(logSymbols.success, 'Finished');
    console.log(chalk.green.bold(`Lint report is at ${outputPath}.`));
});

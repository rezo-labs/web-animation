const chalk = require('chalk');
const logSymbols = require('log-symbols');
const express = require('express');
const opn = require('opn');
const {
    DIST_DIR,
    WEBPACK_LOCALHOST,
    config: {
        WEBPACK_PORT,
    }
} = require('../constants');

const app = express();

app.use(express.static(DIST_DIR));

app.listen(WEBPACK_PORT, () => {
    console.log(logSymbols.info, chalk.cyan.bold(`Server is listening on port ${WEBPACK_PORT}`));
    opn(WEBPACK_LOCALHOST);
});

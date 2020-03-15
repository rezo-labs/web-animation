const path = require('path');
const config = require('../config.js');

// Declare paths
// level 0
const WORK_DIR = path.resolve(__dirname, '..');
// level 1
const JS_DIR = path.resolve(WORK_DIR, 'js');
const SCSS_DIR = path.resolve(WORK_DIR, 'scss');
const DIST_DIR = path.resolve(WORK_DIR, 'dist');
const CONFIGS_DIR = path.resolve(WORK_DIR, 'configs');

const LOCALHOST = `http://localhost:${config.PORT}`;
const WEBPACK_LOCALHOST = `http://localhost:${config.WEBPACK_PORT}`;

const DEV_GLOBALS = config.globals.dev;
const PROD_GLOBALS = config.globals.prod;

Object.keys(DEV_GLOBALS).forEach((key) => {
    DEV_GLOBALS[key] = JSON.stringify(DEV_GLOBALS[key]);
});
Object.keys(PROD_GLOBALS).forEach((key) => {
    PROD_GLOBALS[key] = JSON.stringify(PROD_GLOBALS[key]);
});

module.exports = {
    config,
    WORK_DIR,
    JS_DIR,
    SCSS_DIR,
    DIST_DIR,
    CONFIGS_DIR,
    LOCALHOST,
    WEBPACK_LOCALHOST,
    DEV_GLOBALS,
    PROD_GLOBALS,
};

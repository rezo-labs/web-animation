module.exports = {
    // The port used by Webpack Dev Server
    WEBPACK_PORT: 8080,
    // This object contains all the constants that are available to all source files
    globals: {
        dev: {
            API_URL: '',
        },
        prod: {
            API_URL: '',
        },
    },
    babelrc: {
        presets: [
            '@babel/preset-env',
        ],
        plugins: [
            '@babel/plugin-syntax-dynamic-import',
            '@babel/plugin-transform-async-to-generator',
        ],
    },
};

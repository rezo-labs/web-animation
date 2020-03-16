const config = require('../config');

const GLOBALS = config.globals;
Object.keys(config.globals).forEach((key) => {
    GLOBALS[key] = false;
});

module.exports = {
    "extends": ["airbnb-base", "plugin:jest/recommended"],
    "env": {
        "browser": true,
        "node": true,
    },
    "globals": GLOBALS,
    "parser": "babel-eslint",
    "rules": {
        "indent": ["error", 4, {
            "SwitchCase": 1
        }],
        "linebreak-style": "off",
        "no-underscore-dangle": ["error", {
            "allow": [
                "_id",
            ]
        }],
        "no-nested-ternary": 0,
        "no-cond-assign": 0,
        "brace-style": ["error", "stroustrup"],

        "import/extensions": 0,
        "import/prefer-default-export": 0,
        "import/no-extraneous-dependencies": ["error", { "devDependencies": true }],
    },
};
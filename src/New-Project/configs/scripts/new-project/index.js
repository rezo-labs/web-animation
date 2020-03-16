#! /usr/bin/env node
const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const ncp = require('ncp').ncp;
const { WORK_DIR } = require('../../constants');
const {
    indexHTMLContent,
} = require('./templates');
const {
    errorHandler,
    successHandler,
} = require('../utils');
const {
    validateProject,
} = require('./validate');

inquirer
    .prompt([
        {
            type: 'input',
            name: 'project',
            message: 'What is the project name?',
            validate: validateProject,
        },
    ])
    .then((answers) => {
        const {
            project,
        } = answers;
        const projectPath = path.resolve(WORK_DIR, '..', project);


        if (fs.existsSync(projectPath)) {
            return errorHandler(`Project already exists at ${projectPath}`);
        }

        ncp(WORK_DIR, projectPath, {
            filter: file => !file.match(/node_modules/),
        }, function (err) {
            if (err) {
                return errorHandler(err);
            }
            successHandler(`Project ${project} is successfully created!`);
            fs.writeFileSync(path.join(projectPath, 'index.html'), indexHTMLContent(project));
        });
    });

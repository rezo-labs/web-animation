/**
 * Validate project name
 * @param {string} project - project name
 */
const validateProject = (project) => {
    if (project.match(/^[\w-]+$/)) {
        return true;
    }
    return validateProject.message;
};
validateProject.message = 'Only word characters [a-zA-Z0-9_] and "-" is allowed.';

module.exports = {
    validateProject,
};

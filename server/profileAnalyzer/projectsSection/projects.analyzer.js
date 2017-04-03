const logger = require('./../../../applogger');
const async = require('async');

const projectModel = require('./projects.graphmodel');

const analyze = function (profileUser, projectColln, callback) {

    if (!profileUser || !profileUser.username || !projectColln || !(Array.isArray(projectColln)) || projectColln.length <= 0) {
        logger.error('No data found to analyze');
        //If data is not valid, return back without processing
        return callback({ error: 'No data found to analyze' }, null);
    }
    logger.info('Proceeding to analyze!');
    async.map(projectColln, function(instance, asyncCallback) {
        analyzeprojectInstance(profileUser.username, instance, asyncCallback);
    }, callback);

    return true;
};

analyzeprojectInstance = function(personName, project, analyzeResultCallback) {
    logger.debug('[*] Starting to analyze project instance [', personName + ':' + project.name, ']');

    async.parallel([
        function(callback) {
            // Establish relation between Person to Project
            projectModel.relatePersonToProject(personName, project, callback);
        },
        function(callback) {
            // Establish relation between person and jobrole
            console.log(project.skills+"project")
            projectModel.relatePersonToSkills(personName, project.skills, callback);
        },
        function(callback) {
            // Establish relation between person and working location
            projectModel.relateProjectToSkills(project.name, project.skills, callback);
        }
    ], function(err, result) {
        if (err) {
            logger.error('Error in analyzing project instance ', err);
            analyzeResultCallback(err, null);
        }
        logger.debug('[*] Done analysing project instance [', personName + ':' + project.name, ']');
        analyzeResultCallback(null, result);
    });
};

module.exports = {
    analyze: analyze
}
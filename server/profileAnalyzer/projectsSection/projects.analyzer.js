const logger = require('./../../../applogger');
const async = require('async');
const projectModel = require('./projects.graphmodel');

const analyze = function(profileUser, projectColln, callback) {
    if (!profileUser || !projectColln || !(Array.isArray(projectColln)) || projectColln.length <= 0) {
        logger.error('No data found to analyze');
        //If data is not valid, return back without processing
        return callback({ error: 'No data found to analyze' }, null);
    }

    logger.info('Proceeding to analyze!');
    async.mapSeries(projectColln, function(instance, asyncCallback) {
        analyzeprojectInstance(profileUser, instance, asyncCallback);
    }, callback);

    return true;
};

const analyzeprojectInstance = function(personName, project, analyzeResultCallback) {
    logger.debug('[*] Starting to analyze project instance [', personName + ':' + project.name, ']');

    async.waterfall([
            function(callback) {
                // Establish relation between Person and Project
                projectModel.relatePersonToProject(personName, project, callback);
            },
            function(prevStepResult, callback) {
                // Establish relation between Person and Skills
                projectModel.relatePersonToSkills(personName, project.skills, callback);
            },
            function(newStepResult, callback) {
                // Establish relation between Project and Skills
                projectModel.relateProjectToSkills(project.name, project.skills, callback);


            }
        ],
        function(err, result) {
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
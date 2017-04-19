const logger = require('./../../../applogger');
const async = require('async');
const workExperienceModel = require('./workExperience.graphmodel');


const analyze = function(profileUser, workExperienceColln, callback) {
    // If data is not valid, return back without processing
    if (!profileUser ||
        !workExperienceColln ||
        !Array.isArray(workExperienceColln) ||
        workExperienceColln.length <= 0) {
        logger.error('No data found to analyze');
        return callback({ error: 'No data found to analyze' }, null);
    }
    logger.info('Proceeding to analyze work experience..!');
    async.map(workExperienceColln, function(instance, asyncCallback) {
        analyzeWorkExperienceInstance(profileUser, instance, asyncCallback);
    }, callback);

    return true;
};

analyzeWorkExperienceInstance = function(personName, workExperience, analyzeResultCallback) {
    logger.debug('[*] Starting to analyze Workexperience instance [', personName + ':' + workExperience.workplace, ']');
    console.log("Work Experience",workExperience,"Person name:",personName);
    async.parallel([
        function(callback) {
            // Establish relation between organization and person ROLE AND DURATION
            workExperienceModel.relatePersonToOrganisation(personName, workExperience, callback);
        },
        function(callback) {
            // Establish relation between person and jobrole
            workExperienceModel.releatePersonToJobRole(personName, workExperience, callback);
        },
        function(callback) {
            // Establish relation between person and working location
            workExperienceModel.releatePersonToWorkingLocation(personName, workExperience, callback);
        }
    ], function(err, result) {
        if (err) {
            logger.error('Error in analyzing workexperience instance ', err);
            analyzeResultCallback(err, null);
        }
        logger.debug('[*] Done analysing Workexperience instance [', personName + ':' + workExperience.workplace, ']');
        analyzeResultCallback(null, result);
    });
};

module.exports = {
    analyze: analyze,
    analyzeWorkExperienceInstance: analyzeWorkExperienceInstance
};
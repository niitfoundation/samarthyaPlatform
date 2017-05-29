const logger = require('./../../../applogger');
const async = require('async');
const jobPreferenceModel = require('./jobPreference.graphmodel');

const analyze = function(profileUser, jobPreferenceColln, callback) {
    if (!profileUser || !jobPreferenceColln || jobPreferenceColln.jobRoles.length <= 0) {

        logger.error('No data found to analyze');

        return callback({
            error: 'No data found to analyze'
        }, null);
    }
    logger.info('Proceeding to analyze Job preference..!');
    async.map(jobPreferenceColln.jobRoles, function(instance, asyncCallback) {
        analyzeJobPreferenceInstance(profileUser, instance, jobPreferenceColln.looking, asyncCallback);
    }, callback);
    return true;
}

analyzeJobPreferenceInstance = function(profileUser, jobPreference, looking, analyzeResultCallback) {
    logger.debug('[*] Starting to analyze Job preference instance [', profileUser + ':' + jobPreference.jobRole, ']');

    async.parallel([
        //relating person to Himself node with relation looking and property
        function(callback) {
            jobPreferenceModel.relatePersonToHimself(profileUser, looking, callback)
        },
        //relating person to jobRole node
        function(callback) {
            jobPreferenceModel.relatePersonTojobRole(profileUser, jobPreference.name, callback)
        },
        // relating person to skill node
        function(callback) {
            jobPreferenceModel.relatePersonToSkill(profileUser, jobPreference.skills, callback);
        },
        // relating person to location node
        function(callback) {
            jobPreferenceModel.relatePersonToPreferredLocation(profileUser, jobPreference.locations, callback);
        }
    ], function(err, result) {
        if (err) {
            logger.error('Error in analyzing jobPreference instance ', err);
            analyzeResultCallback(err, null);
        }
        logger.debug('[*] Done analysing jobPreference instance [', profileUser + ':' + jobPreference.jobRole, ']');
        analyzeResultCallback(null, result);
    });
}

module.exports = {
    analyze: analyze,
    analyzeJobPreferenceInstance: analyzeJobPreferenceInstance
}
const logger = require('./../../../applogger');
const async = require('async');
const jobPreferenceModel = require('./jobPreference.graphmodel');

const analyze = function (profileUser, jobPreferenceColln, callback) {
    if (!profileUser || !profileUser.username || !jobPreferenceColln || !(Array.isArray(jobPreferenceColln)) || jobPreferenceColln.length <= 0) {
        logger.error('No data found to analyze');

        return callback({
            error: "No data found to analyze"
        }, null);
    }

    logger.info('Proceeding to analyze work experience..!');


    let results = [];
    analyzeJobPreferenceInstance(profileUser, jobPreferenceColln[0], callback);
    return callback;
}

analyzeJobPreferenceInstance = function (profileUser, jobPreference, callback) {

    async.parallel([
        //relating person to jobRole node
        function (callback) {
            jobPreferenceModel.relatePersonTojobRole(profileUser.username, jobPreference.jobRole, function (PersonToLocationObj) {
                    callback(null, PersonToLocationObj);
                },
                function (err) {
                    callback(err, null);
                });
        },
        //relating person to skill node
        function (callback) {
            jobPreferenceModel.relatePersonToSkill(profileUser.username, jobPreference.skill, function (PersonToSkill) {
                    callback(null, PersonToSkill);
                },
                function (err) {
                    callback(err, null);
                });
        },
        //relating person to location node
        function (callback) {
            jobPreferenceModel.relatePersonToPreferredLocation(profileUser.username, jobPreference.location, function (PersonToLocation) {
                    callback(null, PersonToSkill);
                },
                function (err) {
                    callback(err, null);
                });
        }
    ], function (err, result) {
        callback(result);
    })
}

module.exports = {
    analyze: analyze
}
const logger = require('./../../../applogger');
const async = require('async');
const personalInfoModel = require('./personalInfo.graphmodel');


const analyze = function (profileUser, personalInfoColln, callback) {
    // If data is not valid, return back without processing
    if (!profileUser
        || !profileUser.username
        || !personalInfoColln
        || !Array.isArray(personalInfoColln)
        || personalInfoColln.length <= 0) {
        logger.error('No data found to analyze');
        return callback({ error: 'No data found to analyze' }, null);
    }
    logger.info('Proceeding to analyze Personal Info..!');

    async.map(personalInfoColln, function (instance, asyncCallback) {
        analyzePersonalInfoInstance(profileUser.username, instance, asyncCallback);
    }, callback);

    return true;
};

analyzePersonalInfoInstance = function (personName, personalInfo, analyzeResultCallback) {
    logger.debug('[*] Starting to analyze Personal Info instance [', personName + ':' + personalInfo.location, ']');

    async.parallel([
        function (callback) {
            // Establish relation between person and location
            personalInfoModel.relatePersonToLocation(personName, personalInfo, callback);
        },
        function (callback) {
            // Establish relation between person and pref lang and native lang
            personalInfoModel.relatePersonToLanguage(personName, personalInfo, callback);
        },
        function (callback) {
            // Establish relation between person and speak , read and write lang
            personalInfoModel.relatePersonToLanguageColln(personName, personalInfo, callback);
        }
    ], function (err, result) {
        if (err) {
            logger.error('Error in analyzing personalInfo instance ', err);
            analyzeResultCallback(err, null);
        }
        logger.debug('[*] Done analysing personalInfo instance [', personName + ':' + personalInfo.location, ']');
        analyzeResultCallback(null, result);
    });
};

module.exports = {
    analyze: analyze
};

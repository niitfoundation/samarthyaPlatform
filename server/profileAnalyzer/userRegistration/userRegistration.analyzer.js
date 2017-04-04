const logger = require('./../../../applogger');
const async = require('async');
const personalInfoModel = require('./userRegistration.graphmodel');

const analyze = function (profileUser, profileData, callback) {
    // If data is not valid, return back without processing
    if (!profileUser
        || !profileUser.username
        || !profileData.profession
        || !profileData
        || !Array.isArray(profileData)
        || profileData.length <= 0) {
        logger.error('No data found to analyze');
        return callback({ error: 'No data found to analyze' }, null);
    }
    logger.info('Proceeding to analyze Personal Info and profession..!');

    async.waterfall([
        function (callback) {
            // Establish relation between person and profession
            personalInfoModel.createPerson(profileUser.username, profileData, callback);
        },
        function (callback) {
            // Establish relation between person and profession
            personalInfoModel.relatePersonToProfesstion(profileUser.username, profileData.profession, callback);
        }
    ], function (err, result) {
        if (err) {
            logger.error('Error in analyzing profileData instance ', err);
            analyzeResultCallback(err, null);
        }
        logger.debug('[*] Done analysing profileData instance [', profileUser.username + ':' + profileData.profession, ']');
        analyzeResultCallback(null, result);
    });

    return true;
};

module.exports = {
    analyze: analyze
};

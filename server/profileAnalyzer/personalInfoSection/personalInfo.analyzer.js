const logger = require('./../../../applogger');
const async = require('async');
const personalInfoModel = require('./personalInfo.graphmodel');


const analyze = function (profileUser, personalInfoColln, callback) {
    if (!profileUser
        || !profileUser.username
        || !personalInfoColln
        || !Array.isArray(personalInfoColln)
        || personalInfoColln.length <= 0) {
        logger.error('No data found to analyze');
        // If data is not valid, return back without processing
        return callback({ error: 'No data found to analyze' }, null);
    }
    logger.info('Proceeding to analyze Personal Info..!');


    // todo full method
    let results = [];
    analyzePersonalInfoInstance(profileUser, personalInfoColln[0], callback);
    return callback;
};


analyzePersonalInfoInstance = function (profileUser, personalInfo, callback) {

    async.parallel([
        // for person to location relation
        function (callback) {
            personalInfoModel.relatePersonToLocation(profileUser, personalInfo.address.district, function (PersonToLocationObj) {
                callback(null, PersonToLocationObj);
            },
                function (err) {
                    callback(err, null);
                });
        },

        // for person to language relation
        function (callback) {
            personalInfoModel.relatePersonToLanguage(profileUser, personalInfo.nativeLang, function (PersonToLanguageObj) {
                callback(null, PersonToLocationObj);
            },
                function (err) {
                    callback(err, null);
                });
        }

    ], function (err, result) {
        callback();
    });
};

module.exports = {
    analyze: analyze
};

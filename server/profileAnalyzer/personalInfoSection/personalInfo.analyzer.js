const logger = require('./../../../applogger');
var async = require('async');


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

    let results = [];
    analyzePersonalInfoInstance(profileUser, personalInfoColln[0], callback);
    return callback;
};


analyzePersonalInfoInstance = function (profileUser, personalInfo, callback) {
    // Establish relation between organization and person

    // Establish relation between person and jobrole

    // Establish relation between person and working location

    // async.parallel([array of functions, which need to be invoked in parallel, which async], callback);


    async.parallel([

    ], function (err, result) {
        callback();
    });
};

module.exports = {
    analyze: analyze
};

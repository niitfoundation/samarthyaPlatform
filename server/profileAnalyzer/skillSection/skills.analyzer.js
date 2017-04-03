const logger = require('./../../../applogger');
const async = require('async');
const skillsModel = require('./skills.graphmodel');


const analyze = function (profileUser, skillsColln, callback) {
    if (!profileUser
        || !profileUser.username
        || !skillsColln
        || !Array.isArray(skillsColln)
        || skillsColln.length <= 0) {
        logger.error('No data found to analyze');
        // If data is not valid, return back without processing
        return callback({ error: 'No data found to analyze' }, null);
    }
    logger.info('Proceeding to analyze Skills..!');


    // todo full method
    let results = [];
    analyzeSkillsInstance(profileUser, skillsColln[0], callback);
    return callback;
};


analyzeSkillsInstance = function (profileUser, skills, callback) {
    async.parallel([
        // for person to skills
        function (callback) {
            skillsModel.relatePersonToSkills(profileUser, skills[0].name, skills[0].experience, function (PersonToSkillsObj) {
                callback(null, PersonToSkillsObj);
            },
                function (err) {
                    callback(err, null);
                });
        },
        // // for person to skills experience
        // function (callback) {
        //     skillsModel.relatePersonToSkills(profileUser, skills[0].name, skills[0].experience, function (PersonToSkillsObj) {
        //         callback(null, PersonToSkillsObj);
        //     },
        //         function (err) {
        //             callback(err, null);
        //         });
        // },

    ], function (err, result) {
        callback();
    });
};

module.exports = {
    analyze: analyze
};

const logger = require('./../../../applogger');
const async = require('async');
const skillsModel = require('./skills.graphmodel');


const analyze = function(profileUser, skillsColln, callback) {
    if (!profileUser || !skillsColln || !Array.isArray(skillsColln) ||
        skillsColln.length <= 0) {
        logger.error('No skill data found to analyze');

        // If data is not valid, return back without processing
        return callback({ error: 'No skill data found to analyze' }, null);
    }

    logger.info('Proceeding to analyze Skills..!');

    async.map(skillsColln, function(instance, asyncCallback) {
        analyzeSkillsInstance(profileUser, instance, asyncCallback);
    }, callback);

    return true;
};


analyzeSkillsInstance = function(personName, skills, analyzeResultCallback) {
    logger.debug('[*] Starting to analyze skill instance [', personName + ':' + skills.name, ']');
    async.parallel([
        // for person to skills

        function(callback) {
            // Establish relation between person and skill
            skillsModel.relatePersonToSkills(personName, skills, callback);
        }
    ], function(err, result) {
        if (err) {
            logger.error('Error in analyzing skill instance ', err);
            analyzeResultCallback(err, null);
        }

        logger.debug('[*] Done analysing qualification instance [', personName + ':' + skills.name, ']');
        analyzeResultCallback(null, result);
    });
};

module.exports = {
    analyze: analyze,
    analyzeSkillsInstance: analyzeSkillsInstance
};
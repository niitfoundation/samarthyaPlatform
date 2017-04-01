const logger = require('./../../../applogger');

const analyze = function(profileUser, workExperienceColln, callback) {
    if (!profileUser || !profileUser.username || !workExperienceColln || !(Array.isArray(workExperienceColln)) || workExperienceColln.length <= 0) {
        logger.error('No data found to analyze');
        //If data is not valid, return back without processing
        return callback({ error: 'No data found to analyze' }, null);
    }

    logger.info('Proceeding to analyze work experience..!');

    let results = [];
    analyzeWorkExperienceInstance(profileUser, workExperienceColln[0], callback);
    return;
}

analyzeWorkExperienceInstance = function(profileUser, workExperience, callback) {
    //Establish relation between organization and person        

    //Establish relation between person and jobrole

    //Establish relation between person and working location 

    async.parallel([array of functions, which need to be invoked in parallel, which async], callback);


    async.parallel([
        function() {
            let attributes = {};
            relatePersonToOrganisation(profileUser, workExperience.organization, attributes);
        },
        function() {
            relatePersonToOrganisation()
        },
        function() {
            relatePersonToOrganisation()
        }
    ], function(err, result) {
        callback();
    })
}

module.exports = {
    analyze: analyze
}
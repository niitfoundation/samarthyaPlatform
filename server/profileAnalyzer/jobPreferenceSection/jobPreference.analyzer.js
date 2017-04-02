const logger = require('./../../../applogger');

const analyze =function(profileUser,jobPreferenceColln,callback){
    if(!profileUser || !profileUser.username ||!jobPreferenceColln || !(Array.isArray(jobPreferenceColln))|| jobPreferenceColln.length<=0){
                logger.error('No data found to analyze');

        return callback({error:"No data  found to analyze"},null);
    }
    
     logger.info('Proceeding to analyze work experience..!');

    let results = [];
    analyzeJobPreferenceInstance(profileUser, jobPreferenceColln[0], callback);
    return callback;
}

analyzeJobPreferenceInstance = function(profileUser, jobPreference, callback) {
    //Establish relation between organization and person        

    //Establish relation between person and jobrole

    //Establish relation between person and working location 

    async.parallel([
        function() {
            relatePersonTojobRole(profileUser, jobPreference.jobRole);
        },
        function() {
            relatePersonToSkill()
        },
        function() {
            relatePersonToPreferredLocation()
        }
    ], function(err, result) {
        callback();
    })
}

module.exports={
    analyze:analyze
}
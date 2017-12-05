const ProfileModel = require('../../profile/profile.entity');
const logger = require('../../../../../applogger');

const countOfCandidatesLookingForJob = function(profession,callback){

		ProfileModel.count({"profession": profession,"jobPreferences.looking" : true},function(err,count){
			if(err){
				logger.error('Error in fetching count of candidates looking for job');
				callback(null, err);
			}
			else{
				logger.info('Count of candidates looking for job successful');
				callback(null, count);
			}
		});
}

module.exports = {
	countOfCandidatesLookingForJob: countOfCandidatesLookingForJob
}




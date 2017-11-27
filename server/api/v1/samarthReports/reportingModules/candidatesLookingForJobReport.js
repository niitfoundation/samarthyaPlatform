const ProfileModel = require('../../profile/profile.entity');
const logger = require('../../../../../applogger');

const countOfCandidatesLookingForJob = function(){

	return new Promise((resolve,reject) => {

		ProfileModel.count({"jobPreferences.looking" : true},function(err,count){
			if(err){
				logger.error('Error in fetching count of candidates looking for job');
				reject(err);
			}
			else{
				logger.info('Count of candidates looking for job successful');
				resolve(count);
			}
		});
	});	
}

module.exports = {
	countOfCandidatesLookingForJob: countOfCandidatesLookingForJob
}




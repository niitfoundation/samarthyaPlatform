const ProfileModel = require('../../profile/profile.entity');
const logger = require('../../../../../applogger');

const countOfCandidatesRejected = function(){

	return new Promise((resolve,reject) => {

		ProfileModel.count({"placementHistory.placementStatus" : "not joined"},function(err,count){
			if(err){
				logger.error('Error in fetching count of candidates rejected');
				reject(err);
			}
			else{
				logger.info('Count of rejected candidates successful');
				resolve(count);
			}
		});
	});	
}

module.exports = {
	countOfCandidatesRejected: countOfCandidatesRejected
}
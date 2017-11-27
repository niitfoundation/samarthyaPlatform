const ProfileModel = require('../../profile/profile.entity');
const logger = require('../../../../../applogger');

const countOfCandidatesInProgressPlacement = function(){

	return new Promise((resolve,reject) => {

		ProfileModel.count({"placementHistory.placementStatus" : "is in progress"},function(err,count){
			if(err){
				logger.error('Error in fetching count of candidates in progress of placement process');
				reject(err);
			}
			else{
				logger.info('Count of candidates successful in progress of placement process');
				resolve(count);
			}
		});
	});	
}

module.exports = {
	countOfCandidatesInProgressPlacement: countOfCandidatesInProgressPlacement
}
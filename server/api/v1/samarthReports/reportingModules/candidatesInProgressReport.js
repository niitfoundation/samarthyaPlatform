const ProfileModel = require('../../profile/profile.entity');
const logger = require('../../../../../applogger');

const countOfCandidatesInProgressPlacement = function(profession, callback){

		ProfileModel.count({"profession": profession, "placementHistory.placementStatus" : "is in progress"},function(err,count){
			if(err){
				logger.error('Error in fetching count of candidates in progress of placement process');
				callback(null, err);
			}
			else{
				logger.info('Count of candidates successful in progress of placement process');
				callback(null, count);
			}
		});
}

module.exports = {
	countOfCandidatesInProgressPlacement: countOfCandidatesInProgressPlacement
}
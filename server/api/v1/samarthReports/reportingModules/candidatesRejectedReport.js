const ProfileModel = require('../../profile/profile.entity');
const logger = require('../../../../../applogger');

const countOfCandidatesRejected = function(profession, callback){

		ProfileModel.count({"profession":profession,"placementHistory.placementStatus" : "not joined"},function(err,count){
			if(err){
				logger.error('Error in fetching count of candidates rejected');
				callback(null, err);
			}
			else{
				logger.info('Count of rejected candidates successful');
				callback(null, count);
			}
		});
}

module.exports = {
	countOfCandidatesRejected: countOfCandidatesRejected
}
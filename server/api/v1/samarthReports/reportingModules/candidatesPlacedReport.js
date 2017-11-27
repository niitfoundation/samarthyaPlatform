const ProfileModel = require('../../profile/profile.entity');
const logger = require('../../../../../applogger');

const countOfCandidatesPlaced = function(){

	return new Promise((resolve,reject) => {

		ProfileModel.count({"placementHistory.placementStatus" : "has joined"},function(err,count){
			if(err){
				logger.error('Error in fetching count of candidates placed');
				reject(err);
			}
			else{
				logger.info('Count of candidates successfully counted');
				resolve(count);
			}
		});
	});	
}

module.exports = {
	countOfCandidatesPlaced: countOfCandidatesPlaced
}
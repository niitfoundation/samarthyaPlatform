const ProfileModel = require('../../profile/profile.entity');
const logger = require('../../../../../applogger');

const countOfCandidatesPlaced = function(profession,callback){

		ProfileModel.count({"profession": profession ,"placementHistory.placementStatus" : "has joined"},function(err,count){
			if(err){
				logger.error('Error in fetching count of candidates placed');
				callback(null, err);
			}
			else{
				logger.info('Count of candidates successfully counted');
				callback(null, count);
			}
		});
}

module.exports = {
	countOfCandidatesPlaced: countOfCandidatesPlaced
}
const ProfileModel = require('../../profile/profile.entity');
const logger = require('../../../../../applogger');
const lodash = require('lodash');

const countOfCandidatesForFollowUp = function(callback){
	logger.info("Inside countOfCandidatesForFollowUp");
	let followUpDate = new Date()-1000*86400*30;
	let query = {};
	lodash.set(query,["placementHistory.duration.end","$lte"],followUpDate);
	console.log(query);
		ProfileModel.count(query,function(err,count){
			if(err){
				logger.error('Error in fetching count of candidates rejected');
				callback(null, err);
			}
			else{
				logger.info('Count of candidates left for follow up successful');
				callback(null, count);
			}
		});	
}

module.exports = {
	countOfCandidatesForFollowUp: countOfCandidatesForFollowUp
}
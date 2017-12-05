const ProfileModel = require('../../profile/profile.entity');
const logger = require('../../../../../applogger');
const lodash = require('lodash');

const countOfCandidatesForFollowUp = function(profession){
	logger.info("Inside countOfCandidatesForFollowUp");
	let followUpDate = new Date()-1000*86400*30;
	let query = {};
	lodash.set(query,["placementHistory.duration.end","$lte"],followUpDate);
	console.log(query);
	return new Promise((resolve,reject) => {

		ProfileModel.count(query,function(err,count){
			if(err){
				logger.error('Error in fetching count of candidates rejected');
				reject(err);
			}
			else{
				logger.info('Count of candidates left for follow up successful');
				resolve(count);
			}
		});
	});	
}

module.exports = {
	countOfCandidatesForFollowUp: countOfCandidatesForFollowUp
}
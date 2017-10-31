const logger = require('./../../../../applogger');
const profileCtrl = require('../profile/profile.controller');
const userCtrl = require('../users/users.controller');
const async = require('async');


const getCoordinators = function(role, professionArray, page, limit, callback){
	
	logger.debug("inside async.waterfall in getUserOnRole");
	async.waterfall([function(callback){
		userCtrl.getUserOnRole(role,callback)
	},function(prevResult,callback){
		let usernames = prevResult;
		profileCtrl.findProfiles(usernames, {professionArray, page, limit}, callback)
	}],function(err,result){
		if(err){
			logger.debug('Error in fetching Coordinators', err);
		}
		logger.debug('Finished fetching Coordinators with result ', result);
		callback(err, result);			
	});
}


module.exports = {
    getCoordinators: getCoordinators
};

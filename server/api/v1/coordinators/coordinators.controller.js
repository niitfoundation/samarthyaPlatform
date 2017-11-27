const logger = require('./../../../../applogger');
const profileCtrl = require('../profile/profile.controller');
const userCtrl = require('../users/users.controller');
const ProfileModel = require('../profile/profile.entity');
const async = require('async');
const lodash = require('lodash');


const getCoordinators = function(role, professionArray, page, limit, callback){
	
	logger.debug("Inside async.waterfall in getUserOnRole");
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

const countCoordinators = function(profession,callback){
	let role = 'Coordinator';
	async.waterfall([function(callback){
				userCtrl.getUserOnRole(role,callback)
			},function(prevResult,callback){
				let usernames = prevResult;
				let query = {};
				lodash.set(query,["username","$in"],usernames);
				lodash.set(query,"profession",profession);
				ProfileModel.count(query,callback)
			}],function(err,resultCount){
				if(err){
					logger.error('Error in fetching count of coordinators of profession: ', profession);
				}
				else{
					logger.info('The count of coordinators in profession found Successfully in profession '+profession+' as ', resultCount);
				}
				callback(null,resultCount);
			});
}

module.exports = {
    getCoordinators: getCoordinators,
    countCoordinators: countCoordinators
};

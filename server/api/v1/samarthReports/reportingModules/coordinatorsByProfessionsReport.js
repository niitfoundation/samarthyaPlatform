const coordCtrl = require('../../coordinators/coordinators.controller');
const usrCtrl = require('../../users/users.controller');
const ProfileModel = require('../../profile/profile.entity');
const logger = require('../../../../../applogger');
const async = require('async');

const countCoordinatorsByProfession = function(){
	// let role = 'Coordinator';
	let professionArray = [];
	return new Promise((resolve, reject) => {
	ProfileModel.distinct('profession', function(err,result){
		if(err){
			logger.error('Error in fetching professions');
			reject(err);
		}
		else{
			professionArray = result;
			logger.info('Fetched Professions Successfully ',professionArray);
		}
		professionArray.forEach(function(profession){

			console.log('Checking coordinators for profession ', profession);
			coordCtrl.countCoordinators(profession,function(err,result){
				if(err){
					logger.error('Error in fetching result');
					reject(err);
				}
				else{
					logger.info('Fetch Successful');
					resolve(result);
				}
			});
		});
	});
});
}

module.exports = {
	countCoordinatorsByProfession : countCoordinatorsByProfession
};
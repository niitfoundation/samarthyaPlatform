const totalCandidatesReport = require('./reportingModules/totalCandidatesReport');
const candidatesInProgressReport = require('./reportingModules/candidatesInProgressReport');
const candidatesForFollowUpReport = require('./reportingModules/candidatesForFollowUpReport');
const candidatesLookingForJobReport = require('./reportingModules/candidatesLookingForJobReport');
const candidatesPlacedReport = require('./reportingModules/candidatesPlacedReport');
const candidatesRejectedReport = require('./reportingModules/candidatesRejectedReport');
const coordinatorsByProfessionsReport = require('./reportingModules/coordinatorsByProfessionsReport');
const async = require('async');
const ProfileModel = require('../profile/profile.entity');
const lodash = require('lodash');
const userCtrl = require('../users/users.controller');
const logger = require('./../../../../applogger');

const getReport = function(role,callback){
		async.series({
		TotalCandidates : function(callback){
			totalCandidatesReport.candidateCount(role, callback)
		},
		FollowUpCandidates : function(callback){
			candidatesForFollowUpReport.countOfCandidatesForFollowUp(callback)
		}				
		},function(err, results){
			if(err){
				logger.error('Error occured - Fetch Failed ', err);
			}
			else
				callback(null, results);
		});
}

const getReportsForGraph = function(profession, callback){

		async.series({
		Profession: function(callback){
			callback(null, profession);
		},
		Placed : function(callback){
			candidatesPlacedReport.countOfCandidatesPlaced(profession, callback)
		},
		Rejected : function(callback){
			candidatesRejectedReport.countOfCandidatesRejected(profession,callback)
		},
		InProgress : function(callback){
			candidatesInProgressReport.countOfCandidatesInProgressPlacement(profession,callback)
		},
		LookingForJob : function(callback){
			candidatesLookingForJobReport.countOfCandidatesLookingForJob(profession,callback)
		}				
		},function(err, results){
			if(err){
				logger.error('Error occured - Fetch Failed ', err);
			}
			else
				callback(null, results);
		});		
}


const resultArray = function(callback){
	let professionArray = [];
	let role = 'candidate';
	async.waterfall([function(callback){
				userCtrl.getUserOnRole(role,callback)
			},function(prevResult,callback){
				let usernames = prevResult;
				let query = {};
				lodash.set(query,["username","$in"],usernames);	
				ProfileModel.distinct('profession',query,callback);
				}],function(err,resultCount){
				if(err){
					logger.error('Error in fetching professions');
					callback(null,err);
				}
				else{
					professionArray = resultCount;
					async.map(professionArray, getReportsForGraph, function(err,result){
					if(err){
						callback(null, err);
				}
			callback(null, result);
			})
		}	
	});
}

module.exports = {
	getReport:getReport,
	getReportsForGraph: getReportsForGraph,
	resultArray: resultArray
}
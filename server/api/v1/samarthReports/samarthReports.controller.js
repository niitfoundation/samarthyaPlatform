const totalCandidatesReport = require('./reportingModules/totalCandidatesReport');
const candidatesInProgressReport = require('./reportingModules/candidatesInProgressReport');
const candidatesForFollowUpReport = require('./reportingModules/candidatesForFollowUpReport');
const candidatesLookingForJobReport = require('./reportingModules/candidatesLookingForJobReport');
const candidatesPlacedReport = require('./reportingModules/candidatesPlacedReport');
const candidatesRejectedReport = require('./reportingModules/candidatesRejectedReport');
const coordinatorsByProfessionsReport = require('./reportingModules/coordinatorsByProfessionsReport');
const async = require('async');

// const getReport = function(profession, reportName){
// 	return new Promise((resolve, reject) => {

// 			if(reportName == "totalCandidatesReport"){
// 				console.log("Now checking reportName");
// 				totalCandidatesReport.candidateCount('candidate').then((successResult) => {
// 						console.log("The number of candidates are : ",successResult);
// 						resolve(successResult);
// 				},(errResult) => {
// 		            // Log the error for internal use
// 		            logger.error('Internal error occurred');
// 		    	});	
// 			}
// 			if(reportName == "coordinatorsByProfessionsReport"){
// 				console.log("checking report name as coordinatorsByProfessionsReport");
// 				coordinatorsByProfessionsReport.countCoordinatorsByProfession().then((successResult) => {
// 					resolve(successResult);
// 				},(errResult) => {
// 					logger.error('Internal error occurred');
// 				});
// 			}
// 			if(reportName == "candidatesPlacedReport" && profession == "retail"){
// 				console.log("checking report name as candidatesPlacedReport");
// 				candidatesPlacedReport.countOfCandidatesPlaced(profession).then((successResult) => {
// 					console.log('Number of Candidates placed are ', successResult);
// 					resolve(successResult);
// 				},(errResult) => {
// 					logger.error('Internal error occurred');
// 				});
// 			}
// 			if(reportName == "candidatesInProgressReport"){
// 				console.log("checking report name as candidatesInProgressReport");
// 				candidatesInProgressReport.countOfCandidatesInProgressPlacement().then((successResult) => {
// 					console.log('Number of Candidates in progress are ', successResult);
// 					resolve(successResult);
// 				},(errResult) => {
// 					logger.error('Internal error occurred');
		            
// 				});
// 			}
// 			if(reportName == "candidatesRejectedReport"){
// 				console.log("checking report name as candidatesRejectedReport");
// 				candidatesRejectedReport.countOfCandidatesRejected().then((successResult) => {
// 					console.log('Number of Candidates rejected are ', successResult);
// 					resolve(successResult);
// 				},(errResult) => {
// 					logger.error('Internal error occurred');
		            
// 				});
// 			}
// 			if(reportName == "candidatesLookingForJobReport"){
// 				console.log("checking report name as candidatesLookingForJobReport");
// 				candidatesLookingForJobReport.countOfCandidatesLookingForJob().then((successResult) => {
// 					console.log('Number of Candidates Looking For Job are ', successResult);
// 					resolve(successResult);
// 				},(errResult) => {
// 					logger.error('Internal error occurred');
		            
// 				});
// 			}
// 			if(reportName == "candidatesForFollowUpReport"){
// 				console.log("checking report name as candidatesForFollowUpReport");
// 				candidatesForFollowUpReport.countOfCandidatesForFollowUp().then((successResult) => {
// 					console.log('Number of Candidates for Follow Up are ', successResult);
// 					resolve(successResult);
// 				},(errResult) => {
// 					logger.error('Internal error occurred');
		  
// 				});
// 			}
// 	});
// }

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


const resultArray = function(professionArray, callback){
	async.map(professionArray, getReportsForGraph, function(err,result){
		if(err){
			callback(null, err);
		}
		callback(null, result);
	})
}

module.exports = {
	getReportsForGraph: getReportsForGraph,
	resultArray: resultArray
}
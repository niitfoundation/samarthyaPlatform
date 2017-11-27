const totalCandidatesReport = require('./reportingModules/totalCandidatesReport');
const candidatesInProgressReport = require('./reportingModules/candidatesInProgressReport');
const candidatesForFollowUpReport = require('./reportingModules/candidatesForFollowUpReport');
const candidatesLookingForJobReport = require('./reportingModules/candidatesLookingForJobReport');
const candidatesPlacedReport = require('./reportingModules/candidatesPlacedReport');
const candidatesRejectedReport = require('./reportingModules/candidatesRejectedReport');
const coordinatorsByProfessionsReport = require('./reportingModules/coordinatorsByProfessionsReport');

const getReport = function(reportName){
	return new Promise((resolve, reject) => {
	if(reportName == "totalCandidatesReport"){
		console.log("Now checking reportName");
		totalCandidatesReport.candidateCount('candidate').then((successResult) => {
				console.log("The number of candidates are : ",successResult);
				resolve(successResult);
		},(errResult) => {
            // Log the error for internal use
            logger.error('Internal error occurred');
            return res.status(500).send({ error: 'Internal error occurred, please try later..!'});
    	});	
	}
	if(reportName == "coordinatorsByProfessionsReport"){
		console.log("checking report name as coordinatorsByProfessionsReport");
		coordinatorsByProfessionsReport.countCoordinatorsByProfession().then((successResult) => {
			resolve(successResult);
		},(errResult) => {
			logger.error('Internal error occurred');
            return res.status(500).send({ error: 'Internal error occurred, please try later..!'});
		});
	}
	if(reportName == "candidatesPlacedReport"){
		console.log("checking report name as candidatesPlacedReport");
		candidatesPlacedReport.countOfCandidatesPlaced().then((successResult) => {
			console.log('Number of Candidates placed are ', successResult);
			resolve(successResult);
		},(errResult) => {
			logger.error('Internal error occurred');
            return res.status(500).send({ error: 'Internal error occurred, please try later..!'});
		});
	}
	if(reportName == "candidatesInProgressReport"){
		console.log("checking report name as candidatesInProgressReport");
		candidatesInProgressReport.countOfCandidatesInProgressPlacement().then((successResult) => {
			console.log('Number of Candidates in progress are ', successResult);
			resolve(successResult);
		},(errResult) => {
			logger.error('Internal error occurred');
            return res.status(500).send({ error: 'Internal error occurred, please try later..!'});
		});
	}
	if(reportName == "candidatesRejectedReport"){
		console.log("checking report name as candidatesRejectedReport");
		candidatesRejectedReport.countOfCandidatesRejected().then((successResult) => {
			console.log('Number of Candidates rejected are ', successResult);
			resolve(successResult);
		},(errResult) => {
			logger.error('Internal error occurred');
            return res.status(500).send({ error: 'Internal error occurred, please try later..!'});
		});
	}
	if(reportName == "candidatesLookingForJobReport"){
		console.log("checking report name as candidatesLookingForJobReport");
		candidatesLookingForJobReport.countOfCandidatesLookingForJob().then((successResult) => {
			console.log('Number of Candidates Looking For Job are ', successResult);
			resolve(successResult);
		},(errResult) => {
			logger.error('Internal error occurred');
            return res.status(500).send({ error: 'Internal error occurred, please try later..!'});
		});
	}
	if(reportName == "candidatesForFollowUpReport"){
		console.log("checking report name as candidatesForFollowUpReport");
		candidatesForFollowUpReport.countOfCandidatesForFollowUp().then((successResult) => {
			console.log('Number of Candidates for Follow Up are ', successResult);
			resolve(successResult);
		},(errResult) => {
			logger.error('Internal error occurred');
            return res.status(500).send({ error: 'Internal error occurred, please try later..!'});
		});
	}
});
}

module.exports = {
	getReport:getReport
}
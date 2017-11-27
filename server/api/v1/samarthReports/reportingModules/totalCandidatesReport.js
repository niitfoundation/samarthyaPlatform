const userModel = require('../../users/users.entity');
const logger = require('../../../../../applogger');

const candidateCount = function(role){
	console.log("Inside candidate count");
	return new Promise((resolve, reject) => {
	userModel.count({role: role},function(err,result){
		if (err) {
			logger.error("Some error occured");
			reject(err);
        } 
        else{
           	console.log("Successfully got the result");
            resolve(result);
        }
	});
});
}

module.exports = {
	candidateCount:candidateCount
};
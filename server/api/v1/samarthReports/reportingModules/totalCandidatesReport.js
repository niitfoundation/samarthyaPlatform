const userModel = require('../../users/users.entity');
const logger = require('../../../../../applogger');

const candidateCount = function(role,callback){
	userModel.count({role: role},function(err,count){
		if (err) {
			logger.error("Some error occured");
			callback(null, err);
        } 
        else{
           	console.log("Successfully got the result");
            callback(null, count);
        }
	});
}

module.exports = {
	candidateCount:candidateCount
};
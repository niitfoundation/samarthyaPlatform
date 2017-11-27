const router = require('express').Router();
const samarthReportsCtrl = require('./samarthReports.controller');
const logger = require('./../../../../applogger');

router.get('/', function(req,res){
	let reportName = "candidatesForFollowUpReport";
	try{
		if(!reportName){
			logger.error('Invalid inputs passed');
            throw new Error('Invalid inputs passed...!');
		}
		samarthReportsCtrl.getReport(reportName).then((successResult)=>{
			return res.status(201).send({ data: successResult});
	},(errResult) => {
            // Log the error for internal use
            logger.error('Internal error occurred');
            return res.status(500).send({ error: 'Internal error occurred, please try later..!'});
    	});
	}catch (err) {
        // Log the Error for internal use
        logger.fatal('Exception occurred' + err);
        res.send({ error: 'Failed to complete successfully, please check the request and try again..!'});
        return;
    }
});

module.exports = router;
const router = require('express').Router();
const samarthReportsCtrl = require('./samarthReports.controller');
const logger = require('./../../../../applogger');

router.get('/', function(req,res){
    let professionArray = [ "bpo", "retail", "testing", "logistics", "front end developer" ];
    
	try{
		if(!professionArray){
			logger.error('Invalid inputs passed');
            throw new Error('Invalid inputs passed...!');
		}
		samarthReportsCtrl.resultArray(professionArray, function(err,results){
            if(err){
                logger.error('Internal Error Occurred');
                return res.status(500).send({ error: 'Internal error occurred, please try later..!'});
            }
            else{
                return res.status(201).send(results);
            }
        })
	} catch (err) {
        // Log the Error for internal use
        logger.fatal('Exception occurred' + err);
        res.send({ error: 'Failed to complete successfully, please check the request and try again..!'});
        return;
    }
});

module.exports = router;
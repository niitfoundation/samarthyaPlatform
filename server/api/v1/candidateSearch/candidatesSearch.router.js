const router = require('express').Router();
const logger = require('./../../../../applogger');
const candidateCtrl = require('./candidatesSearch.controller');

// get candidates details
router.get('/', function(req, res) {
    // let pageNo = req.query.page;
    let candidateData = req.query.intent || req.params;
    try {
        if (!candidateData) {
            throw new Error('Invalid inputs passed...!');
        }
        candidateCtrl.getCandidates(candidateData, 1, 1).then((successResult) => {
            return res.status(201).send({result:successResult,authToken:req.authToken});
        }, (errResult) => {
            // Log the error for internal use
            return res.status(500).send({ error: 'Internal error occurred, please try later..!',"authToken": req.authToken });
        });
    } catch (err) {
        // Log the Error for internal use
        res.send({ error: 'Failed to complete successfully, please check the request and try again..!',"authToken": req.authToken });
        return;
    }
});


module.exports = router;
const router = require('express').Router();
const logger = require('./../../../../applogger');
const candidateCtrl = require('./candidatesSearch.controller');


/*
 * Actual URI will be HTTP Get /candidates/
 */

// get candidates details
router.get('/', function(req, res) {
    // let pageNo = req.query.page;
    let candidateData = req.query.intent || req.params;
    console.log(candidateData.toLowerCase());
    try {
        if (!candidateData) {
            throw new Error('Invalid inputs passed...!');
        }
        candidateCtrl.getCandidates(candidateData, 1, 1).then((successResult) => {
            return res.status(201).send(successResult);
        }, (errResult) => {
            // Log the error for internal use
            return res.status(500).send({ error: 'Internal error occurred, please try later..!' });
        });
    } catch (err) {
        // Log the Error for internal use
        res.send({ error: 'Failed to complete successfully, please check the request and try again..!' });
        return;
    }
});


module.exports = router;
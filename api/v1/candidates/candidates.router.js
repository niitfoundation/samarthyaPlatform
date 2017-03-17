const router = require('express').Router();
const candidateData = require('./candidates.controller');
const logger = require('./../../../logs/logger');
const candidateCtrl = require('./candidates.controller');
/*
 * Actual URI will be HTTP POST /candidates/
 */
// get candidates details
router.get('/', function(req, res) {
    let candidateData = req.body;
    try {
        if (!candidateData) {
            throw new Error('Invalid inputs passed...!');
            return;
        }

        candidateCtrl.getCandidateDetails(candidateData).then((successResult) => {
            return res.status(201).send(successResult);
        }, (errResult) => {
            // Log the error for internal use
            return res.status(500).send({ error: 'Internal error occurred, please try later..!' });
        });
    } catch (err) {
        // Log the Error for internal use
        return res.send({ error: 'Failed to complete successfully, please check the request and try again..!' });
    }
});

// add candidates details
router.post('/', function(req, res) {
    let candidateData = req.body;
    logger.debug('Get object and store into candidateData');
    try {
        if (!candidateData) {
            logger.error('candidateData not found');
            throw new Error('Invalid inputs passed...!');
            return;
        }
        candidateData.registerNewCandidate(candidateData).then((successResult) => {
            logger.info('Get successResult successfully and return back');
            return res.status(201).send(successResult);
        }, (errResult) => {
            // Log the error for internal use
            return res.status(500).send({ error: 'Internal error occurred, please try later..!' });
        });
    } catch (err) {
        // Log the Error for internal use
        return res.send({ error: 'Failed to complete successfully, please check the request and try again..!' });
    }
});
// edit candidates details
router.patch('/', function(req, res) {
    let candidateData = req.body;
    try {
        if (!candidateData) {
            throw new Error('Invalid inputs passed...!');
            return;
        }

        candidateCtrl.editCandidatesDetails(candidateData).then((successResult) => {
            return res.status(201).send(successResult);
        }, (errResult) => {
            // Log the error for internal use
            return res.status(500).send({ error: 'Internal error occurred, please try later..!' });
        });
    } catch (err) {
        // Log the Error for internal use
        return res.send({ error: 'Failed to complete successfully, please check the request and try again..!' });
    }
});
// delete candidates details
router.delete('/', function(req, res) {
    let candidateData = req.body;
    try {
        if (!candidateData) {
            throw new Error('Invalid inputs passed...!');
            return;
        }

        candidateCtrl.deleteCandidates(candidateData).then((successResult) => {
            return res.status(201).send(successResult);
        }, (errResult) => {
            // Log the error for internal use
            logger.error('Internal error occurred');
            return res.status(500).send({ error: 'Internal error occurred, please try later..!' });
        });
    } catch (err) {
        // Log the Error for internal use
        logger.fatal('Exception occurred' + err);
        return res.send({ error: 'Failed to complete successfully, please check the request and try again..!' });
    }
});

module.exports = router;

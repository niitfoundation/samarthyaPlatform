const router = require('express').Router();
const logger = require('./../../../../applogger');
const candidateCtrl = require('./candidates.controller');
const UserCtrl = require('./../users/users.controller');

/*
 * Actual URI will be HTTP POST /candidates/
 */

// get candidates details
router.get('/', function (req, res) {
    let candidateData = req.query || req.params;
    try {
        if (!candidateData) {
            throw new Error('Invalid inputs passed...!');
        }
        candidateCtrl.getCandidates(candidateData).then((successResult) => {
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

// add candidates details
router.post('/', function (req, res) {
    let candidateData = req.body;
    logger.debug('Get object and store into candidateData');
    try {
        if (!candidateData) {
            logger.error('candidateData not found');
            throw new Error('Invalid inputs passed...!');
        }
        UserCtrl.registerNewUser(candidateData).then((successResult) => {
            logger.info('Get successResult successfully and return back');
            return res.status(201).send({ success: true, data: successResult, msg: 'Added successfully' });
        }, (errResult) => {
            // Log the error for internal use
            logger.error('Internal error occurred');
            return res.send({ success: false, msg: 'Internal error occurred, please try later..!' });
        });
    } catch (err) {
        // Log the Error for internal use
        logger.fatal('Exception occurred');
        res.send({ error: 'Failed to complete successfully, please check the request and try again..!' });
        return;
    }
});
// edit candidates details
router.patch('/', function (req, res) {
    let candidateData = req.body;
    try {
        if (!candidateData) {
            throw new Error('Invalid inputs passed...!');
        }

        candidateCtrl.editCandidatesDetails(candidateData).then((successResult) => {
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
// // delete candidates details
router.delete('/', function (req, res) {
    let candidateData = req.body;
    try {
        if (!candidateData) {
            throw new Error('Invalid inputs passed...!');
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
        res.send({ error: 'Failed to complete successfully, please check the request and try again..!' });
        return;
    }
});

module.exports = router;

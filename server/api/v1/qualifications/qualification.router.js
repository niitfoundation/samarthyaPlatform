const router = require('express').Router();
const qualificationCtrl = require('./qualification.controller');
const logger = require('../../../../applogger');

// GET route '/qualifications'
router.get('/', function (req, res) {
    try {
        let param = req.query;
        qualificationCtrl.findQualifications(param.name, param.limit)
            .then((successResult) => {
                return res.status(201).send(successResult);
            }, (errResult) => {
                // Log the error for internal use
                logger.error(errResult);
                return res.status(500).send({ error: 'Internal error occurred, please try later..!' });
            });
    } catch (err) {
        // Log the Error for internal use
        logger.fatal('Exception occurred' + err);
        res.status(500).send({ error: 'Failed to complete successfully, please check the request and try again..!' });
        return;
    }
});

// POST route '/qualifications'
router.post('/', function (req, res) {
    try {
        let param = req.body;
        qualificationCtrl.addQualification(param.name, param.limit)
            .then((successResult) => {
                return res.status(201).send(successResult);
            }, (errResult) => {
                // Log the error for internal use
                logger.error(errResult);
                return res.status(500).send({ error: 'Internal error occurred, please try later..!' });
            });
    } catch (err) {
        // Log the Error for internal use
        logger.fatal('Exception occurred' + err);
        res.status(500).send({ error: 'Failed to complete successfully, please check the request and try again..!' });
        return;
    }
});

module.exports = router;

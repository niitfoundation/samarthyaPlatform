const router = require('express').Router();
const centreCtrl = require('./centres.controller');
const logger = require('../../../../applogger');

// GET route '/centres'
router.get('/', function (req, res) {
    try {
        let param = req.query;
        centreCtrl.findCentres(param.name, param.limit)
            .then((successResult) => {
                return res.status(201).send(successResult);
            }, (errResult) => {
                logger.error(errResult);
                return res.status(500).send({ error: 'Internal error occurred, please try later..!' });
            });
    } catch (err) {
        logger.fatal('Exception occurred' + err);
        res.status(500).send({ error: 'Failed to complete successfully, please check the request and try again..!' });
        return;
    }
});

// POST route '/centres'
router.post('/', function (req, res) {
    try {
        centreCtrl.addCentre(req.body.name)
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

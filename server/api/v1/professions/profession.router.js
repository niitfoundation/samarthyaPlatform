const router = require('express').Router();
const professionCtrl = require('./profession.controller');
const logger = require('../../../../applogger');

// GET route '/professions'
router.get('/', function (req, res) {
    try {
        let param = req.query;

        professionCtrl.findProfessions(param.name, param.limit)
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

// POST route '/professions'
router.post('/', function (req, res) {
    try {
        let param = req.body;

        professionCtrl.addProfession(param.name)
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

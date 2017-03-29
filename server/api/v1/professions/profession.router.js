const router = require('express').Router();
const professionCtrl = require('./profession.controller');
const logger = require('../../../../applogger');

router.get('/', function (req, res) {
    try {
        let param = req.query;

        professionCtrl.findProfessions(param.name, param.limit)
            .then((successResult) => {
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

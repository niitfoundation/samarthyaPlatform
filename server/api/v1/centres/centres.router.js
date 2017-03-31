const router = require('express').Router();
const centreCtrl = require('./centres.controller');
const logger = require('../../../../applogger');
const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: false }));
const compression = require('compression');
    router.use(compression());

router.get('/', function (req, res) {
    try {
        let param = req.query;
        centreCtrl.findCentres(param.name, param.limit)
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

router.post('/add', function (req, res) {
    try {
        console.log(req.body);
        centreCtrl.addCentre(req.body.name)
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

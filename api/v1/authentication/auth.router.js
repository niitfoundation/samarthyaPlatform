const router = require('express').Router();
const authCtrl = require('./auth.controller');
const logger = require('./../../../logs/logger');
/*
 *
 */
router.post('/', function(req, res, next) { 
    let authData = req.body;
    logger.debug('Get object and store into authData');
    try {
        if (!authData) {
            logger.error('authdata is null');
            throw new Error("Invalid inputs passed...!");
            return;
        }
        authCtrl.validateUser(authData).then((successResult) => {
            logger.info('Get successResult successfully and return back');
            return res.status(201).send(successResult);
        }, (errResult) => {
            logger.error('Internal error occurred');
            return res.status(500).send({ error: 'Internal error occurred, please try later..!' });
        });
    } catch (err) {
        //Log the Error for internal use
        logger.fatal('Exception occur'+err);
        return res.send({ error: 'Failed to complete successfully, please check the request and try again..!' });
    }
});

router.post('/passwordReset', function(req, res, next) { 
    let resetPassword = req.body;
    logger.debug('Get object and store into resetPassword');
    try {
        if (!resetPassword) {
            logger.error('resetPassword is null');
            throw new Error("Invalid inputs passed...!");
            return;
        }
        authCtrl.resetPassword(resetPassword).then((successResult) => {
                logger.info('Get successResult successfully and return back');
                return res.status(201).send(successResult);
            }),
            (err) => {
                logger.error('Internal error occurred');
                return res.status(500).send({ error: 'Internal error occurred, please try later..!' });
            }

    } catch (err) {
        logger.fatal('Exception occur'+err);
        //Log the Error for internal use
        return res.send({ error: 'Failed to complete successfully, please check the request and try again..!' });
    }
});

router.use(function(req, res, next) {
    // check header or url parameters or post parameters for token
    logger.debug('Authorization begin by getting token from http request')
    const token = req.body.token || req.query.token || req.headers.authorization;

    // decode token
    if (token) {
        let successResult = authCtrl.verifyToken(token);
        logger.info('Get token and verify it');
        if (successResult.result) {
            logger.info('Token verified');
            req.decoded = successResult.decoded;
            next();

        } else {
            logger.error('Internal error occurred');
            return res.status(500).send({ error: 'Internal error occurred, please try later..!', message: 'UnAuthorised User' });
        }
    } else {
        // if there is no token
        // return an error
        logger.info('Token not provided');
        return res.status(403).send({
            message: 'No token provided.'
        });

    }
});

module.exports = router;
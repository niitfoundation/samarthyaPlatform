const router = require('express').Router();
const usrCtrl = require('./users.controller');
const logger = require('./../../../logs/logger');
/*
 * Actual URI will be HTTP POST /users/
 */
router.post('/', function(req, res) {
    let userData = req.body;
    logger.debug('Get object and store into userData');
    try {
        if (!userData) {
            logger.error('userData not found');
            throw new Error('Invalid inputs passed...!');
            return;
        }

        usrCtrl.registerNewUser(userData).then((successResult) => {
            logger.info('Get successResult successfully and return back');
            return res.status(201).send(successResult);
        }, (errResult) => {
            // Log the error for internal use
            logger.error('Internal error occurred');
            return res.status(500).send({ error: 'Internal error occurred, please try later..!', message: 'user Already Exist' });
        });
    } catch (err) {
        // Log the Error for internal use
        logger.fatal('Exception occurred' + err);
            throw new Error('Invalid inputs passed...!');
        }
});

module.exports = router;

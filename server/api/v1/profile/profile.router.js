const router = require('express').Router();
const prflCtrl = require('./profile.controller');
const logger = require('./../../../../applogger');

/*
 * Actual URI will be HTTP POST /profiles/
 */

// get profile full data
router.get('/', function(req, res) {
    let profileData = req.query;
    try {
        if (!profileData) {
            logger.error('Invalid inputs passed');
            throw new Error('Invalid inputs passed...!');
        }
        prflCtrl.getProfile(profileData).then((successResult) => {
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

// api to create new profile
router.post('/', function(req, res) {
    let profileData = req.body;
    logger.debug('Get object and store into profileData');
    try {
        if (!profileData) {
            logger.error('profileData not found');
            throw new Error('Invalid inputs passed...!');
        }
        prflCtrl.createProfile(profileData).then((successResult) => {
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


// api to edit profile data
router.patch('/', function(req, res) {
    let profileData = req.body.data;
    let username = req.body.username;
    let sectionName = req.body.sectionName;
    try {
        if (!profileData) {
            logger.error('Invalid inputs passed');
            throw new Error('Invalid inputs passed...!');
        }
        prflCtrl.editProfile(profileData, username, sectionName).then((successResult) => {
            return res.status(201).send(successResult);
        }, (errResult) => {
            // Log the error for internal use
            logger.error('Internal error occurred');
            return res.status(500).send({success:false,msg:"Internal error occurred, please try later", error: 'Internal error occurred, please try later..!' });
        });

    } catch (err) {
        // Log the Error for internal use
        logger.fatal('Exception occurred' + err);
        res.send({ success:false,error: 'Failed to complete successfully, please check the request and try again..!' });
        return;
    }
});

// api to delete  profile
router.delete('/', function(req, res) {
    let profileData = req.body;
    try {
        if (!profileData) {
            logger.error('Invalid inputs passed');
            throw new Error('Invalid inputs passed...!');
        }
        prflCtrl.deleteProfile(profileData).then((successResult) => {
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
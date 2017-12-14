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
            return res.status(201).send({ data: successResult, "authToken": req.authToken });
        }, (errResult) => {
            // Log the error for internal use
            logger.error('Internal error occurred');
            return res.status(500).send({ error: 'Internal error occurred, please try later..!', "authToken": req.authToken });
        });
    } catch (err) {
        // Log the Error for internal use
        logger.fatal('Exception occurred' + err);
        res.send({ error: 'Failed to complete successfully, please check the request and try again..!', "authToken": req.authToken });
        return;
    }
});

// to find coordinators belonging to a particular profession

// router.get('/findCoordinator', function(req, res) {
//     // let profileData = req.query;
//     let userNameArray = ['shakthivvbhss@gmail.com','junk@unjunk.com'];
//     let professionArray = ['bpo','BPO','retail','Testing','testing'];
//     let page = 1;
//     let limit = 5;

//     try {
//         // if (!profileData) {
//         //     logger.error('Invalid inputs passed');
//         //     throw new Error('Invalid inputs passed...!');
//         // }
//         prflCtrl.findProfiles(userNameArray, {professionArray, page, limit}).then((successResult) => {
//             return res.status(201).send({ data: successResult, "authToken": req.authToken });
//         }, (errResult) => {
//             // Log the error for internal use
//             logger.error('Internal error occurred');
//             return res.status(500).send({ error: 'Internal error occurred, please try later..!', "authToken": req.authToken });
//         });
//     } catch (err) {
//         // Log the Error for internal use
//         logger.fatal('Exception occurred' + err);
//         res.send({ error: 'Failed to complete successfully, please check the request and try again..!', "authToken": req.authToken });
//         return;
//     }
// });

// api to create new profile
router.post('/', function(req, res) {
    let profileData = req.body;
    logger.debug('Get object and store into profileData');
    try {
        if (!profileData) {
            logger.error('profileData not found');
            throw new Error('Invalid inputs passed...!');
        }
        prflCtrl.createProfile(profileData.username, profileData).then((successResult) => {
            return res.status(201).send({ msg: successResult, 'authToken': req.authToken });
        }, (errResult) => {
            // Log the error for internal use
            logger.error('Internal error occurred');
            return res.status(500).send({ error: 'Internal error occurred, please try later..!', "authToken": req.authToken });
        });
    } catch (err) {
        // Log the Error for internal use
        logger.fatal('Exception occurred' + err);
        res.send({ error: 'Failed to complete successfully, please check the request and try again..!', "authToken": req.authToken });
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
            return res.status(201).send({ data: successResult, success: true, "authToken": req.authToken });
        }, (errResult) => {
            // Log the error for internal use
            logger.error('Internal error occurred');
            return res.status(500).send({ success: false, msg: "Internal error occurred, please try later", error: 'Internal error occurred, please try later..!', "authToken": req.authToken });
        });

    } catch (err) {
        // Log the Error for internal use
        logger.fatal('Exception occurred' + err);
        res.send({ success: false, error: 'Failed to complete successfully, please check the request and try again..!', "authToken": req.authToken });
        return;
    }
});

router.patch('/profilePic', function(req, res) {
    let pictureUrl = req.body.data;
    let username = req.body.username;
    try {
        if (!pictureUrl) {
            logger.error('Invalid inputs passed');
            throw new Error('Invalid inputs passed...!');
        }
        prflCtrl.editProfilePic(pictureUrl, username).then((successResult) => {
            return res.status(201).send({ data: successResult, success: true, "authToken": req.authToken });
        }, (errResult) => {
            // Log the error for internal use
            logger.error('Internal error occurred');
            return res.status(500).send({ success: false, msg: "Internal error occurred, please try later", error: 'Internal error occurred, please try later..!', "authToken": req.authToken });
        });

    } catch (err) {
        // Log the Error for internal use
        logger.fatal('Exception occurred' + err);
        res.send({ success: false, error: 'Failed to complete successfully, please check the request and try again..!', "authToken": req.authToken });
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
            return res.status(201).send({ result: successResult, "authToken": req.authToken });
        }, (errResult) => {
            // Log the error for internal use
            logger.error('Internal error occurred');
            return res.status(500).send({ error: 'Internal error occurred, please try later..!', "authToken": req.authToken });
        });
    } catch (err) {
        // Log the Error for internal use
        logger.fatal('Exception occurred' + err);
        res.send({ error: 'Failed to complete successfully, please check the request and try again..!', "authToken": req.authToken });
        return;
    }
});

module.exports = router;
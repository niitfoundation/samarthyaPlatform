const router = require('express').Router();
const prflCtrl = require('./profile.controller');

/*
 * Actual URI will be HTTP POST /profiles/
 */

//view profile 
router.get('/', function(req, res) {
    let profileData = req.query;
    try {
        if (!profileData) {
            throw new Error("Invalid inputs passed...!");
            return;
        }
        prflCtrl.viewProfile(profileData).then((successResult) => {
            return res.status(201).send(successResult);
        }, (errResult) => {
            //Log the error for internal use
            return res.status(500).send({ error: 'Internal error occurred, please try later..!' });
        });
    } catch (err) {
        //Log the Error for internal use
        return res.send({ error: 'Failed to complete successfully, please check the request and try again..!' });
    }
});

//api to create new profile 
router.post('/', function(req, res) {
    let profileData = req.body;
    try {
        if (!profileData) {
            throw new Error("Invalid inputs passed...!");
            return;
        }
        prflCtrl.createProfile(profileData).then((successResult) => {
            return res.status(201).send(successResult);
        }, (errResult) => {
            //Log the error for internal use
            return res.status(500).send({ error: 'Internal error occurred, please try later..!' });
        });
    } catch (err) {
        //Log the Error for internal use
        return res.send({ error: 'Failed to complete successfully, please check the request and try again..!' });
    }
});


//api to edit  profile 
router.patch('/', function(req, res) {
    let profileData = req.body;
    try {
        if (!profileData) {
            throw new Error("Invalid inputs passed...!");
            return;
        }
        prflCtrl.editProfile(profileData).then((successResult) => {
            return res.status(201).send(successResult);
        }, (errResult) => {
            //Log the error for internal use
            return res.status(500).send({ error: 'Internal error occurred, please try later..!' });
        });
    } catch (err) {
        //Log the Error for internal use
        return res.send({ error: 'Failed to complete successfully, please check the request and try again..!' });
    }
});

//api to delete  profile 
router.delete('/', function(req, res) {
    let profileData = req.body;
    try {
        if (!profileData) {
            throw new Error("Invalid inputs passed...!");
            return;
        }
        prflCtrl.deleteProfile(profileData).then((successResult) => {
            return res.status(201).send(successResult);
        }, (errResult) => {
            //Log the error for internal use
            return res.status(500).send({ error: 'Internal error occurred, please try later..!' });
        });
    } catch (err) {
        //Log the Error for internal use
        return res.send({ error: 'Failed to complete successfully, please check the request and try again..!' });
    }
});



module.exports = router;
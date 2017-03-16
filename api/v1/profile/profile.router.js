const router = require('express').Router();
const prflCtrl = require('./profile.controller');

/*
 * Actual URI will be HTTP POST /users/
 */
router.post('/', function(req, res) {
    let profileData = req.body;
    try {
        if (!profileData) {
            throw new Error("Invalid inputs passed...!");
            return;
        }

        prflCtrl.registerNewUser(userData).then((successResult) => {
            return res.status(201).send(successResult);
        }, (errResult) => {
            //Log the error for internal use
            return res.status(500).send({ error: 'Internal error occurred, please try later..!' });
        });
    } catch (err) {
        console.log(err);
        //Log the Error for internal use
        return res.send({ error: 'Failed to complete successfully, please check the request and try again..!' });
    }
});

module.exports = router;
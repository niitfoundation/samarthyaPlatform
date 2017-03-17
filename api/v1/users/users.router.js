const router = require('express').Router();
const usrCtrl = require('./users.controller');

/*
 * Actual URI will be HTTP POST /users/
 */
router.post('/', function(req, res) {
    let userData = req.body;
    try {
        if (!userData) {
            throw new Error('Invalid inputs passed...!');
        }

        usrCtrl.registerNewUser(userData).then((successResult) => {
            return res.status(201).send(successResult);
        }, (errResult) => {
            // Log the error for internal use
            return res.status(500).send({ error: 'Internal error occurred, please try later..!', message: 'user Already Exist' });
        });
    } catch (err) {
        // Log the Error for internal use
        return res.send({ error: 'Failed to complete successfully, please check the request and try again..!' });
    }
});

module.exports = router;
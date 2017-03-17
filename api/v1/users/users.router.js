const router = require('express').Router();
const usrCtrl = require('./users.controller');

/*
 * Actual URI will be HTTP POST /users/
 */
router.post('/', function(req, res) {
    let userData = req.body;
    try {
        if (!userData) {
            throw new Error("Invalid inputs passed...!");
            return;
        }

        usrCtrl.registerNewUser(userData).then((successResult) => {
            console.log(successResult);
            return res.status(201).send({ success:true, message: "user Register successfully" });
        }, (errResult) => {
            //Log the error for internal use
            return res.status(500).send({ success:false,error: 'Internal error occurred, please try later..!', message: "user Already Exist" });
        });
    } catch (err) {
        console.log(err);
        //Log the Error for internal use
        return res.send({success:false, error: 'Failed to complete successfully, please check the request and try again..!' ,message: "Technical Error..Try again later"});
    }
});

module.exports = router;
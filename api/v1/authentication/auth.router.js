const router = require('express').Router();
const authCtrl = require('./auth.controller');
const emailCtrl = require('./../emailUtil/emailUtil.controller');

/*
 * Authenticate the user 
 */
router.post('/', function(req, res, next) { 
    let authData = req.body;
    try {
        if (!authData) {
            throw new Error("Invalid inputs passed...!");
            return;
        }
        authCtrl.authenticateUser(authData).then((successResult) => {
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


/*
 *if user is not exist send the verification mail
 */
router.post('/registerEmail', function(req, res) {
    try {
        let param = req.body;
        //check the user is available or not
        authCtrl.checkUser(param.username).then((data) => {
                if (data.length == 0) {
                    //if user is does not exit send mail
                    param.host = req.get('host');
                    emailCtrl.sendEmail(param).then((successResult) => {
                            return res.status(201).send({ message: "sent successfully" })
                        },
                        (err) => {
                            return res.status(500).send({
                                error: 'Internal error occurred, please try later..!'
                            });
                        });
                    // return res.status(201).send(data);
                } else {
                    return res.status(201).send({
                        message: "user already exist"
                    })
                }
            }),
            err => {
                return res.status(500).send({
                    error: 'Internal error occurred, please try later..!'
                })
            }
    } catch (error) {
        return res.send({ error: 'Failed to complete successfully, please check the request and try again..!' });
    }
});


router.post('/verifyEmail', function(req, res) {
    try {
        let objVerify = req.body;
        authCtrl.verifyEmailLink(objVerify).then((successResult) => {

                return res.status(201).send(successResult);;
            }),
            err => {
                return res.status(500).send({
                    error: 'Internal error occurred, please try later..!'
                })
            }
    } catch (error) {
        return res.send({ error: 'Failed to complete successfully, please check the request and try again..!' });
    }
});


router.post('/resetPasswordEmail', function(req, res) {
    try {
        let param = req.body;
        //check the user is available or not
        authCtrl.checkUser(param.username).then((data) => {
                if (data.length == 0) {
                    //if user is does not exit send mail
                    return res.status(201).send({
                        message: "user does not exist"
                    })
                } else {
                    param.host = req.get('host');
                    emailCtrl.sendEmail(param).then((successResult) => {
                            return res.status(201).send({ message: "sent successfully" })
                        },
                        (err) => {
                            console.log(err);
                            return res.status(500).send({
                                error: 'Internal error occurred, please try later..!'
                            });
                        });
                }
            }),
            err => {
                console.log(err);
                return res.status(500).send({
                    error: 'Internal error occurred, please try later..!'
                })
            }

    } catch (error) {
        return res.send({ error: 'Failed to complete successfully, please check the request and try again..!' });
    }
});



router.post('/resetPassword', function(req, res, next) { 
    let resetPassword = req.body;
    try {
        if (!resetPassword) {
            throw new Error("Invalid inputs passed...!");
            return;
        }
        authCtrl.resetPassword(resetPassword).then((successResult) => {
                return res.status(201).send(successResult);
            }),
            (err) => {
                return res.status(500).send({ error: 'Internal error occurred, please try later..!' });
            }

    } catch (err) {
        console.log(err);
        //Log the Error for internal use
        return res.send({ error: 'Failed to complete successfully, please check the request and try again..!' });
    }
});

//middleware to verify user token for authentication and pass the decoded token to other request
router.use(function(req, res, next) {
    // check header or url parameters or post parameters for token
    const token = req.body.token || req.query.token || req.headers.authorization;
    // decode token
    if (token) {
        let successResult = authCtrl.verifyToken(token);
        if (successResult.result) {
            req.decoded = successResult.decoded;
            next();

        } else {
            return res.status(500).send({ error: 'Internal error occurred, please try later..!', message: 'UnAuthorised User' });
        }
    } else {
        // if there is no token
        // return an error
        return res.status(403).send({
            message: 'No token provided.'
        });

    }
});

module.exports = router;
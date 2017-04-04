const router = require('express').Router();
const authCtrl = require('./auth.controller');
const emailCtrl = require('./../emailUtil/emailUtil.controller');
const logger = require('./../../../../applogger');

/*
 * Authenticate the user
 */
router.post('/', function (req, res, next) {
    let authData = req.body;
    logger.debug(authData);
    logger.debug('Get object and store into authData');
    try {
        if (!authData) {
            logger.error('authdata is null');
            throw new Error('Invalid inputs passed...!');
        }
        authCtrl.authenticateUser(authData).then((successResult) => {
            logger.info('Get successResult successfully and return back');
            return res.status(201).send(successResult);
        }, (errResult) => {
            logger.error('Internal error occurred');
            return res.status(500).send({ error: 'Internal error occurred, please try later..!', result: errResult.msg });
        });
    } catch (err) {
        // Log the Error for internal use
        logger.fatal('Exception occur' + err);
        res.send({ error: 'Failed to complete successfully, please check the request and try again..!' });
        return;
    }
});

/*
 *verify the user whether user is exist or not and returns msg
 */
router.post('/verify-user', function (req, res) {
    try {
        logger.info('verifying user');
        let param = req.body;
        // check the user is available or not
        authCtrl.checkUser(param.username).then((data) => {
            if (!data) {
                logger.debug('user not exits');
                // if user is does not exit send mail
                return res.status(201).send({
                    msg: 'user not exist'
                });
            } else {
                logger.debug('user exits');
                return res.status(201).send({
                    msg: 'user already exist'
                });
            }
        },
            (err) => {
                return res.status(500).send({
                    error: 'Internal error occurred, please try later..!',
                    msg: 'User not exist'
                });
            });
    } catch (error) {
        res.send({ error: 'Failed to complete successfully, please check the request and try again..!' });
        return;
    }
});


/*
 *if user is not exist send the verification mail
 */
router.post('/register-email', function (req, res) {
    try {
        let param = req.body;
        // check the user is available or not
        authCtrl.checkUser(param.username).then((data) => {
            if (!data) {
                // if user is does not exit send mail
                param.host = req.get('host');
                emailCtrl.sendEmail(param).then((successResult) => {
                    return res.status(201).send(successResult);
                },
                    (err) => {
                        return res.status(500).send({
                            error: 'Internal error occurred, please try later..!'
                        });
                    });
            } else {
                return res.status(201).send({
                    msg: 'user already exist',success:false
                });
            }
        },
            (err) => {
                return res.status(500).send({
                    error: 'Internal error occurred, please try later..!',
                    msg: 'User Doesn\'t exist'
                });
            });
    } catch (error) {
        res.send({ error: 'Failed to complete successfully, please check the request and try again..!' });
        return;
    }
});

/*
 *verify the email token whether it is expired or not and return the status
 */
router.post('/verify-email', function (req, res) {
    try {
        let objVerify = req.body;
        authCtrl.verifyEmailLink(objVerify).then((successResult) => {
            return res.status(201).send(successResult);
        },
            err => {
                return res.status(403).send({
                    msg: 'Session Expired'
                });
            });
    } catch (error) {
        res.send({ error: 'Failed to complete successfully, please check the request and try again..!' });
        return;
    }
});

/*
 *If user is exits then only send reset email
 */
router.post('/verify-reset-email', function (req, res) {
    try {
        let param = req.body;
        // check the user is available or not
        authCtrl.checkUser(param.username).then((data) => {
            if (!data) {
                // if user is does not exit send mail
                return res.status(201).send({
                    msg: 'user does not exist'
                });
            }
            param.host = req.get('host');
            emailCtrl.sendEmail(param).then((successResult) => {
                return res.status(201).send(successResult);
            },
                (err) => {
                    return res.status(500).send({
                        error: 'Internal error occurred, please try later..!',
                        msg: 'User doesn\'t exist'
                    });
                });
        },
            err => {
                return res.status(500).send({
                    msg: 'Internal error occurred, please try later..!'
                });
            });
    } catch (error) {
        res.send({ msg: 'Failed to complete successfully, please check the request and try again..!' });
        return;
    }
});

/*
 *reseting the users password requested by the user and returns the status
 */
router.post('/reset-password', function (req, res, next) {
    let resetPassword = req.body;
    logger.debug('Get object and store into resetPassword');
    try {
        if (!resetPassword) {
            logger.error('resetPassword is null');
            throw new Error('Invalid inputs passed...!');
        }
        authCtrl.resetPassword(resetPassword).then((successResult) => {
            logger.info('Get successResult successfully and return back');
            return res.status(201).send(successResult);
        },
            (err) => {
                logger.error('Internal error occurred');
                return res.status(500).send({ error: 'Internal error occurred, please try later..!' });
            });
    } catch (err) {
        logger.fatal('Exception occur' + err);
        // Log the Error for internal use
        res.send({ error: 'Failed to complete successfully, please check the request and try again..!' });
        return;
    }
});

/*
 *middleware to verify user token for authentication and pass the decoded token to other request
 */
router.use(function (req, res, next) {
    try {
        // check header or url parameters or post parameters for token
        logger.debug('Authorization begin by getting token from http request');
        const token = req.body.token || req.headers.authorization;
        // decode token
        if (token) {
            authCtrl.verifyToken(token).then((successResult) => {
                logger.info('Token verified');
                req.decoded = successResult.decoded;
                next();
            }, (errResult) => {
                logger.error('Internal error occurred');
                return res.status(500).send({ error: 'Internal error occurred, please try later..!', message: 'UnAuthorised User' });
            });
        } else {
            // if there is no token
            // return an error
            logger.info('Token not provided');
            return res.status(403).send({
                message: 'No token provided.'
            });
        }
    } catch (error) {
        return error;
    }
});

/*
 *getting the nav bar menus based on the role of user(coordinator,supervisor,admin,candidate) and returns the nav-bar menus
 */
router.get('/nav-menus', function (req, res) {
    let role = req.decoded.role;
    try {
        authCtrl.getMenus(role).then((successResult) => {
            return res.status(201).send({ success: true, data: successResult });
        }, (errResult) => {
            // Log the error for internal use
            return res.status(500).send({ error: 'Internal error occurred, please try later..!' });
        });
    } catch (err) {
        // Log the Error for internal use
        res.send({ error: 'Failed to complete successfully, please check the request and try again..!' });
        return;
    }
});

module.exports = router;
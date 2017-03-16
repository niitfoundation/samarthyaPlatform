const router = require('express').Router();
const authCtrl = require('./auth.controller');
/*
 *
 */
router.post('/', function(req, res, next) { 
    let authData = req.body;
    try {
        if (!authData) {
            throw new Error("Invalid inputs passed...!");
            return;
        }
        authCtrl.validateUser(authData).then((successResult) => {
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

router.post('/passwordReset', function(req, res, next) { 
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
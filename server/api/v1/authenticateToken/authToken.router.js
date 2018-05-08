const router = require('express').Router();
const logger = require('./../../../../applogger');
const authCtrl = require('./authToken.controller');


/*
 *middleware to verify user token for authentication and pass the decoded token to other request
 */
router.use(function(req, res, next) {
    try {
        // check header or url parameters or post parameters for token
        logger.debug('Authorization begin by getting token from http request');
        
        const token = req.body.token || req.headers.authorization || req.query.token || usrtoken;
        // decode token
        if (token) {
            authCtrl.verifyToken(token).then((successResult) => {
                logger.info('Token verified');
                req.decoded = successResult.decoded;
                req.authToken = successResult.authToken;
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
                message: 'No token provided.',
                success: false
            });
        }
    } catch (error) {
        return error;
    }
});

router.post('/', function(req, res, next) {
    return res.status(201).send({ msg: 'Token refreshed', authToken: req.authToken });
})

module.exports = router;
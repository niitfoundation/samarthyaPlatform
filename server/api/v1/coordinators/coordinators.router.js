const router = require('express').Router();
const coordinateCtrl = require('./coordinators.controller');
const logger = require('./../../../../applogger');
const UserCtrl = require('./../users/users.controller')

/*
/*
 * Actual URI will be HTTP POST /users/
 */
router.post('/', function (req, res) {
    let coordinateData = req.body;
    logger.debug('Get object and store into coordinateData');
    try {
        if (!coordinateData) {
            logger.error('coordinateData not found');
            throw new Error('Invalid inputs passed...!');
        }
        UserCtrl.registerNewUser(coordinateData).then((successResult) => {
            logger.info('Get successResult successfully and return back');
            return res.status(201).send(successResult);
        }, (errResult) => {
            // Log the error for internal use
            logger.error('Internal error occurred');
            return res.status(500).send({
                error: 'Internal error occurred, please try later..!'
            });
        });
    } catch (err) {
        // Log the Error for internal use
        logger.fatal('Exception occurred' + err);
        res.send({
            error: 'Failed to complete successfully, please check the request and try again..!'
        });
        return;
    }
});

router.post('/thumbnail-view', function (req, res) {
    let searchIntent = req.query;
    try {

        coordinateCtrl.getUsers(searchIntent).then((successResult) => {
            logger.info('Get successResult successfully and return back');
            return res.status(201).send(successResult);
        }, (errResult) => {
            // Log the error for internal use
            logger.error('Internal error occurred');
            return res.status(500).send({
                error: 'Internal error occurred, please try later..!'
            });
        });
    } catch (err) {
        // Log the Error for internal use
        logger.fatal('Exception occurred' + err);
        res.send({
            error: 'Failed to complete successfully, please check the request and try again..!'
        });
        return;
    }
});

router.get('/', function(req, res) {
    let role = req.query.role;
    let professionArray = req.query.professionArray;
    let page = req.query.page;
    let limit = req.query.limit;
    logger.debug('role'+role+'profession'+professionArray+'page'+page+'limit '+limit);
    coordinateCtrl.getCoordinators(role, professionArray, page, limit, function(err, result) {
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
    });
});


module.exports = router;
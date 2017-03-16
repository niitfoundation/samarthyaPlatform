const router = require('express').Router();
const coordinateCtrl = require('./coordinators.controller');

/*
 * Actual URI will be HTTP POST /users/
 */
router.post('/', function(req, res) {
    let coordinateData = req.body;
    try {
        if (!coordinateData) {
            throw new Error("Invalid inputs passed...!");
            return;
        }

        coordinateCtrl.registerNewCoordinate(coordinateData).then((successResult) => {
            console.log(successResult);
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
const router = require('express').Router();
const candidateData = require('./candidates.controller');

/*
 * Actual URI will be HTTP POST /users/
 */
router.post('/', function(req, res) {
    let candidateData = req.body;
    try {
        if (!candidateData) {
            throw new Error("Invalid inputs passed...!");
            return;
        }

        candidateData.registerNewCandidate(candidateData).then((successResult) => {
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
const resourcesRouter = require('express').Router();
const resourcesCtrl = require('./resources.controller');
const logger = require('./../../../../applogger');

// get the languages
resourcesRouter.get('/languages', function(req, res) {
    try {
        resourcesCtrl.getLanguage().then((successResult) => {
            return res.status(201).send(successResult);
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


module.exports = resourcesRouter;

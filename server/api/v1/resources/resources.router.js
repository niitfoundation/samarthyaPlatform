const resourcesRouter = require('express').Router();
const resourcesCtrl = require('./resources.controller');
const logger = require('./../../../../applogger');

// get the sectionConfig
resourcesRouter.get('/sectionConfig', function (req, res) {
    try {
        resourcesCtrl.getSectionConfig().then((successResult) => {
            return res.status(201).send(successResult);
        }, (errResult) => {
            // Log the error for internal use
            logger.error('Internal error occurred');
            return res.status(500).send({ error: 'Internal error occurred, please try later..!' });
        });
    } catch (err) {
        // Log the Error for internal use
        logger.fatal('Exception occurred' + err);
        res.send({ error: 'Failed to complete successfully, please check the request and try again..!' });
        return;
    }
});

module.exports = resourcesRouter;

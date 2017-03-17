const menuRouter = require('express').Router();
const resourcesCtrl = require('./resources.controller');


// get the languages
menuRouter.get('/languages', function(req, res) {
    try {
        resourcesCtrl.getLanguage().then((successResult) => {
            return res.status(201).send(successResult);
        }, (errResult) => {
            // Log the error for internal use
            return res.status(500).send({ error: 'Internal error occurred, please try later..!' });
        });
    } catch (err) {
        // Log the Error for internal use
        return res.send({ error: 'Failed to complete successfully, please check the request and try again..!' });
    }
});
module.exports = menuRouter;

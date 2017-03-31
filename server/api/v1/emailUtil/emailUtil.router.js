const emailRouter = require('express').Router();
const cors = require('cors');
const emailCtrl = require('./emailUtil.controller');
const logger = require('./../../../../applogger');
const neoCheck = require('./../../../profileAnalyzer/workExperienceSection/workExperience.graphmodel');


emailRouter.use(cors());
emailRouter.get('/send', function(req, res) {
    try {
        let data = neoCheck.createGraphModel();
        res.status(200).send({ error: data });
    } catch (error) {
        logger.fatal('Exception occurred' + error);
        res.send({ error: 'Failed to complete successfully, please check the request and try again..!' });
        return;
    }
});
module.exports = emailRouter;
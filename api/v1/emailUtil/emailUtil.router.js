const emailRouter = require('express').Router();
const cors = require('cors');
const emailCtrl = require('./emailUtil.controller');
const logger = require('./../../../logger/logger');


emailRouter.use(cors());
emailRouter.post('/send', function(req, res) {
    try {
        let jsonobj = req.body;
        jsonobj.host = req.get('host');
        emailCtrl.sendEmail(jsonobj).then((data) => {
                return res.status(201).send({ message: 'sent successfully' });
            },
            (err) => {
                logger.error('Internal error occurred');
                return res.status(500).send({
                    error: 'Internal error occurred, please try later..!'
                });
            });
    } catch (error) {
        logger.fatal('Exception occurred' + error);
        res.send({ error: 'Failed to complete successfully, please check the request and try again..!' });
        return;
    }
});
module.exports = emailRouter;

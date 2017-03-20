const emailRouter = require('express').Router();
const cors = require('cors');
const emailCtrl = require('./emailUtil.controller');


emailRouter.use(cors());
emailRouter.post('/send', function(req, res) {
    try {
        let jsonobj = req.body;
        jsonobj.host = req.get('host');
        emailCtrl.sendEmail(jsonobj).then((data) => {
                return res.status(201).send({ message: 'sent successfully' });
            },
            (err) => {
                return res.status(500).send({
                    error: 'Internal error occurred, please try later..!'
                });
            });
    } catch (error) {
        res.send({ error: 'Failed to complete successfully, please check the request and try again..!' });
        return;
    }
});
module.exports = emailRouter;
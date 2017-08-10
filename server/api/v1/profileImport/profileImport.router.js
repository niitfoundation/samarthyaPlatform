const router = require('express').Router();
const profileCtrl = require('./profileImport.controller');
const logger = require('./../../../../applogger');
const http = require('http');
const formidable = require('formidable');
const fs = require('fs');

router.post('/upload', function (req, res) {
    let remarks = req.query.remarks;
    let username = req.query.username;
    try {
        var form = new formidable.IncomingForm();

        form.parse(req, function (err, fields, files) {
            let fileName = files['uploads[]'].name;
            fs.readFile(files['uploads[]'].path, { encoding: 'utf-8' }, function (err, data) {
                if (err)
                    logger.error(err)
                else {

                    profileCtrl.addProfileImport(JSON.parse(data), fileName, remarks, username).then((successResult) => {
                        logger.info('Saved successfully and return back');

                    })
                }
            });
        });
        return res.status(201).send({ "msg": "Importing is in progress..Will import that soon" ,"authToken": req.authToken });

    } catch (err) {
        return res.send({ "msg": "Error in importing please try later..." ,"authToken": req.authToken});

    }
});


router.get('/import-history', function (req, res) {


    try {
        profileCtrl.getImportHistory().then((successResult) => {
            logger.info('Get successResult successfully and return back');
            return res.status(201).send({result:successResult,"authToken": req.authToken});
        },
            (err) => {
                logger.error('Internal error occurred' + err);
                return res.status(500).send({ error: 'Internal error occurred, please try later..!',"authToken": req.authToken });
            });
    } catch (err) {
        logger.fatal('Exception occur' + err);
        // Log the Error for internal use
        res.send({ error: 'Failed to complete successfully, please check the request and try again..!',"authToken": req.authToken });
        return;
    }


})



router.get('/failure-history', function (req, res) {
    let documentId = req.query.documentId;
    try {
        profileCtrl.getFailureImportHistory(documentId).then((successResult) => {
            logger.info('Get successResult successfully and return back');
            return res.status(201).send({result:successResult.data,"authToken": req.authToken});
        },

            (err) => {
                logger.error('Internal error occurred' + err);
                return res.status(500).send({ error: 'Internal error occurred, please try later..!' ,"authToken": req.authToken});
            });
    } catch (err) {
        logger.fatal('Exception occur' + err);
        // Log the Error for internal use
        res.send({ error: 'Failed to complete successfully, please check the request and try again..!',"authToken": req.authToken });
        return;
    }


});

module.exports = router;
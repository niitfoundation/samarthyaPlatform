const router = require('express').Router();
const coordinateCtrl = require('./coordinators.controller');
const logger = require('./../../../../applogger');
const UserCtrl = require('./../users/users.controller');
let http = require('http');
var formidable = require('formidable');
const fs = require('fs');


/*
/*
 * Actual URI will be HTTP POST /users/
 */
// router.post('/', function(req, res) {
//     let coordinateData = req.body;
//     logger.debug('Get object and store into coordinateData');
//     try {
//         if (!coordinateData) {
//             logger.error('coordinateData not found');
//             throw new Error('Invalid inputs passed...!');
//         }
//         UserCtrl.registerNewUser(coordinateData).then((successResult) => {
//             logger.info('Get successResult successfully and return back');
//             return res.status(201).send(successResult);
//         }, (errResult) => {
//             // Log the error for internal use
//             logger.error('Internal error occurred');
//             return res.status(500).send({ error: 'Internal error occurred, please try later..!' });
//         });
//     } catch (err) {
//         // Log the Error for internal use
//         logger.fatal('Exception occurred' + err);
//         res.send({ error: 'Failed to complete successfully, please check the request and try again..!' });
//         return;
//     }
// });

router.post('/upload', function(req, res) {
    try {
        var form = new formidable.IncomingForm();

        form.parse(req, function(err, fields, files) {
            fs.readFile(files['uploads[]'].path, { encoding: 'utf-8' }, function(err, data) {
                if (err)
                    console.log(err)
                else {

                    UserCtrl.addBulkData(JSON.parse(data)).then((successResult) => {
                        logger.info('Saved successfully and return back');

                        var options = {
                            host: 'localhost',
                            port: 3001,
                            path: '/save?datas=' + successResult.data._id,
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                        };

                        var requestHttp = http.request(options, function(response) {
                            response.setEncoding('utf8');
                            response.on('data', function(chunk) {
                                console.log("on-data")
                            });
                            response.on('end', function() {
                                console.log("on-end")
                                response.send('ok')
                            });
                        });

                        requestHttp.end();

                    })
                }
            });
        });
        form.on('file', function(name, file) {
            console.log('Uploaded ' + file.name);

        });
        return res.status(201).send({ "msg": "Importing is in progress..Will import that soon" });

    } catch (err) {
        return res.send({ "msg": "Error in importing please try later..." });

    }


    // // });
    //             return res.status(201).send(successResult);
    //         }, (errResult) => {
    //             // Log the error for internal use
    //             logger.error('Internal error occurred');
    //             return res.status(500).send({ error: 'Internal error occurred, please try later..!' });
    //         });
    //     } catch (err) {
    //         // Log the Error for internal use
    //         logger.fatal('Exception occurred' + err);
    //         res.send({ error: 'Failed to complete successfully, please check the request and try again..!' });
    //         return;
    //     }
});


router.get('/import-history', function(req, res) {


    try {
        coordinateCtrl.getImportHistory().then((successResult) => {
                logger.info('Get successResult successfully and return back');
                return res.status(201).send(successResult);
            },
            (err) => {
                logger.error('Internal error occurred' + err);
                return res.status(500).send({ error: 'Internal error occurred, please try later..!' });
            });
    } catch (err) {
        logger.fatal('Exception occur' + err);
        // Log the Error for internal use
        res.send({ error: 'Failed to complete successfully, please check the request and try again..!' });
        return;
    }


})



router.get('/failure-history', function(req, res) {
    let documentId = req.query.documentId;
    console.log(documentId)

    try {
        coordinateCtrl.getFailureImportHistory(documentId).then((successResult) => {
                logger.info('Get successResult successfully and return back');
                console.log(successResult)
                return res.status(201).send(successResult);
            },
            (err) => {
                logger.error('Internal error occurred' + err);
                return res.status(500).send({ error: 'Internal error occurred, please try later..!' });
            });
    } catch (err) {
        logger.fatal('Exception occur' + err);
        // Log the Error for internal use
        res.send({ error: 'Failed to complete successfully, please check the request and try again..!' });
        return;
    }


})


module.exports = router;
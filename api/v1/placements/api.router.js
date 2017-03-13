const express = require('express');
const router = express.Router();
const app = express();
const jwt = require('jsonwebtoken');
const fs = require('fs');
// declare axios for making http requests
const axios = require('axios');
const path = require('path');
const layout = require("./layout.router");
app.set('jwtTokenSecret', 'somethinghere');
// Get our API routes
const json = require("./../jsonData/jsonData.json");
const userJson = require("./../jsonData/userDetails.json");
const pincodeJson = require("./../jsonData/pincode.json");
const userData = require('./databaseSchema');
const userCredentialsData = require('./../usersDBSchema');

router.get('/languages', function (req, res) {
    return res.json({
        success: true,
        data: json["languages"]
    });

});

router.post('/pincodeDetails', function (req, res) {
    let param = req.body.pincode;
    return res.json({
        success: true,
        pincodeData: pincodeJson["pincodeDetails"].filter(function (item) {
            return item.pincode == param
        })
    });
});

router.post('/addCandidate', function (req, res) {
    let userRegister = new userData(req.body.userData);
    userRegister.created_at = Date.now();
    userRegister.updated_at = Date.now();
    userRegister.save(function (err) {
        if (err) {
            console.log(err);
            return res.json({
                success: false,
                message: "Constraints failed"
            });
        } else {
            let userCredData = new userCredentialsData(req.body.userCredentialsData)
            userCredData.created_at = Date.now();
            userCredData.updated_at = Date.now();
            userCredData.save(function (err) {
                if (err) {
                    console.log(err);
                    return res.json({
                        success: false,
                        message: "Constraints failed"
                    });
                }
            });
            console.log('User saved successfully!');
            return res.json({
                success: true,
                message: "SuccessfullyAdded"
            });
        }
    });
});

router.post('/authenticate', function (req, res, next) { 
    let params = req.body;
    userCredentialsData.find({
        Email: params.username,
        Password: params.password
    }, function (err, docss) {
        if (err) {
            console.log(err)
            res.json({
                success: false,
                message: 'Technical error ...Please Try later'
            });
        } else {
            if (docss.length == 0) {
                res.json({
                    success: false,
                    message: 'Authentication failed. UserId or password is wrong'
                });
            } else {
                // if user is found and password is right
                // create a token
                userData.find({
        Email: params.username
    }, function (err, docs) {
                const token = jwt.sign(docs[0], app.get('jwtTokenSecret'), {
                    expiresIn: 60 * 30 // expires in 30 minutes
                });
                // return the information including token as JSON
                res.json({

                    success: true,
                    message: 'Welcome! ' + docs[0]["FirstName"],
                    auth_token: token,
                    role: docs[0]["Role"]
                });
    });
            }
        }
    })
});

router.post('/passwordReset', function (req, res, next) { 
    let params = req.body;
    userCredentialsData.update({
        "Email": params.Email
    }, {
        $set: {
            "Password": params.Password,
            "updated_at":Date.now()
        }
    }, function (err, docs) {
        if (err) {
            return res.json({
                success: false,
                message: "Technical error...Try later"
            })
        } else {
            return res.json({
                success: true,
                message: "Password changed successfully.."
            })
        }
    })

});

router.use(function (req, res, next) {
    console.log('middleware called');
    // check header or url parameters or post parameters for token
    const token = req.body.token || req.query.token || req.headers['authorization'];
    // decode token
    if (token) {
        // verifies secret and checks exp
        jwt.verify(token, app.get('jwtTokenSecret'), function (err, decoded) {
            if (err) {
                return res.json({
                    success: false,
                    message: 'UnAuthorised User'
                });
            } else {
                // if everything is good, save to request for use in other routes
                req.decoded = decoded;
                next();
            }
        });

    } else {

        // if there is no token
        // return an error
        return res.status(403).send({
            success: false,
            message: 'No token provided.'
        });

    }
});
router.use('/layout', layout);
module.exports = router;
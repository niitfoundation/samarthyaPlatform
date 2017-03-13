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
const user = require('./databaseSchema');

router.get('/languages', function (req, res) {
    return res.json({
        success: true,
        data: json["languages"]
    });

});

router.post('/addCandidate', function (req, res) {
    var userRegister = new user(req.body.userData);
    userRegister.save(function (err) {
        if (err) {
            console.log(err);
            return res.json({
                success: false,
                message: "Constraints failed"
            });
        } else {
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
   user.find({Email:params.username,Password:params.password},function(err,docs){
       if(err){ 
           console.log(err)
            res.json({
            success: false,
            message: 'Technical error ...Please Try later'
        });
        }
       else{
           if(docs.length==0){
                res.json({
            success: false,
            message: 'Authentication failed. UserId or password is wrong'
        });
           }
           else{
          // if user is found and password is right
        // create a token
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
       }
       }
   })
});

router.post('/passwordReset', function (req, res, next) { 
    let params = req.body;
    user.update(
        {"Email":params.Email},
        {
             $set: { "Password": params.Password}
        },function(err,docs){
            if(err){
                return res.json({
                    success:false,
                    message:"Technical error...Try later"
                })
            }
            else{
                 return res.json({
                    success:true,
                    message:"Password changed successfully.."
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
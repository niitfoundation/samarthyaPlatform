const router = require('express').Router();
const jwt = require('jsonwebtoken');
const layout = require('./layout.router');
const secret = require('express')();
secret.set('jwtTokenSecret', 'somethinghere');
const fs = require('fs');
// Get our API routes
const json = require('./../jsonData/jsonData.json');
const userJson = require('./../jsonData/userDetails.json');
router.get('/languages', function(req, res) {
    return res.json({
        success: true,
        data: json.languages
    });
});
router.post('/addCandidate', function(req, res) {
    let user = req.body.userData;
    userJson.users.push(user);

    fs.writeFile('D:/workspace/GitHub/samarthyaMain/samarthyaPlatform/api/v1/jsonData/userDetails.json', JSON.stringify(userJson), (err) => {
        if (err) {
            return;
        }
    });


    return res.json({
        success: true,
        message: 'SuccessfullyAdded'
    });
});
router.post('/authenticate', function(req, res, next) { 
    let params = req.body;
    let userDetails = userJson.users.filter(function(obj) {
        return obj.Email == params.username && obj.Password == params.password;
    });
    let userExist = userJson.users.filter(function(obj) {
        return obj.Email == params.username;
    });
    if (userExist.length == 0) {
        res.json({
            success: false,
            message: 'Authentication failed. User not found.'
        });
    } else if (userDetails.length == 0) {
        res.json({
            success: false,
            message: 'Authentication failed. Wrong password.'
        });
    } else {
        // if user is found and password is right
        // create a token
        const token = jwt.sign(userDetails[0], secret.get('jwtTokenSecret'), {
            expiresIn: 60 * 30 // expires in 30 minutes
        });
        // return the information including token as JSON
        res.json({
            success: true,
            message: 'Welcome! ' + userDetails[0].firstName,
            authToken: token,
            role: userDetails[0].Role
        });
    }
});
router.use(function(req, res, next) {
    // check header or url parameters or post parameters for token
    const token = req.body.token || req.query.token || req.headers.authorization;
    // decode token
    if (token) {
        // verifies secret and checks exp
        jwt.verify(token, secret.get('jwtTokenSecret'), function(err, decoded) {
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
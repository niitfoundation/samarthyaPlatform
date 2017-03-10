const router = require('express').Router();
const jwt = require('jsonwebtoken');
const layout = require('./layout.router');
require('express')().set('jwtTokenSecret', 'somethinghere');
// Get our API routes
const json = require('./../jsonData/jsonData.json');
const user = [{ username: 'pankush@samarthya.com', password: 'pankush@12', role: 'Admin' },
    { username: 'dheerendra@samarthya.com', password: 'dheerendra@12', role: 'Coordinator' },
    { username: 'murga@samarthya.com', password: 'murga@12', role: 'Supervisor' }
];
router.get('/languages', function(req, res) {
    return res.json({
        success: true,
        data: json['languages']
    });
});
router.post('/authenticate', function(req, res) {
    let params = req.body;
    let userDetails = user.filter(function(obj) {
        return obj.username == params.username && obj.password == params.password;
    });
    let userExist = user.filter(function(obj) {
        return obj.username == params.username;
    });
    if (userExist.length == 0) {
        res.json({ success: false, message: 'Authentication failed. User not found.' });
    } else if (userDetails.length == 0) {
        res.json({ success: false, message: 'Authentication failed. Wrong password.' });
    } else {
        // if user is found and password is right
        // create a token
        const token = jwt.sign(userDetails[0], require('express')().get('jwtTokenSecret'), {
            expiresIn: 60 * 30 // expires in 30 minutes
        });
        // return the information including token as JSON
        res.json({
            success: true,
            message: 'Welcome! ' + userDetails[0].username,
            auth_token: token,
            role: userDetails[0].role
        });
    }
});
router.use(function(req, res, next) {
    // check header or url parameters or post parameters for token
    const token = req.body.token || req.query.token || req.headers['authorization'];
    // decode token
    if (token) {
        // verifies secret and checks exp
        jwt.verify(token, require('express')().get('jwtTokenSecret'), function(err, decoded) {
            if (err) {
                return res.json({ success: false, message: 'UnAuthorised User' });
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
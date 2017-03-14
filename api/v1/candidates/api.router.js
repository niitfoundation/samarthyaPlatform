var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var jwt = require('jsonwebtoken');
var UserDetailCandidate = require('./databaseSchema');
const UserCredentials = require('./../usersDBSchema');
var morgan = require('morgan');
var mongoose = require('mongoose');
var xmlhttp = require('http');
var cors = require('cors');

// var port = process.env.PORT || 4000;

var apiRoutes = express.Router();
//mongoose.connect(config.database);

apiRoutes.get('/', function (req, res) {
    res.send('Hello! we are at ' + port);
});

// add user to database
apiRoutes.post('/adduser', function (req, res) {
    var user = new UserCredentials(req.body);

    user.save(function (err) {
        if (err) throw err;
        console.log('User save successfully');
    });
});

// check Email
apiRoutes.get('/checkEmail', function (req, res) {
    console.log("REQQQ : " + req.query['email']);
    User.findOne({ email: req.query['email'] }, function (err, user) {
        if (err) {
            console.log('error');
        } else if (!user) {
            res.send('nouser');
            console.log('no user');
        } else {
            res.send('found');
            console.log('user found');
        }
    })
});

//authentication
apiRoutes.post('/authenticate', function (req, res) {

    User.findOne({ email: req.body.email }, function (err, user) {
        if (err) { console.log('error'); } //throw err};

        if (!user) {
            res.send('userError');
            console.log('Authentication failed. User not found.');
        } else if (user) {
            if (user.password != req.body.password) {
                res.send('passwordError');
                console.log('Authentication failed. Wrong password.');
            } else {
                var token = jwt.sign(user, 'I Love My INDIA');
                var user1 = {
                    email: user.email,
                    token: token
                };
                if (user1) {
                    // authentication successful
                    // console.log('user login : ' + user);
                    res.send(user1);
                } else {
                    // authentication failed
                    res.status(401).send('Username or password is incorrect');
                }
            }
        }
    });
});

apiRoutes.get('/', function (req, res) {
    res.send('Hello i am here');
});

//get all users
apiRoutes.get('/showuser', function (req, res) {
    User.find({}, function (err, user) {
        res.json(user);
    });
});

app.use('/api', apiRoutes);

module.exports = apiRoutes;
// app.listen(port);
// console.log('http://localhost:' + port);
const jwt = require('jsonwebtoken');
const userModel = require('./../users/users.entity');
const appConstant = require('../common/appConstants');
const logger = require('./../../../logs/logger');


// authenticate the user with its credentials
const authenticateUser = function(authObj) {
    const token = jwt.sign(authObj, appConstant.secret, {
        expiresIn: appConstant.expireTime
    });

    logger.debug('Token is generated');
    var userDetails = {
        username: authObj.username,
        password: authObj.password
    };

    return new Promise((resolve, reject) => {
        userModel.find(userDetails, function(err, data) {
            if (err) {
                logger.error('userDetails data not found' + err);
                reject(err);
            } else if (data.length == 0) {
                logger.debug('Invalid Credentials');
                reject({ msg: 'Invalid Credentials' });
            } else {
                logger.debug('Data find and resolve here');
                resolve({ authToken: token, data: data });
                // return the information including token as JSON
            }
        });
    });
};

// find user is already exists or not
let checkUser = function(objEmail) {
    let userDetails = {
        username: objEmail,
    };
    return new Promise((resolve, reject) => {
        userModel.find(userDetails, function(err, data) {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
};


// validate if email expired  or not
let verifyEmailLink = function(objVerify) {
    let userToken = objVerify.token;
    return new Promise((resolve, reject) => {
        jwt.verify(userToken, appConstant.emailDetails.emailTokenSecret, function(err, decoded) {
            if (err) {
                logger.error('Updated password data is not found');
                reject(err);
            } else {
                logger.debug('Updated password data found and resolved');
                resolve({
                    msg: 'Email Verified',
                    data: decoded
                });
            }
        });
    });
};

// password reset updation in database
const resetPassword = function(resetObj) {
    var userDetails = {
        username: resetObj.username
    };
    logger.debug('Username stored into userDetails');
    // let resetData = new userModel(userDetails);
    return new Promise((resolve, reject) => {
        userModel.update(userDetails, {
                $set: {
                    password: resetObj.password,
                    updatedOn: Date.now()
                }
            },
            function(err, data) {
                if (err) {
                    reject(err);
                } else {
                    resolve(data);
                }
            });
    });
};

// verify the user token for every request
let verifyToken = function(token, secret) {
    jwt.verify(token, appConstant.secret, function(err, decoded) {
        if (err) {
            logger.error('Token not matched');
            return { result: false };
        }
        // if everything is good, save to request for use in other routes
        logger.debug('Token matched');
        return { result: true, decoded: decoded };
    });
};
module.exports = {
    authenticateUser: authenticateUser,
    checkUser: checkUser,
    verifyEmailLink: verifyEmailLink,
    resetPassword: resetPassword,
    verifyToken: verifyToken
};
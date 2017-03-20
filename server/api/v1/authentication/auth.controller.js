const jwt = require('jsonwebtoken');
const userModel = require('./../users/users.entity');
const resourcesModel = require('./../resources/resources.entity');
const appConstant = require('../common/appConstants');
const logger = require('./../../../../logs/logger');


// authenticate the user with its credentials
const authenticateUser = function(authObj) {
    logger.debug('Token is generated');
    var userDetails = {
        username: authObj.username,
        password: authObj.password
    };

    let promise = new Promise((resolve, reject) => {
        userModel.find(userDetails, function(err, data) {
            if (err) {
                logger.error('userDetails data not found' + err);
                reject(err);
            } else if (data.length == 0) {
                logger.debug('Invalid Credentials');
                reject({ msg: 'Invalid Credentials' });
            } else {
                let userDetails = { username: data[0].username, role: data[0].role };
                let userToken = jwt.sign(userDetails, appConstant.secret, { expiresIn: appConstant.expireTime });
                logger.debug('Data find and resolve here');
                resolve({ authToken: userToken, msg: 'user authenticated' });
            }
        });
    });

    return promise;
};


// find user is already exists or not
let checkUser = function(objEmail) {
    let userDetails = {
        username: objEmail,
    };
    return new Promise((resolve, reject) => {
        userModel.find(userDetails, function(err, data) {
            if (err) {
                reject({ err: err, msg: 'user already exist' });
            } else {
                resolve({ msg: 'sent successfully' });
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
                    resolve({ msg: 'Successfully Updated' });
                }
            });
    });
};

// verify the user token for every request
let verifyToken = function(usertoken) {
    return new Promise((resolve, reject) => {
        jwt.verify(usertoken, appConstant.secret, function(err, decoded) {
            if (err) {
                logger.error('Token not matched');
                reject(err);
            } else {
                // if everything is good, save to request for use in other routes
                logger.debug('Token matched');
                resolve({ decoded: decoded });
            }
        });
    });
};

let getMenus = function(role) {
    return new Promise((resolve, reject) => {
        resourcesModel.distinct('navList.' + role.toLowerCase(), function(err, data) {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
};
module.exports = {
    authenticateUser: authenticateUser,
    checkUser: checkUser,
    verifyEmailLink: verifyEmailLink,
    resetPassword: resetPassword,
    verifyToken: verifyToken,
    getMenus: getMenus
};
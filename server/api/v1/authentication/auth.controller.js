const jwt = require('jsonwebtoken');
const userModel = require('./../users/users.entity');
const resourcesModel = require('./../resources/resources.entity');
const appConstant = require('../common/appConstants');
const logger = require('./../../../../applogger');

// authenticate the user with its credentials
const authenticateUser = function(authObj) {
    var userDetails = {
        username: authObj.username,
    };
    // find user
    let promise = new Promise((resolve, reject) => {
        userModel.findOne(userDetails, function(err, data) {
            if (err) {
                logger.error('userDetails data not found' + err);
                reject(err);
            } else if (!data) {
                logger.debug('Invalid Credentials');
                reject({
                    msg: 'Invalid Credentials'
                });
            } else {
                logger.info(data)
                    // method to compare to authenticate users
                data.comparePassword(authObj.password, function(err, isMatch) {
                    if (err) {
                        logger.error('Invalid Password' + err);
                        reject(err);
                    } else if (isMatch) {
                        let userDetails = {
                            username: data.username,
                            role: data.role
                        };
                        let userToken = jwt.sign(userDetails, appConstant.secret, {
                            expiresIn: appConstant.expireTime
                        });
                        logger.debug('Data find and resolve here');
                        resolve({
                            authToken: userToken,
                            msg: 'user authenticated',
                            role: data.role
                        });
                    } else {
                        reject({
                            msg: 'Invalid password'
                        });
                    }
                });
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
        userModel.findOne(userDetails, function(err, data) {
            if (err) {
                logger.info(err);
                reject({
                    err: err,
                    msg: 'user already exist'
                });
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
        username: resetObj.username,
    };
    logger.debug('Username stored into userDetails');
    return new Promise((resolve, reject) => {

        userModel.findOneAndUpdate(userDetails, {
                password: resetObj.password,
                updatedOn: Date.now()
            },
            function(err, data) {
                if (err) {
                    reject(err);
                } else {
                    resolve({
                        msg: 'Successfully Updated'
                    });
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
                resolve({
                    decoded: decoded
                });
            }
        });
    });
};

//get nav-menus from the resource collection based on roles
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
const jwt = require('jsonwebtoken');
const userModel = require('./../users/users.entity');
const appConfig = require('../../../config/appConfig');
const logger = require('./../../../logs/logger');

const validateUser = function(authObj) {b

const emailCtrl = require('./../emailUtil/emailUtil.controller')

//authenticate the user with its credentials
const authenticateUser = function(authObj) {
    const token = jwt.sign(authObj, appConfig.secret, {
        expiresIn: 60 * 30 // expires in 30 minutes
    });

    logger.debug('Tooken is generated');
    var userDetails = {
        username: authObj.username,
        password: authObj.password
    };
    return new Promise((resolve, reject) => {
        userModel.find(userDetails, function(err, data) {
            if (err) {
                logger.error('userDetails data not found'+err);
                reject(err);
            } else {
                if (data.length == 0) {
                    
                    resolve({ data: data, message: "Invalid Credentials" });
                } else {
                    logger.info('Data find and resolve here');
                    resolve({ auth_token: token, data: data })
                        // return the information including token as JSON
                }
            }

        });
    });
}
//find user is already exists or not
let checkUser = function(objEmail) {
    let userDetails = {
        "username": objEmail,
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
}



// validate if email expired  or not
let verifyEmailLink = function(objVerify) {
    try {
        let userToken = objVerify.token;
        return new Promise((resolve, reject) => {
            jwt.verify(userToken, emailDetails.emailtokenSecret, function(err, decoded) {
                if (err) {
                    logger.error('Updated password data is not found');
                    reject(err);
                } else {
                    logger.info('Updated password data found and resolved');
                    resolve({
                        msg: "Email Verified",
                        data: decoded
                    })
                }
            });
        })


    } catch (err) {
        return err;
    }

}

//password reset updation in database
const resetPassword = function(resetObj) {
        var userDetails = {
                username: resetObj.username
            }
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
                })
        });

    }
    // verify the user token for every request
let verifyToken = function(token, secret) {
    jwt.verify(token, appConfig.secret, function(err, decoded) {
        if (err) {
            logger.error('Token not matched');
            return { result: false };
        } else {
            // if everything is good, save to request for use in other routes
            logger.info('Token matched');
            return { result: true, decoded: decoded };
        }
    });

}
module.exports = {
    authenticateUser: authenticateUser,
    checkUser: checkUser,
    verifyEmailLink: verifyEmailLink,
    resetPassword: resetPassword,
    verifyToken: verifyToken
}
const jwt = require('jsonwebtoken');
const authModel = require('./../users/users.entity');
const appConfig = require('../../../config/appConfig');
const logger = require('./../../../logs/logger');

const validateUser = function(authObj) {
    
    const token = jwt.sign(authObj, appConfig.secret, {
        expiresIn: 60 * 30 // expires in 30 minutes
    });

    logger.debug('Tooken is generated');
    var userDetails = {
        username: authObj.username,
        password: authObj.password
    };
    return new Promise((resolve, reject) => {
        authModel.find(userDetails, function(err, data) {
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

const resetPassword = function(resetObj) {
    
    var userDetails = {
            username: resetObj.username
        }
        logger.debug('Username stored into userDetails');
        // let resetData = new authModel(userDetails);
    return new Promise((resolve, reject) => {

        authModel.update(userDetails, {
                $set: {
                    password: resetObj.password,
                    updatedOn: Date.now()
                }
            },
            function(err, data) {
                if (err) {
                    logger.error('Updated password data is not found');
                    reject(err);
                } else {
                    logger.info('Updated password data found and resolved');
                    resolve(data);
                }
            })
    });

}
let verifyToken = function(token) {
    logger.debug('Token Found');
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
    validateUser: validateUser,
    resetPassword: resetPassword,
    verifyToken: verifyToken
}
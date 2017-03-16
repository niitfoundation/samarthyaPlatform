const jwt = require('jsonwebtoken');
const authModel = require('./../users/users.entity');
const appConfig = require('../../../config/appConfig');

const validateUser = function(authObj) {

    const token = jwt.sign(authObj, appConfig.secret, {
        expiresIn: 60 * 30 // expires in 30 minutes
    });
    var userDetails = {
        username: authObj.username,
        password: authObj.password
    };
    return new Promise((resolve, reject) => {
        authModel.find(userDetails, function(err, data) {
            if (err) {
                reject(err);
            } else {
                if (data.length == 0) {
                    resolve({ data: data, message: "Invalid Credentials" });
                } else {
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
                    reject(err);
                } else {
                    resolve(data);
                }
            })
    });

}
let verifyToken = function(token) {
    jwt.verify(token, appConfig.secret, function(err, decoded) {
        if (err) {
            return { result: false };
        } else {
            // if everything is good, save to request for use in other routes
            return { result: true, decoded: decoded };
        }
    });

}
module.exports = {
    validateUser: validateUser,
    resetPassword: resetPassword,
    verifyToken: verifyToken
}
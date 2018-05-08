const jwt = require('jsonwebtoken-refresh');
const appConstant = require('../common/appConstants');
const logger = require('./../../../../applogger');


// verify the user token for every request
let verifyToken = function (usertoken) {
    return new Promise((resolve, reject) => {
        jwt.verify(usertoken, appConstant.secret, function (err, decoded) {
            if (err) {
                logger.error('Token not matched');
                reject(err);
            } else {
                    let refreshToken = jwt.refresh(decoded,appConstant.expireTime, appConstant.secret);
                // if everything is good, save to request for use in other routes
                logger.debug('Token refreshed');
        resolve({
                    decoded: decoded,
                    authToken:refreshToken
                });
            }
        });
    });
};

// let generateToken = function(authObj){
//     var userDetails = {
//         username: authObj.username,
//     };
//   return new Promise((resolve, reject) => {
//         userModel.findOne(userDetails, function (err, data) {
//             if (err) {
//                 logger.error('userDetails data not found' + err);
//                 reject(err);
//             } else {
//                 let userDetails = {
//                     username: data.username,
//                     role: data.role
//                 };
//                 let userToken = jwt.sign(userDetails, appConstant.secret, {
//                 expiresIn: appConstant.expireTime
//                 });
//                 resolve(userToken); // secret is defined in the environment variable JWT_SECRET
//             }
//         });
//     });
// }

module.exports = {
    verifyToken: verifyToken
};
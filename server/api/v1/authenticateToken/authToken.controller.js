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


module.exports = {
    verifyToken: verifyToken
};
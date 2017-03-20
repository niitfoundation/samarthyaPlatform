const UserModel = require('./users.entity');
const logger = require('./../../../../logs/logger');
const prflCtrl = require('./../profile/profile.controller');
/*
 *authenticate new user and adding profile details
 */
const registerNewUser = function(userObj) {
    logger.debug('Get userObj and store into userDetails');
    var userDetails = {
        username: userObj.username,
        password: userObj.password,
        role: userObj.role,
        status: 'Active',
        lastLoginOn: Date.now(),
        createdOn: Date.now(),
        updatedOn: Date.now()
    };
    let userData = new UserModel(userDetails);

    // insert the data into db using promise
    return new Promise((resolve, reject) => {
        userData.save(function(err, data) {
            if (err) {
                logger.error('userData not added sucessfully' + err);
                reject(err);
            } else {
                logger.info('Adding user credentials and profile details');
                // after successful enter the credentials data inserts profile details
                prflCtrl.createProfile().then((successResult) => {
                    resolve(data);
                }, (errresult) => {
                    logger.error('userData not added sucessfully' + err);
                    reject(err);
                });
            }
        });
    });
};

module.exports = {
    registerNewUser: registerNewUser
};
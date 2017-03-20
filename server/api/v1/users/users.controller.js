const UserModel = require('./users.entity');
const logger = require('./../../../../applogger');
/*
 *
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
                logger.info('userData added sucessfully');
                resolve(data);
            }
        });
    });
};

module.exports = {
    registerNewUser: registerNewUser
};
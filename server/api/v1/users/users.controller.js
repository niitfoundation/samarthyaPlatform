const UserModel = require('./users.entity');
const prflCtrl = require('./../profile/profile.controller');
const logger = require('./../../../../applogger');
const BulkModel = require('./bulkEntry.entity');
/*
 *authenticate new user and adding profile details
 */
const registerNewUser = function(userObj) {
    logger.debug('Get userObj and store into userDetails');
    var userDetails = {
        username: userObj.userCredentialsData.username,
        password: userObj.userCredentialsData.password,
        role: userObj.userCredentialsData.role,
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
                // after successful enter the credentials data inserts profile details
                prflCtrl.createProfile(userObj.profileData).then((successResult) => {
                    resolve({ success: true, msg: ' Successfully Registered' });
                }, (errresult) => {
                    logger.error('profile data not added Successfully' + err);
                    // if profile data not inserted delete the credentials data
                    userData.remove(function(err, data) {
                        if (err) {
                            reject(err);
                            logger.error('failed adding profile data and failed removing userCredential data' + err);
                        } else {
                            logger.debug('failed adding profile data and removed userCredential data');
                            reject({ success: false, msg: 'failed adding profile data and removed userCredential data' });
                        }
                    });
                });
            }
        });
    });
};


const addBulkData = function(bulkData) {
    var data = {
        data: bulkData,

    };
    let bulk = new BulkModel(data);

    // insert the data into db using promise
    return new Promise((resolve, reject) => {
        bulk.save(function(err, data) {
            if (err) {
                logger.error('userData not added sucessfully' + err);
                reject(err);
            } else {

                resolve({ msg: 'in mongo added Successfully', data: data, success: true });
            }
        });
    });
}

module.exports = {
    registerNewUser: registerNewUser,
    addBulkData: addBulkData
};
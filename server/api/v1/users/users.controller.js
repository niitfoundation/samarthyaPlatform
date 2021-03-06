const UserModel = require('./users.entity');
const profileCtrl = require('./../profile/profile.controller');
const logger = require('./../../../../applogger');
const appConstant = require('../common/appConstants');
const profileImportCtrl = require('./../profileImport/profileImport.controller');

/*
 *authenticate new user and adding profile details
 */
const registerNewUser = function(userObj, insertType) {
    logger.debug('Get userObj and store into userDetails', userObj);
    logger.info('inside registerNewUser insertType', insertType);
    var userDetails = {
        username: userObj.userCredentialsData.username,
        password: userObj.userCredentialsData.password,
        role: userObj.userCredentialsData.role,
        status: appConstant.userDetails.USER_STATUS[0], //Ststus=Active
        lastLoginOn: Date.now(),
        createdOn: Date.now(),
        updatedOn: Date.now()
    };
    let userData = new UserModel(userDetails);

    // insert the data into db using promise
    return new Promise((resolve, reject) => {
        userData.save(function(err, data) {
            if (err) {
                logger.error('userData not added successfully' + err);
                reject(err);
            } else {
                // if user added his/her details
                if (!insertType || insertType == appConstant.INSERT_TYPE.PROFILES) {
                    // after successful enter the credentials data inserts profile details
                    profileCtrl.createProfile(userDetails.username, userObj.profileData)
                    .then((successResult) => {
                        resolve({ success: true, msg: 'Successfully Registered' });
                    }, (errResult) => {
                        logger.error('profile data not added successfully, error: ', errResult);
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
                } else if (insertType == appConstant.INSERT_TYPE.PROFILE_IMPORT) {
                    //if profile data inserted from profile Import
                    profileImportCtrl.createFullProfile(userDetails.username, userObj.profileData)
                    .then((successResult) => {
                        logger.info('inside createFullProfile in user.controller');
                        resolve({ success: true, msg: ' Successfully Registered' });
                    }, (errResult) => {
                        logger.error('profile data not added successfully, error: ', errResult);
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
            }
        });
    });
};



module.exports = {
    registerNewUser: registerNewUser,
};
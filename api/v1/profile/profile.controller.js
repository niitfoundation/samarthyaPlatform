const userModel = require('./profile.entity');
const logger = require('./../../../logs/logger');
/*
 *
 */

const addProfileDetails = function(profileObj) {
    logger.debug('Get profileObj and store into profileDetails');
    let profileDetails = {
        username: profileObj.username,
        password: profileObj.password,
        role: profileObj.role,
        status: "Active",
        lastLoginOn: Date.now(),
        createdOn: Date.now(),
        updatedOn: Date.now()
    };
    let profileData = new userModel(profileDetails);

    //insert the data into db using promise
    return new Promise((resolve, reject) => {
        profileData.save(function(err, data) {
            if (err) {
                logger.error('profileData not added sucessfully'+err);
                reject(err);
            } else {
                logger.info('profileData added sucessfully');
                resolve(data);
            }
        });
    });

}

module.exports = {
    addProfileDetails: addProfileDetails
}
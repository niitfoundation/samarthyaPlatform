const userModel = require('./profile.entity');
const logger = require('./../../../logs/logger');
const profileModel = require('./profile.entity');
/*
 *
 */

const addProfileDetails = function(profileObj) {
    logger.debug('Get profileObj and store into profileDetails');
    let profileDetails = {
        username: profileObj.username,
        password: profileObj.password,
        role: profileObj.role,
        status: 'Active',
        lastLoginOn: Date.now(),
        createdOn: Date.now(),
        updatedOn: Date.now()
    };
    let profileData = new userModel(profileDetails);

    // insert the data into db using promise
    return new Promise((resolve, reject) => {
        profileData.save(function(err, data) {
            if (err) {
                logger.error('profileData not added sucessfully' + err);
                reject(err);
            } else {
                logger.info('profileData added sucessfully');
                resolve(data);
            }
        });
    });
};
const viewProfile = function(profileObj) {

    // @TODO
    // Get the profile schema and perform get operations
    // Get the profile data on user demand
    // use promise for database operations and return result

};

const createProfile = function(profileObj) {

    // @TODO
    // Get the profile schema and perform add operations
    // use promise for database operations and return result

};
const editProfile = function(profileObj) {

    // @TODO
    // Get the profile schema and perform edit operations
    // use promise for database operations and return result

};

const deletePerofile = function(profileObj) {

    // @TODO
    // Get the profile schema and perform delete operations
    // use promise for database operations and return result

};
module.exports = {
    viewProfile: viewProfile,
    createProfile: createProfile,
    editProfile: editProfile,
    deletePerofile: deletePerofile
};

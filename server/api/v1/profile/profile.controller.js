const UserModel = require('./../users/users.entity');
const logger = require('./../../../../logs/logger');
const profileModel = require('./profile.entity');
/*
 *
 */

const viewProfile = function(profileObj) {

};

const createProfile = function(profileObj) {

    return new Promise((resolve, reject) => {
        userData.save(function(err, data) {
            if (err) {
                logger.error('profile data not added sucessfully' + err);
                reject(err);
            } else {
                logger.error('profile data added successfully' + err);
                // inserts profile details
                resolve(data);
            }
        });
    });

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
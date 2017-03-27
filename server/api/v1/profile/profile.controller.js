const UserModel = require('./../users/users.entity');
const logger = require('./../../../../applogger');
const ProfileModel = require('./profile.entity');
const profileDataModel = require('./profile.model');

/*
 *
 */

const viewProfile = function (profileObj) {
    // return new Promise((resolve, reject) => {
    //     ProfileModel.find({ username: profileObj.username }, function (err, data) {
    //         if (err) {
    //             logger.error('Profile data error' + err);
    //             reject(err);
    //         } else {
    //             logger.debug('Got Profile Data' + err);
    //             // inserts profile details
    //             resolve({ data: data });
    //             console.log(data);
    //         }
    //     });
    // });
};
// const multipleProfileCardDetails = function (profileObj) {
//     return new Promise((resolve, reject) => {
//         //  Neo4j code
//     });
// };


// Add profile details
const createProfile = function (profileObj) {
    console.log(profileObj);
    // Add/modify profile model
    let profileData = new ProfileModel(profileDataModel.profileDataModel(profileObj));

    return new Promise((resolve, reject) => {
        profileData.save(function (err, data) {
            if (err) {
                logger.error('profile data not added sucessfully' + err);
                reject(err);
            } else {
                logger.info('profile data added successfully');
             // inserts profile details
                resolve({ msg: 'Profile data Added successfully' });
            }
        });
    });

};
const editProfile = function (profileObj) {

    // @TODO
    // Get the profile schema and perform edit operations
    // use promise for database operations and return result

};

const deletePerofile = function (profileObj) {

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
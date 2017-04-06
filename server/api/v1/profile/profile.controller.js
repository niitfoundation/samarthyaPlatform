const UserModel = require('./../users/users.entity');
const logger = require('./../../../../applogger');
const ProfileModel = require('./profile.entity');
const profileDataModel = require('./profile.model');
const analysisFeeder = require('./../analysisFeeder/index');
const profileConstant = require('./../../../../config/profileAnalysisConfig');

/*
 *
 */

const getProfile = function(profileObj) {
    return new Promise((resolve, reject) => {
        ProfileModel.find({ username: profileObj.username }, function(err, data) {
            if (err) {
                logger.error('Profile data error' + err);
                reject(err);
            } else {
                logger.debug('Got Profile Data' + err);
                // inserts profile details
                resolve({ data: data });
            }
        });
    });
};
// const multipleProfileCardDetails = function (profileObj) {
//     return new Promise((resolve, reject) => {
//         //  Neo4j code
//     });
// };


// Add profile details
const createProfile = function(profileObj) {
    // Add/modify profile model
    let userRegData = profileDataModel.profileDataModel(profileObj);
    let profileData = new ProfileModel(userRegData);

    return new Promise((resolve, reject) => {
        profileData.save(function(err, data) {
            if (err) {
                logger.error('profile data not added sucessfully' + err);
                reject(err);
            } else {
                logger.info('profile data added successfully');
                logger.info('Graph Model Creation started');
                analysisFeeder.publishForProfileAnalysis(userRegData.username,
                    userRegData,
                    'POST', profileConstant.SECTION_TO_TOPIC_MAP.USER_REG,
                    function(err, result) {
                        if (err) {
                            reject({ msg: 'Graph model not created' });
                        } else {
                            resolve({ msg: 'Graph model  created' });
                        }
                    });
                // inserts profile details
                // resolve({ msg: 'Profile data Added successfully' });
            }
        });
    });
};

const editProfile = function(profileData, username, sectionName) {
    let obj = {};
    obj[sectionName] = profileData;
    return new Promise((resolve, reject) => {
        ProfileModel.update({ username: username }, { $set: obj }, function(err, data) {
            if (err) {
                logger.error('Profile data error' + err);
                reject(err);
            } else {
                logger.debug('Got Profile Data');
                // call method to run kafka pipeline
                // for particular profile section
                analysisFeeder.publishForProfileAnalysis(profileData.username,
                    profileData.modifyObj,
                    'PATCH',
                    sectionName,
                    function() {

                    });

                // inserts profile details
                resolve({ data: data });
            }
        });
    });
};


const deletePerofile = function(profileObj) {};

module.exports = {
    getProfile: getProfile,
    createProfile: createProfile,
    editProfile: editProfile,
    deletePerofile: deletePerofile
};
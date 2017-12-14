const UserModel = require('./../users/users.entity');
const logger = require('./../../../../applogger');
const ProfileModel = require('./profile.entity');
const profileDataModel = require('./profile.model');
const analysisFeeder = require('./../analysisFeeder/index');
const profileConstant = require('./../../../../config/profileAnalysisConfig');
const userCtrl = require('../users/users.controller');
const lodash = require('lodash');
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
                logger.debug('Got Profile Data' + data);
                // inserts profile details
                resolve(data);
            }
        });
    });
};

const findProfiles = function(userNameArray, {professionArray, page, limit}, done) {
    let query = {};

    lodash.set(query,["username","$in"],userNameArray);
    lodash.set(query,["profession","$in"],professionArray);

    let fields = {
      _id: 0,
      username:1,
      profession:1,
      'personalInfo.name':1
    };

    // console.log(query);
    return new Promise((resolve, reject) => {
        ProfileModel.find(query,fields, function(err, data) {
                        if (err) {
                            logger.error('Profile data error' + err);
                            reject(err);
                        } else {
                            logger.debug('Got Profile Data' + data);
                            // inserts profile details
                            resolve(data);
                        }
                        done(null, data);
                    });
    });  
}

// Add profile details
const createProfile = function(username, profileObj) {
    // Add/modify profile model
    let userRegData = profileObj;
    let profileData = new ProfileModel(profileDataModel.profileDataModel(profileObj));
    console.log("About to create profile with details: ", profileData);
    return new Promise((resolve, reject) => {
        profileData.save(function(err, data) {
            if (err) {
                logger.error('Failed to save profile, error: ', err);
                reject(err);
            } else {
                logger.info('profile data added successfully');
                logger.info('Graph Model Creation started');

                //Graph model creation only for candidates
                if (profileObj.personalInfo.role.toLowerCase() == profileConstant.USER_ROLE.CANDIDATES) {
                    analysisFeeder.publishForProfileAnalysis(username,
                        userRegData,
                        // resolve({ msg: 'Profile data Added successfully' });
                        'POST', profileConstant.SECTION_TO_TOPIC_MAP.USER_REG,
                        function(err, result) {
                            if (err) {
                                reject({ msg: 'Profile data Not Added successfully' });
                            } else {
                                resolve({ msg: 'Profile data Added successfully' });
                            }
                        });
                } else {
                    // inserts profile details
                    resolve({ msg: 'Profile data Added successfully' });
                }
            }
        });
    });
};

const editProfile = function(profileData, username, sectionName) {
    let obj = {};
    obj[sectionName] = profileData;
    console.log("Trying to update ", obj);
    return new Promise((resolve, reject) => {
        ProfileModel.update({ username: username }, { $set: obj }, function(err, data) {
            if (err) {
                logger.error('Error in edit Profile ', err);
                reject(err);
            } else {
                logger.debug('Got Profile Data');
                // call method to run kafka pipeline
                // for particular profile section
                analysisFeeder.publishForProfileAnalysis(username,
                    profileData,
                    'PATCH',
                    sectionName,
                    function(err, result) {
                        if (err) {
                            logger.error("error in analyser", err);
                            reject(err);

                        } else {
                            logger.info("done in analyser");
                            resolve({ data: data });
                        }
                    });

                // inserts profile details

            }
        });
    });
};

const editProfilePic = function(pictureUrl, username) {
    console.log("Trying to update profile picture");
    return new Promise((resolve, reject) => {
        ProfileModel.update({ username: username }, { $set: {profilePic: pictureUrl} }, function(err, data) {
            if (err) {
                logger.error('Error in edit Profile Picture', err);
                reject(err);
            } else {
               logger.info('successfully edited the Profile Picture as ', pictureUrl);
            }
        });
    });
};


const deletePerofile = function(profileObj) {};

module.exports = {
    getProfile: getProfile,
    findProfiles: findProfiles,
    createProfile: createProfile,
    editProfile: editProfile,
    editProfilePic:editProfilePic,
    deletePerofile: deletePerofile
};
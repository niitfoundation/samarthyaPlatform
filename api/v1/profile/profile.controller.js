const UserModel = require('./../users/users.entity');
const logger = require('./../../../logs/logger');
const profileModel = require('./profile.entity');
/*
 *
 */

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
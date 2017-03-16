const userModel = require('./profile.entity');
/*
 *
 */

const addProfileDetails = function(profileObj) {

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
                reject(err);
            } else {
                resolve(data);
            }
        });
    });

}

module.exports = {
    addProfileDetails: addProfileDetails
}
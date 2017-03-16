const userModel = require('./users.entity');
/*
 *
 */

const registerNewUser = function(userObj) {

    var userDetails = {
        username: userObj.username,
        password: userObj.password,
        role: userObj.role,
        status: "Active",
        lastLoginOn: Date.now(),
        createdOn: Date.now(),
        updatedOn: Date.now()
    };
    let userData = new userModel(userDetails);

    //insert the data into db using promise
    return new Promise((resolve, reject) => {
        userData.save(function(err, data) {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });

}

module.exports = {
    registerNewUser: registerNewUser
}
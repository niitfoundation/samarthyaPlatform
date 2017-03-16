const userModel = require('./../users/users.entity');
/*
 *
 */

const registerNewCoordinates = function(coordinateObj) {

    var coordinateDetails = {
        username: coordinateObj.username,
        password: coordinateObj.password,
        role: coordinateObj.role,
        status: "Active",
        lastLoginOn: Date.now(),
        createdOn: Date.now(),
        updatedOn: Date.now()
    };
    let coordinateData = new userModel(coordinateDetails);

    //insert the data into db using promise
    return new Promise((resolve, reject) => {
        coordinateData.save(function(err, data) {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });

}

module.exports = {
    registerNewCoordinate: registerNewCoordinate
}
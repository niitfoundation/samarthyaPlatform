const coordinateModel = require('./../users/users.entity');
const logger = require('./../../../logs/logger');

/*
 *
 */

const registerNewCoordinate = function(coordinateObj) {
    logger.debug('Get coordinateObj and store into coordinateDetails');
    var coordinateDetails = {
        username: coordinateObj.username,
        password: coordinateObj.password,
        role: coordinateObj.role,
        status: "Active",
        lastLoginOn: Date.now(),
        createdOn: Date.now(),
        updatedOn: Date.now()
    };
    let coordinateData = new coordinateModel(coordinateDetails);

    //insert the data into db using promise
    return new Promise((resolve, reject) => {
        coordinateData.save(function(err, data) {
            if (err) {
                logger.error('coordinateData not added sucessfully'+err);
                reject(err);
            } else {
                logger.info('coordinateData added sucessfully');
                resolve(data);
            }
        });
    });

}

module.exports = {
    registerNewCoordinate: registerNewCoordinate
}
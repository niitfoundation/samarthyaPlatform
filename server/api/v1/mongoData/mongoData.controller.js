const logger = require('./../../../../applogger');
const resources=require('./../resources/resources.entity');
/*
 *authenticate new user and adding profile details
 */
const addData = function(userObj) {
    // insert the data into db using promise
    let userData=new resources(userObj);
    return new Promise((resolve, reject) => {
        userData.save(function(err, data) {
            if (err) {
                logger.error('userData not added sucessfully' + err);
                reject(err);
            } else {
                // after successful enter the credentials data inserts profile details
                    resolve({ success: true, msg: ' Successfully Added' });
            }
        });
    });
};

module.exports = {
    addData: addData
};

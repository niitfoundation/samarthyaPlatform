const UserModel = require('./users.entity');
const logger = require('./../../../../applogger');
/*
 *
 */
const registerNewUser = function(userObj) {
    logger.debug('Get userObj and store into userDetails');
    var userDetails = {
        username: userObj.userCredentialsData.username,
        password: userObj.userCredentialsData.password,
        role: userObj.userCredentialsData.role,
        status: 'Active',
        lastLoginOn: Date.now(),
        createdOn: Date.now(),
        updatedOn: Date.now()
    };
    let userData = new UserModel(userDetails);

    // insert the data into db using promise
    return new Promise((resolve, reject) => {
        userData.save(function(err, data) {
            if (err) {
                logger.error('userData not added sucessfully' + err);
                reject(err);
            } else {
<<<<<<< HEAD
                logger.info('userData added sucessfully');
                resolve({msg:"User Added Successfully",data:data,success:true});
=======
                resolve(data);
>>>>>>> a04d161a2ae3e1c73c1a16bb719f831e7f224320
            }
        });
    });
};

module.exports = {
    registerNewUser: registerNewUser
};

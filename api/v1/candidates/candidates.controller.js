const CandidateModel = require('./../users/users.entity');
const logger = require('./../../../logs/logger');
/*
 *
 */
const registerNewCandidate = function(candidateObj) {
    logger.debug('Get candidateObj and store into candidateDetails');
    var candidateDetails = {
        username: candidateObj.username,
        password: candidateObj.password,
        role: candidateObj.role,
        status: "Active",
        lastLoginOn: Date.now(),
        createdOn: Date.now(),
        updatedOn: Date.now()
    };
    let candidateData = new CandidateModel(candidateDetails);

    //insert the data into db using promise
    return new Promise((resolve, reject) => {
        candidateData.save(function(err, data) {
            if (err) {
                logger.error('candidateData not added sucessfully'+err);
                reject(err);
            } else {
                logger.info('candidateData added sucessfully');
                resolve(data);
            }
        });
    });

}

module.exports = {
    registerNewCandidate: registerNewCandidate
}
const CandidateModel = require('./../users/users.entity');
/*
 *
 */
const registerNewCandidate = function(candidateObj) {

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
                reject(err);
            } else {
                resolve(data);
            }
        });
    });

}

module.exports = {
    registerNewCandidate: registerNewCandidate
}
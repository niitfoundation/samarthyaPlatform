/*
 * Add/modify profile schema values
 */
var profileDataModel = function (profileObj) {
    var profileDetails = {
        username: profileObj.username,
        profession: profileObj.profession,
        centerCode: profileObj.placementCenter,
        createdOn: Date.now(),
        createdBy: profileObj.createdBy,
        personalinfo: {
            fname: profileObj.fname,
            lname: profileObj.lname,
            gender: profileObj.gender,
            email: profileObj.email,
            role: profileObj.role,
            contact: [{
                I: profileObj.mobileNumber,
            }],
            identity: [{
                aadharNumber: profileObj.aadharNumber,
                registrationID: profileObj.registerID,
            }],
            address: [{
                landmark: profileObj.landmark,
                district: profileObj.district,
                state: profileObj.state,
                pinCode: profileObj.pincode
            }],
        },
    };
    return profileDetails;
}


module.exports = {
    profileDataModel: profileDataModel
}
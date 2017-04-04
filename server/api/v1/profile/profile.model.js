/*
 * Add/modify profile schema values
 */
var profileDataModel = function (profileObj) {
    var profileDetails = {
        username: profileObj.email,
        profession: profileObj.profession,
        centerCode: profileObj.placementCenter,
        createdOn: Date.now(),
        createdBy: profileObj.createdBy,
        updatedBy: profileObj.createdBy,
        updatedOn: Date.now(),
        profilePic: profileObj.profilePic,
        personalInfo: {
            name: profileObj.name,
            fname: profileObj.fname,
            lname: profileObj.lname,
            gender: profileObj.gender,
            email: profileObj.email,
            role: profileObj.role,
            dob: profileObj.dob,
            contact: {
                I: profileObj.mobileNumber,
            },
            identity: profileObj.identity,
            address: {
                address1: profileObj.address1,
                address2: profileObj.address2,
                landmark: profileObj.landmark,
                district: profileObj.district,
                state: profileObj.state,
                pincode: profileObj.pincode
            },
        },
    };
    return profileDetails;
};

module.exports = {
    profileDataModel: profileDataModel
};
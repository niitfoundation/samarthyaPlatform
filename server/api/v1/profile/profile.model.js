/*
 * Add/modify profile schema values
 */
var profileDataModel = function (profileObj) {
    var profileDetails = {
        username: profileObj.username,
        profession: profileObj.profession,
        centerCode: profileObj.centerCode,
        createdOn: Date.now(),
        createdBy: profileObj.createdBy,
        updatedBy: profileObj.createdBy,
        updatedOn: Date.now(),
        profilePic: profileObj.profilePic,
        summary: profileObj.summary,
        personalInfo: {
            name: profileObj.personalInfo.name,
            fname: profileObj.personalInfo.fname,
            lname: profileObj.personalInfo.lname,
            gender: profileObj.personalInfo.gender,
            email: profileObj.personalInfo.email,
            role: profileObj.personalInfo.role,
            dob: profileObj.personalInfo.dob,
            contact:profileObj.personalInfo.contact,
            identity: profileObj.personalInfo.identity,
            address: profileObj.personalInfo.address,
        }
    };
    return profileDetails;
};


module.exports = {
    profileDataModel: profileDataModel,
};
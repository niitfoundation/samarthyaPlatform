const BulkModel = require('./profileImport.entity');
const logger = require('./../../../../applogger');
const analysisFeeder = require('./../analysisFeeder/index');
const profileConstant = require('./../../../../config/profileAnalysisConfig');
const ProfileModel = require('./../profile/profile.entity');


const addProfileImport = function(bulkData, fileName, remarks, username) {

    var data = {
        importData: bulkData,
        remarks: remarks,
        importFile: fileName,
        requestedOn: Date.now(),
        requestedBy: username

    };
    let bulk = new BulkModel(data);

    // insert the data into db using promise
    return new Promise((resolve, reject) => {
        bulk.save(function(err, data) {
            if (err) {
                logger.error('userData not added sucessfully' + err);
                reject(err);
            } else {
                analysisFeeder.publishForProfileAnalysis("none", data['_id'],
                    // resolve({ msg: 'Profile data Added successfully' });
                    'POST', profileConstant.SECTION_TO_TOPIC_MAP.PROFILE_IMPORT,
                    function(err, result) {
                        if (err) {
                            reject({ msg: 'Profile data Not Added successfully' });
                        } else {
                            resolve({ msg: 'Profile data Added successfully' });
                        }
                    });
            }
        });
    });
}

const getImportHistory = function() {

    return new Promise((resolve, reject) => {
        BulkModel.find({}, {
            "importFile": 1,
            "remarks": 1,
            "importResult": 1,
            "requestedOn": 1
        }, function(err, data) {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
};

const getFailureImportHistory = function(documentId) {
    return new Promise((resolve, reject) => {
        BulkModel.find({
            "_id": documentId
        }, {
            _id: 0,
            importData: {
                $elemMatch: {
                    importStatus: "failure"
                }
            }
        }, function(err, datas) {
            if (err) {
                reject(err);
            } else {
                resolve({ data: datas[0].importData });
            }
        });
    });
};
const createFullProfile = function(username, profileObj) {
    //create full profile from bulkImport
    let profileData = new ProfileModel(profileObj);
    console.log("About to create the full profile ", profileData);
    return new Promise((resolve, reject) => {
        profileData.save(function(err, data) {
            if (err) {
                logger.error('profile Import data not added successfully, error: ', err);
                reject(err);
            } else {
                logger.info('profile Import data added successfully');
                logger.info('Graph Model Creation started')
                    //Graph model creation only for candidates
                if (profileObj.personalInfo.role.toLowerCase() == profileConstant.USER_ROLE.CANDIDATES) {
                    analysisFeeder.publishForProfileAnalysis(username,
                        profileObj,
                        // resolve({ msg: 'Profile data Added successfully' });
                        'POST', profileConstant.SECTION_TO_TOPIC_MAP.USER_REG,
                        function(err, result) {
                            if (err) {
                                reject({ msg: 'Profile Import data Not Added successfully' });
                            } else {
                                resolve({ msg: 'Profile Import data Added successfully' });
                            }
                        });
                } else {
                    // inserts profile details
                    resolve({ msg: 'Profile Import data Added successfully' });
                }
            }
        });
    });
}
module.exports = {
    getImportHistory: getImportHistory,
    getFailureImportHistory: getFailureImportHistory,
    addProfileImport: addProfileImport,
    createFullProfile: createFullProfile

};
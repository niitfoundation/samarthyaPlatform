const ProfileImportModel = require('./../api/v1/profileImport/profileImport.entity');
const logger = require('./../../applogger');
const async = require('async');
const userCtrl = require('./../api/v1/users/users.controller');
const profileCtrl = require('./../api/v1/profile/profile.controller');
const analysisFeeder = require('./../api/v1/analysisFeeder/index');
const config = require('./../../config/profileAnalysisConfig')
require('../../server/services/webapp.service').setupMongooseConnections();

const importProfile = function(documentId, importCallback) {

    ProfileImportModel.findOne({
        "_id": documentId
    }, function(err, datas) {
        if (err) {
            logger.error(err);
        } else {
            let profileArray = datas.importData;
            importDatas(profileArray, documentId, importCallback);
        }
    });

}

const importDatas = function(profileArray, documentId, importCallback) {

    ProfileImportModel.update({
        '_id': documentId
    }, {
        $set: {
            'importResult.total': profileArray.length
        }
    }, function(err, data) {
        if (err) {
            logger.error(err);
        } else {
            logger.info('updted total profiles');
        }
    });
    async.mapSeries(profileArray, function(instance, asyncCallback) {
        importDataInstance(instance, documentId, asyncCallback);
    }, importCallback);
}

const importDataInstance = function(instance, documentId, asyncCallback) {
    async.waterfall([
        function(callback) {
            let profileImportData = {
                userCredentialsData: {
                    username: instance.username,
                    password: instance.password,
                    role: instance.role,
                },
                profileData: instance
            }
            userCtrl.registerNewUser(profileImportData, 'profileImport').then((data) => {
                callback(null, data);
            }, (err) => {
                callback(err, null)
            });
        },
        function(prevStepResult, callback) {

            let sectionNames = config.SECTION_NAMES;
            analysisFeeder.publishForMultipleProfileAnalysis(instance.username, instance, 'POST', sectionNames, function(err, result) {
                if (err)
                    callback(err, null);
                else
                    callback(null, result);
            });
            // async.series(sectionName, function(section, sectionCallback) {
            //     profileCtrl.editProfile(instance[section], instance.username, section).then((data) => {
            //         sectionCallback(null, "success");
            //     }, (err) => {
            //         callback(err, null);
            //         return;
            //     });
            // }, function(err, result) {
            //     callback(err, result);
            // })
        }
    ], function(err, result) {
        if (err) {
            logger.error('Error in profile import ', err);

            ProfileImportModel.update({
                '_id': documentId,
                'importData.personalInfo.contact.I': instance.personalInfo.contact.I
            }, {
                $set: {
                    'importData.$.importStatus': 'failure',
                },
                $inc: {
                    'importResult.failed': 1
                }
            }, function(err, data) {
                if (err) {
                    logger.error('Error in adding import Failed status');
                } else {
                    logger.info('failure Status added success');
                }
            });
            asyncCallback(err, null);
        } else {
            ProfileImportModel.update({
                '_id': documentId,
                'importData.personalInfo.contact.I': instance.personalInfo.contact.I
            }, {
                $set: {
                    'importData.$.importStatus': 'success',
                },
                $inc: {
                    'importResult.success': 1
                }
            }, function(err, data) {
                if (err) {
                    logger.error('Error in adding import Failed status');
                } else {
                    logger.info('success Status added success');
                }
            });

            asyncCallback(null, result);
        }

    });
}

module.exports = {
    importProfile: importProfile
}
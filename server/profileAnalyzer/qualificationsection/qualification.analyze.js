const logger = require('./../../../applogger');
const async = require('async');
const qualificationModel = require('./qualification.graphmodel');

const analyze = function (profileUser, qualificationColln, callback) {
    if (!profileUser || !profileUser.username || !qualificationColln || !Array.isArray(qualificationColln) || qualificationColln.length <= 0) {
        logger.error('No data found to analyze');
        // If data is not valid, return back without processing
        return callback({ error: 'No data found to analyze' }, null);
    }
    logger.info('Proceeding to analyze qualification..!');

    let results = [];
    qualificationColln.forEach(function (element, index) {
        results.push(function (callback) {
            analyzequalificationInstance(profileUser.username, element, index, function (qualificationObj) {
                callback(null, qualificationObj);
            });
        });
    });
    console.log(results);
    async.parallel(results, function (err, result) {
        if (err) {
            logger.error(err);
            return err;
        }
        console.log(result);
        callback(result);
    });
    // analyzequalificationInstance(profileUser.username, qualificationColln[0], callback);
};

analyzequalificationInstance = function (profileUser, qualification, index, callback) {
    async.parallel([
        function (callback) {
            let attributes = {
                result: qualification.result.score + qualification.result.unit,
                startYear: qualification.batch.startDate,
                endYear: qualification.batch.endDate
            };
            // Establish relation between organization and person ROLE AND DURATION

            qualificationModel.relatePersonToQualification(profileUser, qualification.name, index, attributes, function (PersonToQualificationObj) {
                callback(null, PersonToQualificationObj);
            },
                function (err) {
                    callback(err, null);
                });
        },
        function (callback) {
            let attributes = {
                degree: qualification.academictype,
                startDate: qualification.batch.startDate,
                endDate: qualification.batch.endDate
            };
            // Establish relation between person and jobrole
            qualificationModel.relatePersonToInstitute(profileUser, qualification.institute, index, attributes, function (PersonToInstituteObj) {
                callback(null, PersonToInstituteObj);
            },
                function (err) {
                    callback(err, null);
                });
        },
        function (callback) {
            // Establish relation between person and working location
            let attributes = {

            };
            qualificationModel.relatePersonToSkill(profileUser, qualification.subject, index, attributes, function (PersonToSkillObj) {
                console.log(PersonToSkillObj);
                callback(null, PersonToSkillObj);
            },
                function (err) {
                    callback(err, null);
                });
        },
        function (callback) {
            // Establish relation between person and working location
            let attributes = {

            };
            qualificationModel.relateQualificationToSkill(qualification.name, qualification.subject, index, attributes, function (QualificationToSkillObj) {
                console.log(QualificationToSkillObj);
                callback(null, QualificationToSkillObj);
            },
                function (err) {
                    callback(err, null);
                });
        },
        function (callback) {
            // Establish relation between person and working location
            let attributes = {

            };
            qualificationModel.relateQualificationToSkill(qualification.name, qualification.subject, index, attributes, function (QualificationToSkillObj) {
                console.log(QualificationToSkillObj);
                callback(null, QualificationToSkillObj);
            },
                function (err) {
                    callback(err, null);
                });
        },
        function (callback) {
            // Establish relation between person and working location
            let attributes = {

            };
            qualificationModel.relateInstituteToQualification(qualification.institute, qualification.name, index, attributes, function (InstituteToQualificationObj) {
                console.log(InstituteToQualificationObj);
                callback(null, InstituteToQualificationObj);
            },
                function (err) {
                    callback(err, null);
                });
        }
    ], function (err, result) {
        if (err) {
            logger.error(err);
            return err;
        }
        callback(result);
    });
};

module.exports = {
    analyze: analyze
};

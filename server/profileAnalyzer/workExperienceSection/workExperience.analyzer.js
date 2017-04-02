const logger = require('./../../../applogger');
const async = require('async');
const workExperienceModel = require('./workExperience.graphmodel');

const analyze = function (profileUser, workExperienceColln, callback) {
    if (!profileUser || !profileUser.username || !workExperienceColln || !Array.isArray(workExperienceColln) || workExperienceColln.length <= 0) {
        logger.error('No data found to analyze');
        // If data is not valid, return back without processing
        return callback({ error: 'No data found to analyze' }, null);
    }
    logger.info('Proceeding to analyze work experience..!');

    let results = [];
    workExperienceColln.forEach(function (element, index) {
        results.push(function (callback) {
            analyzeWorkExperienceInstance(profileUser.username, element, index, function (workExperienceObj) {
                callback(null, workExperienceObj);
            });

        });
    });
    console.log(results);
    async.parallel(results, function (err, result) {
        if (err) {
            console.log(err);
            return err;
        }
        console.log(result);
        callback(result);

    })
    // analyzeWorkExperienceInstance(profileUser.username, workExperienceColln[0], callback);
}

analyzeWorkExperienceInstance = function (profileUser, workExperience, index, callback) {
    async.parallel([
        function (callback) {
            let attributes = {
                roles: workExperience.jobRole,
                duration: workExperience.duration,
                iscurrent: workExperience.iscurrent
            };
            // Establish relation between organization and person ROLE AND DURATION

            workExperienceModel.relatePersonToOrganisation(profileUser, workExperience.workplace, index, attributes, function (PersonToOrganisationObj) {
                callback(null, PersonToOrganisationObj);
            },
                function (err) {
                    callback(err, null);
                });
        },
        function (callback) {
            let attributes = {
                organization: workExperience.workplace,
                duration: workExperience.duration,
            };
            // Establish relation between person and jobrole
            workExperienceModel.releatePersonToJobRole(profileUser, workExperience.jobRole, index, attributes, function (PersonToJobRoleObj) {
                callback(null, PersonToJobRoleObj);
            },
                function (err) {
                    callback(err, null);
                });
        },
        function (callback) {
            // Establish relation between person and working location
            let attributes = {
                iscurrent: workExperience.iscurrent,
                organization: workExperience.workplace
            };
            workExperienceModel.releatePersonToWorkingLocation(profileUser, workExperience.location, index, attributes, function (PersonToWorkingLocationObj) {
                console.log(PersonToWorkingLocationObj);
                callback(null, PersonToWorkingLocationObj);
            },
                function (err) {
                    callback(err, null);
                });
        }
    ], function (err, result) {
        if (err) {
            console.log(err);
            return err;
        }
        callback(result);
    });
};

module.exports = {
    analyze: analyze
};

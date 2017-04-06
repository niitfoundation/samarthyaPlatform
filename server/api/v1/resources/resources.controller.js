const resourcesModel = require('./resources.entity');
const logger = require('./../../../../applogger');
/*
 *
 */
// get Languages
const getLanguage = function () {
    logger.debug('getLanguage function invoke');
    return new Promise((resolve, reject) => {
        resourcesModel.distinct('languages', function (err, data) {
            if (err) {
                logger.error('data not found');
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
};
// get sectionConfig
const getSectionConfig = function () {
    logger.debug('get sectionConfig function invoke');
    return new Promise((resolve, reject) => {
        resourcesModel.distinct('profileSectionViewConfig', function (err, data) {
            if (err) {
                logger.error('data not found');
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
};

// get center
const getPlacementCenter = function () {
    return new Promise((resolve, reject) => {
        resourcesModel.distinct('placementCenter', function (err, data) {
            if (err) {
                logger.error('data not found');
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
};


// get location
const getProfession = function () {
    return new Promise((resolve, reject) => {
        resourcesModel.distinct('profession', function (err, data) {
            if (err) {
                logger.error('data not found');
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
};

// get Roles
const getRoles = function () {
    return new Promise((resolve, reject) => {
        resourcesModel.distinct('roles', function (err, data) {
            if (err) {
                logger.error('data not found');
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
};

module.exports = {
    getLanguage: getLanguage,
    getPlacementCenter: getPlacementCenter,
    getProfession: getProfession,
    getRoles: getRoles,
    getSectionConfig: getSectionConfig

};

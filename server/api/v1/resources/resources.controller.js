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

// edit Language
const editLanguage = function (language) {
    logger.debug('editLanguage function invoke');
    return new Promise((resolve, reject) => {
        resourcesModel.update({ 'languages.code': language.code }, { $set: { "languages.$.name": language.name, "languages.$.nativeName": language.nativeName } }, function (err, data) {
            if (err) {
                logger.error('editing the language is error');
                reject(err);
            }
            else {
                logger.info('editing the language is fine');
                resolve({ data: data, success: true });
            }
        })
    });
};

// delete Language
const deleteLanguage = function (langCode,langName) {
    logger.debug('deleteLanguage function invoke');
    return new Promise((resolve, reject) => {
        resourcesModel.update({}, { $pull: { 'languages': { 'code': langCode,'name':langName } } }, function (err, data) {
            if (err) {
                logger.error('deleting the language is error');
                reject(err);
            }
            else {
                logger.info('deleting the language is fine');
                resolve({ data: data, success: true });
            }
        })
    });
};

// add Language
const addLanguage = function (langCode) {
    logger.debug('addLanguage function invoke');
    return new Promise((resolve, reject) => {
        resourcesModel.update({}, { $push: { 'languages': langCode } }, function (err, data) {
            if (err) {
                logger.error('addLanguage the language is error');
                reject(err);
            }
            else {
                logger.info('addLanguage the language is fine');
                resolve({ data: data, success: true });
            }
        })
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
    getSectionConfig: getSectionConfig,
    editLanguage: editLanguage,
    deleteLanguage: deleteLanguage,
    addLanguage: addLanguage

};

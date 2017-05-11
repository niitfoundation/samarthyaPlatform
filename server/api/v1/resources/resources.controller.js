const resourcesModel = require('./resources.entity');
const logger = require('./../../../../applogger');
/*
 *
 */
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

module.exports = {
    getSectionConfig: getSectionConfig
};

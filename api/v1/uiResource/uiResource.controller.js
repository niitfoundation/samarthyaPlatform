const uiModel = require("./uiResource.entity");
const logger = require('./../../../logs/logger');
/*
 *
 */

const getLanguage = function() {
    logger.debug('Return languages data');
    return new Promise((resolve, reject) => {
        uiModel.distinct("languages", function(err, data) {
            if (err) {
                logger.error('Languages not found'+err);
                reject(err);
            } else {
                logger.info('Languages successfully found and resolved');
                resolve(data)
            }

        });
    });
}
const getNavList = function() {
    logger.debug('Return navList data');
    return new Promise((resolve, reject) => {
        uiModel.distinct("navList", function(err, data) {
            if (err) {
                logger.error('NavList data not found'+err);
                reject(err);
            } else {
                logger.info('NavList data successfully found and resolved');
                resolve(data)

            }

        });
    });
}
module.exports = { getLanguage: getLanguage };
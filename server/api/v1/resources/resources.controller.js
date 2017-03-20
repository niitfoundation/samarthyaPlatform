const resourcesModel = require('./resources.entity');
/*
 *
 */
// get Languages
const getLanguage = function() {
    return new Promise((resolve, reject) => {
        resourcesModel.distinct('languages', function(err, data) {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
};

module.exports = { getLanguage: getLanguage };
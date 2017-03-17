const uiModel = require('./resources.entity');
/*
 *
 */
// get Languages
const getLanguage = function() {
    return new Promise((resolve, reject) => {
        uiModel.distinct('languages', function(err, data) {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
};
module.exports = { getLanguage: getLanguage };
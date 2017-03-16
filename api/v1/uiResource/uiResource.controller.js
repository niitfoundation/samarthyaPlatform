const uiModel = require("./uiResource.entity");
/*
 *
 */

const getLanguage = function() {

    return new Promise((resolve, reject) => {
        uiModel.distinct("languages", function(err, data) {
            if (err) {
                reject(err);
            } else {
                resolve(data)

            }

        });
    });
}
const getNavList = function() {

    return new Promise((resolve, reject) => {
        uiModel.distinct("navList", function(err, data) {
            if (err) {
                reject(err);
            } else {
                resolve(data)

            }

        });
    });
}
module.exports = { getLanguage: getLanguage };
const analyze = function (personalInfo, callback) {
    if (!personalInfo || !(Array.isArray(personalInfo)) || personalInfo.length < 0) {
        callback({ error: 'No data found' }, null);
    }
    callback(null, {});
};

module.exports = {
    analyze: analyze
};

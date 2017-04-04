const sectionAnalyzerBase = require('./sectionAnalysis.service');

const analyzer = function (msgObj) {
    let promise = new Promise(function (resolve, reject) {
        const analyzerModule = require(
            '../server/profileAnalyzer/jobPreferenceSection');

        let profileUser = msgObj.username;
        let jobPreferences = msgObj.profile['jobPreferences'];

        analyzerModule
            .analyze(profileUser, jobPreferences,
                function (err, result) {
                    if (err) {
                        reject(err);
                        return;
                    }

                    resolve(result);
                    return;
                });
    });

    return promise;
}

const execute = function () {
    let subscribeTopic = '';
    let consumerGroup = '';
    const processor = {
        name: 'JobPreferenceAnalyzer',
        process: analyzer
    }

    sectionAnalyzerBase.execute(subscribeTopic, consumerGroup, processor);

}

execute();
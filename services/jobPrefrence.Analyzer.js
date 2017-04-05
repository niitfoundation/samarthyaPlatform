const sectionAnalyzerBase = require('./sectionAnalysis.service');
const config = require('./../config/profileAnalysisConfig');


const analyzer = function(msgObj) {
    let promise = new Promise(function(resolve, reject) {
        const analyzerModule = require(
            '../server/profileAnalyzer/jobPreferenceSection/jobPreference.analyzer');

        let profileUser = { username: msgobj.username };
        let jobPrefrence = msgobj.profile.jobPrefrence;
        analyzerModule
            .analyze(profileUser, jobPrefrence,
                function(err, result) {
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

const execute = function() {
    let subscribeTopic = config.SECTION_TO_TOPIC_MAP['JOB_PREFRENCE'];
    let consumerGroup = config.CONSUMER_GROUP;
    const processor = {
        name: config.PROCESSOR_NAME['JOB_PREFRENCE'],
        process: analyzer
    }

    // sectionAnalyzerBase.execute(subscribeTopic, consumerGroup, processor);
    sectionAnalyzerBase.execute(subscribeTopic, consumerGroup, processor);
}

execute();
module.exports = analyzer;
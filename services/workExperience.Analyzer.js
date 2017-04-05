const sectionAnalyzerBase = require('./sectionAnalysis.service');
const config = require('./../config/profileAnalysisConfig');

const analyzer = function(msgObj) {
    let promise = new Promise(function(resolve, reject) {
        const analyzerModule = require(
            '../server/profileAnalyzer/workExperienceSection/workExperience.analyzer');

        let profileUser = { username: msgObj.username };
        let workExperience = msgObj.profile.workExperience;
        analyzerModule
            .analyze(profileUser, workExperience,
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
    let subscribeTopic = config.SECTION_TO_TOPIC_MAP['WORK_EXPERIENCE'];
    let consumerGroup = config.CONSUMER_GROUP;

    const processor = {
        name: config.PROCESSOR_NAME['WORK_EXPERIENCE'],
        process: analyzer
    };

    sectionAnalyzerBase.execute(subscribeTopic, consumerGroup, processor);
}

execute();
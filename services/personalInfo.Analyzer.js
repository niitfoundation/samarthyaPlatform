const sectionAnalyzerBase = require('./sectionAnalysis.service');
const config = require('./../config/profileAnalysisConfig');


const analyzer = function(msgObj) {
    let promise = new Promise(function(resolve, reject) {
        const analyzerModule = require(
            '../server/profileAnalyzer/personalInfoSection/personalInfo.analyzer')

        let profileUser = { username: msgobj.username };
        let personalInfo = msgobj.profile.personalInfo;
        analyzerModule
            .analyze(profileUser, personalInfo,
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
    let subscribeTopic = config.SECTION_TO_TOPIC_MAP['PERSONAL_INFO'];
    let consumerGroup = config.CONSUMER_GROUP;
    const processor = {
        name: config.PROCESSOR_NAME['PERSONAL_INFO'],
        process: analyzer
    }

    // sectionAnalyzerBase.execute(subscribeTopic, consumerGroup, processor);
    sectionAnalyzerBase.execute(subscribeTopic, consumerGroup, processor);
}

execute();
module.exports = analyzer;
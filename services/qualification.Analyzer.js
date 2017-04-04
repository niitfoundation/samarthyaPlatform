const sectionAnalyzerBase = require('./sectionAnalysis.service');
const config = require('./../config/profileAnalysisConfig');


const analyzer = function(msgObj) {
    let promise = new Promise(function(resolve, reject) {
        const analyzerModule = require(
            '../server/profileAnalyzer/qualificationsection/qualification.analyzer');

        let profileUser = { username: msgobj.username };
        let qualification = msgobj.profile.qualification;
        analyzerModule
            .analyze(profileUser, qualification,
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
    let subscribeTopic = config.SECTION_TO_TOPIC_MAP['QUALIFICATION'];
    let consumerGroup = config.CONSUMER_GROUP;
    const processor = {
        name: config.PROCESSOR_NAME['qualification'],
        process: analyzer
    }

    // sectionAnalyzerBase.execute(subscribeTopic, consumerGroup, processor);
    sectionAnalyzerBase.execute(subscribeTopic, consumerGroup, processor);
}

execute();
module.exports = analyzer;
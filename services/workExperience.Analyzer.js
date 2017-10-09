const sectionAnalyzerBase = require('./sectionAnalysis.service');
const config = require('./../config/profileAnalysisConfig');

const analyzer = function(msgObj) {
    let promise = new Promise(function(resolve, reject) {
        const analyzerModule = require(
            '../server/profileAnalyzer/workExperienceSection/workExperience.analyzer');

        let data = JSON.parse(msgObj.value);

        analyzerModule
            .analyze(data.userName, data.payload,
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
    let consumerGroup = config.CONSUMER_GROUP.WORK_EXPERIENCE;

    const processor = {
        name: config.PROCESSOR_NAME['WORK_EXPERIENCE'],
        process: analyzer
    };

    sectionAnalyzerBase.execute(subscribeTopic, consumerGroup, processor);
}

execute();
module.exports = analyzer;
const sectionAnalyzerBase = require('./sectionAnalysis.service');
const config = require('./../config/profileAnalysisConfig');
const logger = require('./../applogger');


const analyzer = function(msgObj) {
    let promise = new Promise(function(resolve, reject) {
        const analyzerModule = require(
            '../server/profileAnalyzer/userRegistration/userRegistration.analyzer');

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
    let subscribeTopic = config.SECTION_TO_TOPIC_MAP['USER_REG'];
    let consumerGroup = config.CONSUMER_GROUP.USER_REGISTRATION;
    const processor = {
        name: config.PROCESSOR_NAME.USER_REGISTRATION,
        process: analyzer
    };

    // sectionAnalyzerBase.execute(subscribeTopic, consumerGroup, processor);
    sectionAnalyzerBase.execute(subscribeTopic, consumerGroup, processor);
};

execute();
module.exports = analyzer;
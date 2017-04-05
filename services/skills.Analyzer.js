const sectionAnalyzerBase = require('./sectionAnalysis.service');
const config = require('./../config/profileAnalysisConfig');



const analyzer = function(msgObj) {
    let promise = new Promise(function(resolve, reject) {
        const analyzerModule = require(
            '../server/profileAnalyzer/skillSection/skills.analyzer');

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
    let subscribeTopic = config.SECTION_TO_TOPIC_MAP['SKILLS'];
    let consumerGroup = config.CONSUMER_GROUP.SKILLS;
    const processor = {
        name: config.PROCESSOR_NAME['skills'],
        process: analyzer
    }

    // sectionAnalyzerBase.execute(subscribeTopic, consumerGroup, processor);
    sectionAnalyzerBase.execute(subscribeTopic, consumerGroup, processor);
}

execute();
module.exports = analyzer;
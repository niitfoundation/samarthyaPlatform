const sectionAnalyzerBase = require('./sectionAnalysis.service');
const config = require('./../config/profileAnalysisConfig');


const analyzer = function(msgObj) {
    let promise = new Promise(function(resolve, reject) {
        const analyzerModule = require(
            '../server/profileAnalyzer/projectsSection/projects.analyzer');

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
    let subscribeTopic = config.SECTION_TO_TOPIC_MAP['PROJECTS'];
    let consumerGroup = config.CONSUMER_GROUP.PROJECTS;
    const processor = {
        name: config.PROCESSOR_NAME['PROJECTS'],
        process: analyzer
    }

    // sectionAnalyzerBase.execute(subscribeTopic, consumerGroup, processor);
    sectionAnalyzerBase.execute(subscribeTopic, consumerGroup, processor);
}

execute();
module.exports = analyzer;
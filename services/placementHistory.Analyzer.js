const sectionAnalyzerBase = require('./sectionAnalysis.service');
const config = require('./../config/profileAnalysisConfig');

const analyzer = function(msgObj) {
    let promise = new Promise(function(resolve, reject) {
        const analyzerModule = require(
            '../server/profileAnalyzer/placementHistorySection/placementHistory.analyzer');

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
    let subscribeTopic = config.SECTION_TO_TOPIC_MAP['PLACEMENT_HISTORY'];
    let consumerGroup = config.CONSUMER_GROUP.PLACEMENT_HISTORY;

    const processor = {
        name: config.PROCESSOR_NAME['PLACEMENT_HISTORY'],
        process: analyzer
    };

    sectionAnalyzerBase.execute(subscribeTopic, consumerGroup, processor);
}

execute();
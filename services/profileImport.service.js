const sectionAnalyzerBase = require('./sectionAnalysis.service');
const config = require('./../config/profileAnalysisConfig');


const analyzer = function(msgObj) {
    let promise = new Promise(function(resolve, reject) {
        const analyzerModule = require(
            '../server/profileImportModule/profileImport');
        let data = JSON.parse(msgObj.value);
            console.log("msgObj",data);

        analyzerModule
            .importProfile(data.payload,
                function(err, result) {
                    if (err) {
                        console.log("errrr")
                        reject(err);
                        return;
                    }
                    console.log("no err")
                    resolve(result);
                    return;
                });
    });

    return promise;
}

const execute = function() {
    let subscribeTopic = config.SECTION_TO_TOPIC_MAP['PROFILE_IMPORT'];
    let consumerGroup = config.CONSUMER_GROUP.PROFILE_IMPORT;
    const processor = {
        name: config.PROCESSOR_NAME['PROFILE_IMPORT'],
        process: analyzer
    }

    // sectionAnalyzerBase.execute(subscribeTopic, consumerGroup, processor);
    sectionAnalyzerBase.execute(subscribeTopic, consumerGroup, processor);
}

execute();
module.exports = analyzer;
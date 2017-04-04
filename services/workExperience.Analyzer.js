const sectionAnalyzerBase = require('./sectionAnalysis.service');
const config = require('./../config/profileAnalysisConfig');


const analyzer = function(msgObj) {
    let promise = new Promise(function(resolve, reject) {
        const analyzerModule = require(
            '../server/profileAnalyzer/workExperienceSection/workExperience.analyzer');

        msgobj = {
            username: 'Dheeren',
            profile: {
                workExperience: [{
                    workplace: 'Wipro',
                    jobRole: 'Developer',
                    location: 'Bangalore',
                    isCurrent: true,
                    duration: 2

                }]
            }
        };

        let profileUser = { username: msgobj.username };
        let workExperience = msgobj.profile.workExperience;
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
    console.log("WORK_EXPERIENCE section called");
    let subscribeTopic = config.SECTION_TO_TOPIC_MAP['WORK_EXPERIENCE'];
    let consumerGroup = config.CONSUMER_GROUP;

    const processor = {
        name: config.PROCESSOR_NAME['workexperience'],
        process: analyzer
    }

    // sectionAnalyzerBase.execute(subscribeTopic, consumerGroup, processor);
    sectionAnalyzerBase.execute(subscribeTopic, consumerGroup, processor)
}

execute();
module.exports = analyzer;
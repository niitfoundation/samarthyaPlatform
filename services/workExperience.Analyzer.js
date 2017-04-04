const sectionAnalyzerBase = require('./sectionAnalysis.service');

const analyzer = function(msgObj) {
    let promise = new Promise(function(resolve, reject) {
        const analyzerModule = require(
            '../server/profileAnalyzer/workExperienceSection/workExperience.analyzer');

        msgobj = {
            username: 'Dheeren',
            profile: [{
                workplace: 'Wipro',
                jobRole: 'Developer',
                location: 'Bangalore',
                isCurrent: true,
                duration: 2

            }]
        };

        let profileUser = { username: msgobj.username };
        let workExperience = msgobj.profile;
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
    let subscribeTopic = 'test';
    let consumerGroup = 'PersonalInfo';
    const processor = {
        name: 'PersonalInfoAnalyzer',
        process: analyzer
    }

    // sectionAnalyzerBase.execute(subscribeTopic, consumerGroup, processor);
    sectionAnalyzerBase.execute(subscribeTopic, consumerGroup, processor)
}

execute();
module.exports = analyzer;
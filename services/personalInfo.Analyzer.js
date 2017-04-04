const sectionAnalyzerBase = require('./sectionAnalysis.service');

const analyzer = function(msgObj) {
  let promise = new Promise(function(resolve, reject) {
    const analyzerModule = require(
      '../server/profileAnalyzer/personalInfoSection');

    let profileUser = msgObj.username;
    let personalInfo = msgObj.profile['personalInfo'];

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
  let subscribeTopic = '';
  let consumerGroup = '';
  const processor = {
    name: 'PersonalInfoAnalyzer',
    process: analyzer
  }

  sectionAnalyzerBase.execute(subscribeTopic, consumerGroup, processor);

}

execute();

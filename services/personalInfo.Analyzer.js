const sectionAnalyzerBase = require('./sectionAnalysis.service');

const analyzer = function(msgObj) {
  let promise = function(resolve, reject) {
    const analyzer = require(
      '../server/profileAnalyzer/personalInfoSection');

    let profileUser = msgObj.username;
    let personalInfo = msgObj.profile['personalInfo'];

    analyzer
      .analyze(profileUser, personalInfo,
        function(err, result) {
          if (err) {
            reject(err);
            return;
          }

          resolve(result);
          return;
        });
  }

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

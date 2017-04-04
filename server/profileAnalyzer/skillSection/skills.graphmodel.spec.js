const chai = require('chai');
const expect = chai.expect;

let personName = 'gowtham';

    let skills = {
        name: 'Java',
        experience: '3',
        expertise: 'Beginner'
    };

describe('Test skill section graphdata model', function () {
  it('Test relatePersonToSkills function', function (done) {
    const skillGraphModule = require('./skills.graphmodel');

    skillGraphModule.relatePersonToSkills(personName, skills, function(err, result) {
      console.log('Result: ', JSON.stringify(result));

            expect(err).to.equal(null);
            expect(result).to.not.equal(null);
            expect(result).to.not.equal(undefined);
            done();
    });
  });
});

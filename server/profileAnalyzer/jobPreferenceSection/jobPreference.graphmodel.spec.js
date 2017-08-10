const chai = require('chai');
const expect = chai.expect;

describe('Test Job prefernce section data analysis', function() {
    it('Invoke Job prefernce analyser as a module', function(done) {
        const jobPrefModel = require('./jobPreference.graphmodel');

        let personName = 'Gowtham Jeeva';
        const jobPreference = {
                jobRole:'Team Lead',
                skill:'Full Stack Developer',
                location:'Bangalore'
            };

        jobPrefModel.relatePersonToPreferredLocation(personName, jobPreference.location, function(err, result) {
            console.log('Result: ', JSON.stringify(result));

            expect(err).to.equal(null);
            expect(result).to.not.equal(null);
            expect(result).to.not.equal(undefined);
            done();
        });
    });
});
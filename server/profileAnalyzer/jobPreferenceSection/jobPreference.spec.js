const chai = require('chai');
const expect = chai.expect;

describe('Test job preference section data analysis', function () {
    it('Invoke job prefernce analyser as a module', function (done) {
        const jobPreferenceModule = require('./');
        expect(jobPreferenceModule).to.not.equal(undefined);
        expect(typeof jobPreferenceModule).to.equal('object');
        expect(typeof jobPreferenceModule.analyze).to.equal('function');
        done();
    });

      describe('Validations', function() {
        it('Check if analyze method verifies for data, espeically required data, before prcoeeding to analyze', function(done) {
            const jobPreferenceModule = require('./');
            const profileUser = {username: 'Gowtham Jeeva'};
            const jobPreference = [{
                jobRole: 'Team Lead',
                skill: 'Full Stack Developer',
                location: 'Bangalore'
            }];

            // Expecting a error
            jobPreferenceModule.analyze(profileUser, jobPreference, function(err, result) {
                // Only if no data was passed, error should be thrown
                // if error comes, test case passes, if no error comes, test cases failes
                expect('object').to.equal(typeof err);
                expect('string').to.equal(typeof err.error);
                expect('No data found to analyze').to.equal(err.error);
                done();
            });
        });
    });

    describe('Analyse simple one single job preference entry in the profile', function () {
        before(function() {
            console.log('[*] Cleaning up graph model, BEFORE verifying graph model creation from analyzer ');
        });

        it('Pass a actual data and check if data model is returned', function(done) {
            const jobPreferenceModule = require('./');
            const profileUser = {username: 'Gowtham Jeeva'};
            const jobPreference = [{
                jobRole: 'Team Lead',
                skill: 'Full Stack Developer',
                location: 'Bangalore'
            }];
            jobPreferenceModule.analyze(profileUser, jobPreference, function(err, result) {
                expect(null).to.equal(err);

                // Go to neo4j, get a data about
                // Person to jobPreference node relationship should exist
                // match (p:Person)-[r:Workd_At {role: 'developer'}]-(o:Orgainization)
                // match (p:Person)-[r:Workd_As {duration: 'developer'}]-(jr:JobRole)
                // match (p:Person)-[r:Workd_In {duration: ''}]-(l:Location)


                done();
            });
        });

        after(function() {
            console.log('[*] Cleaning up graph model, AFTER verifying graph model creation from analyzer');
        });
    });
});

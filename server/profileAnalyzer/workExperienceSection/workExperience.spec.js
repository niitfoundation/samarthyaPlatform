const chai = require('chai');
const expect = chai.expect;

describe('Test work experience section data analysis', function() {
    it('Invoke work experience analyser as a module', function(done) {
        const workExpModule = require('./');
        expect(undefined).to.not.equal(workExpModule);
        expect('object').to.equal(typeof workExpModule);
        expect('function').to.equal(typeof workExpModule.analyze);
        done();
    });

    describe('Validations', function() {
        it('Check if analyze method verifies for data, espeically required data, before prcoeeding to analyze', function(done) {
            const workExpModule = require('./');
            const profileUser = {};
            const workExperience = [];
            // Expecting a error
            workExpModule.analyze(profileUser, workExperience, function(err, result) {
                // Only if no data was passed, error should be thrown
                // if error comes, test case passes, if no error comes, test cases failes
                expect('object').to.equal(typeof err);
                expect('string').to.equal(typeof err.error);
                expect('No data found to analyze').to.equal(err.error);
                done();
            });
        });
    });

    describe('Analyse simple one single work experience entry in the profile', function() {
        before(function() {
            console.log('[*] Cleaning up graph model, BEFORE verifying graph model creation from analyzer ');
        });

        it('Pass a actual data and check if data model is returned', function(done) {
            const workExpModule = require('./');

            const profileUser = { username: 'Dheeren' };
            const workExperience = [{
                workplace: 'Wipro',
                jobRole: 'Developer',
                location: 'Bangalore',
                iscurrent: 'true',
                duration: 2,
            }];

            workExpModule.analyze(profileUser, workExperience, function(err, result) {
                // expect(null).to.equal(err);

                // Go to neo4j, get a data about
                // Person to WorkExperience node relationship should exist
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

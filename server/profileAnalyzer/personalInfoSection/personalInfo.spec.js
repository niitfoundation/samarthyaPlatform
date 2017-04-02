// this is for test the personal Info Analyzer functionality

const chai = require('chai');
const expect = chai.expect;

describe('Test personal Info section data Analysis', function () {
    it('Invoke personal Info Analyzer as a module', function (done) {
        const personalInfoModule = require('./');
        // expect(personalInfoModule).to.not.equal(undefined);
        // expect(typeof personalInfoModule).to.equal('Object');
        expect(undefined).to.not.equal(personalInfoModule);
        expect('object').to.equal(typeof personalInfoModule);
        expect('function').to.equal(typeof personalInfoModule.analyze);
        done();
    });

    describe('Validations', function () {
        it('Check if analyze method verifies for data, espeically required data, before prcoeeding to analyze', function (done) {
            const personalInfoModule = require('./');
            const profileUser = {};
            const personalInfo = [];

            // Expecting a error
            personalInfoModule.analyze(profileUser, personalInfo, function (err, result) {
                // Only if no data was passed, error should be thrown
                // if error comes, test case passes, if no error comes, test cases failes
                expect('object').to.equal(typeof err);
                expect('string').to.equal(typeof err.error);
                expect('No data found to analyze').to.equal(err.error);
                done();
            });
        });
    });


    describe('Analyse simple one single personal Info entry in the profile', function () {
        before(function () {
            console.log('[*] Cleaning up graph model, BEFORE verifying graph model creation from analyzer ');
        });

        it('Pass a actual data and check if data model is returned', function (done) {
            const personalInfoModule = require('./');
            const profileUser = { username: 'dheeren' };
            const personalInfo = [{}];

            personalInfoModule.analyze(profileUser, personalInfo, function (err, result) {
                expect(null).to.equal(err);

                // Go to neo4j, get a data about
                // Person to WorkExperience node relationship should exist
                // match (p:Person)-[r:Workd_At {role: 'developer'}]-(o:Orgainization)
                // match (p:Person)-[r:Workd_As {duration: 'developer'}]-(jr:JobRole)
                // match (p:Person)-[r:Workd_In {duration: ''}]-(l:Location)

                done();
            });
        });

        after(function () {
            console.log('[*] Cleaning up graph model, AFTER verifying graph model creation from analyzer');
        });
    });
});

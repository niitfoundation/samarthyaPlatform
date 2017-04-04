const chai = require('chai');
const expect = chai.expect;
const logger = require('./../../../applogger');

describe('Test work experience section data analysis', function () {
    it('Invoke work experience analyser as a module', function (done) {
        const workExpModule = require('./workExperience.analyzer');
        expect(undefined).to.not.equal(workExpModule);
        expect('object').to.equal(typeof workExpModule);
        expect('function').to.equal(typeof workExpModule.analyze);
        done();
    });

    describe('Validations', function () {
        it('Check if analyze method verifies for data, espeically required data, before prcoeeding to analyze', function (done) {
            const workExpModule = require('./workExperience.analyzer');
            const profileUser = {};
            const workExperience = [];
            // Expecting a error
            workExpModule.analyze(profileUser, workExperience, function (err, result) {
                // Only if no data was passed, error should be thrown
                // if error comes, test case passes, if no error comes, test cases failes
                expect('object').to.equal(typeof err);
                expect('string').to.equal(typeof err.error);
                expect('No data found to analyze').to.equal(err.error);
                done();
            });
        });
    });



    describe('Analyse collection of work experience entry in the profile', function () {
        before(function () {
            logger.info('[*] Cleaning up graph model, BEFORE verifying graph model creation from analyzer ');
        });

        it('Pass a actual data and check if data model is returned', function (done) {
            const workExpModule = require('./');

            const profileUser = { username: 'Dheeren' };
            const workExperience = [{
                workplace: 'Wipro',
                jobRole: 'Developer',
                location: 'Bangalore',
                isCurrent: true,
                duration: 2
            }, {
                workplace: 'Infosys',
                jobRole: 'Tester',
                location: 'Pune',
                iscurrent: false,
                duration: 2
            }];

            workExpModule.analyze(profileUser, workExperience, function (err, result) {
                logger.info('Got the result from work experience analyzer ', ' err: ', err, ' result: ', JSON.stringify(result));
                expect(result).to.not.equal(null);
                expect(result).to.not.equal(undefined);
                done();
            });
        });

        after(function () {
            logger.info('[*] Cleaning up graph model, AFTER verifying graph model creation from analyzer');
        });
    });
    describe('Analyse simple one single work experience entry in the profile', function () {
        before(function () {
            logger.info('[*] Cleaning up graph model, BEFORE verifying graph model creation from analyzer ');
        });

        it('Pass a actual data and check if data model is returned', function (done) {
            const workExpModule = require('./workExperience.analyzer');
            const personName = 'Dheeren';
            const workExperience = {
                workplace: 'Wipro',
                jobRole: 'Developer',
                location: 'Bangalore',
                isCurrent: true,
                duration: 2
            };

            workExpModule.analyzeWorkExperienceInstance(personName, workExperience, function (err, result) {
                // console.log('Got the result from work experience analyzer ', ' err: ', err, ' result: ', JSON.stringify(result));
                expect(result).to.not.equal(null);
                expect(result).to.not.equal(undefined);
                done();
            });
        });

        after(function () {
            logger.info('[*] Cleaning up graph model, AFTER verifying graph model creation from analyzer');
        });
    });
});

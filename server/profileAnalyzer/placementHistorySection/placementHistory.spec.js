const chai = require('chai');
const expect = chai.expect;
const logger = require('./../../../applogger');

describe('Test placement history section data analysis', function() {
    it('Invoke placement history analyser as a module', function(done) {
        const plcmntHisModule = require('./placementHistory.analyzer');
        expect(undefined).to.not.equal(plcmntHisModule);
        expect('object').to.equal(typeof plcmntHisModule);
        expect('function').to.equal(typeof plcmntHisModule.analyze);
        done();
    });

    describe('Validations', function(done) {
        it('Check if analyze method verifies for data, espeically required data, before prcoeeding to analyze', function(done) {
            const plcmntHisModule = require('./placementHistory.analyzer');
            const profileUser = {};
            const placementHistory = [];
            // Expecting a error
            plcmntHisModule.analyze(profileUser, placementHistory, function(err, result) {
                // Only if no data was passed, error should be thrown
                // if error comes, test case passes, if no error comes, test cases failes
                expect('object').to.equal(typeof err);
                expect('string').to.equal(typeof err.error);
                expect('No data found to analyze').to.equal(err.error);
            });
            done();
        });
    });



    describe('Analyse collection of placement history entry in the profile', function() {
        before(function() {
            logger.info('[*] Cleaning up graph model, BEFORE verifying graph model creation from analyzer ');
        });

        it('Pass a actual data and check if data model is returned', function(done) {
            const plcmntHisModule = require('./placementHistory.analyzer');

            const profileUser = 'Dheeren';
            const placementHistory = [{
                workplace: 'Wipro',
                jobRole: 'Developer',
                location: 'Bangalore',
                placementType: 'self',
                placementStatus: 'has accepted',
                coordinatorName: 'Deepak',
                employerName:'Raj',
                isCurrent: true,
                duration: 2
            }, {
                workplace: 'Infosys',
                jobRole: 'Tester',
                location: 'Pune',
                placementType: 'self',
                placementStatus: 'has accepted',
                coordinatorName: 'Deepak',
                employerName:'Raj',
                iscurrent: false,
                duration: 2
            }];

            plcmntHisModule.analyze(profileUser, placementHistory, function(err, result) {
                logger.info('Got the result from placement history analyzer ', ' err: ', err, ' result: ', JSON.stringify(result));
                expect(result).to.not.equal(null);
                expect(result).to.not.equal(undefined);
            });
            done();
        });

        after(function() {
            logger.info('[*] Cleaning up graph model, AFTER verifying graph model creation from analyzer');
        });
    });
    describe('Analyse simple one single placement history entry in the profile', function() {
        before(function() {
            logger.info('[*] Cleaning up graph model, BEFORE verifying graph model creation from analyzer ');
        });

        it('Pass a actual data and check if data model is returned', function(done) {
            const plcmntHisModule = require('./placementHistory.analyzer');
            const personName = 'Dheeren';
            const placementHistory = {
                workplace: 'Wipro',
                jobRole: 'Developer',
                location: 'Bangalore',
                placementType: 'self',
                placementStatus: 'has accepted',
                coordinatorName: 'Deepak',
                employerName:'Raj',
                isCurrent: true,
                duration: 2
            };

            plcmntHisModule.analyzePlacementHistoryInstance(personName, placementHistory, function(err, result) {
                logger.info('Got the result from placement history analyzer ', ' err: ', err, ' result: ', JSON.stringify(result));
                expect(result).to.not.equal(null);
                expect(result).to.not.equal(undefined);    
            });
            done();
        });

        after(function() {
            logger.info('[*] Cleaning up graph model, AFTER verifying graph model creation from analyzer');
        });
    });
});
// this is for test the personal Info Analyzer functionality

const chai = require('chai');
const expect = chai.expect;
const logger = require('./../../../applogger');

describe('Test personal Info section data Analysis', function () {
    it('Invoke personal Info Analyzer as a module', function (done) {
        const personalInfoModule = require('./userRegistration.analyzer');
        expect(undefined).to.not.equal(personalInfoModule);
        expect('object').to.equal(typeof personalInfoModule);
        expect('function').to.equal(typeof personalInfoModule.analyze);
        done();
    });

    describe('Validations', function () {
        it('Check if analyze method verifies for data, espeically required data, before prcoeeding to analyze', function (done) {
            const personalInfoModule = require('./userRegistration.analyzer');
            const profileUser = {};
            const personalInfo = [];

            // Expecting a error
            personalInfoModule.analyze(profileUser, profileData, function (err, result) {
                // Only if no data was passed, error should be thrown
                // if error comes, test case passes, if no error comes, test cases failes
                expect('object').to.equal(typeof err);
                expect('string').to.equal(typeof err.error);
                expect('No data found to analyze').to.equal(err.error);
                done();
            });
        });
    });

    describe('Analyse collection of personal Info entry in the profile', function () {
        before(function () {
            logger.info('[*] Cleaning up graph model, BEFORE verifying graph model creation from analyzer ');
        });

        it('Pass a actual data and check if data model is returned', function (done) {
            const personalInfoModule = require('./userRegistration.analyzer');
            const profileUser = { username: 'divesh', profession: 'full stack developer' };
            const personalInfo = {
                name: 'Divesh Sankhla',
                fname: 'Divesh',
                lname: 'Sankhla',
                gender: 'male',
                email: 'sankhlasaini@gmail.com',
                dob: '11-11-1992',
                altemail: 'muruga55@gmail.com',
                address:
                {
                    address1: 'Vijay Nagar',
                    address2: 'Scheme No-4',
                    landmark: 'Railway Station Alwar',
                    district: ' Alwar',
                    state: 'RAJASTHAN',
                    pincode: '301001',
                },
                contact: {
                    I: '99123499123',
                    II: '12312312333'
                },
                married: true,
                prefLang: 'English',
                nativeLang: 'Hindi',
                lang: [
                    {
                        name: 'Hindi',
                        r: true,  // 'r': true,
                        w: true,  // 'w': true,
                        s: false,  // 's': true,
                    },
                    {
                        name: 'English',
                        r: true,  // 'r': true,
                        w: false,  // 'w': true,
                        s: false,  // 's': true,
                    }
                ]
            };

            personalInfoModule.analyze(profileUser, personalInfo, function (err, result) {
                expect(null).to.equal(err);
                logger.info('Got the result from personalInfo analyzer ', ' err: ', err, ' result: ', JSON.stringify(result));
                expect(result).to.not.equal(null);
                expect(result).to.not.equal(undefined);
                done();
            });
        });

        after(function () {
            console.log('[*] Cleaning up graph model, AFTER verifying graph model creation from analyzer');
        });
    });

    describe('Analyse simple one single personalInfo entry in the profile', function () {
        before(function () {
            logger.info('[*] Cleaning up graph model, BEFORE verifying graph model creation from analyzer ');
        });

        it('Pass a actual data and check if data model is returned', function (done) {
            const personalInfoModule = require('./personalInfo.analyzer');
            const profileUser = { username: 'divesh', profession: 'full stack developer' };
            const personalInfo = {
                name: 'Divesh Sankhla',
                fname: 'Divesh',
                lname: 'Sankhla',
                gender: 'male',
                email: 'sankhlasaini@gmail.com',
                dob: '11-11-1992',
                altemail: 'muruga55@gmail.com',
                address:
                {
                    address1: 'Vijay Nagar',
                    address2: 'Scheme No-4',
                    landmark: 'Railway Station Alwar',
                    district: ' Alwar',
                    state: 'RAJASTHAN',
                    pincode: '301001',
                },
                contact: {
                    I: '99123499123',
                    II: '12312312333'
                },
                married: true,
                prefLang: 'English',
                nativeLang: 'Hindi',
                lang: [
                    {
                        name: 'Hindi',
                        r: true,  // 'r': true,
                        w: true,  // 'w': true,
                        s: false,  // 's': true,
                    },
                    {
                        name: 'English',
                        r: true,  // 'r': true,
                        w: false,  // 'w': true,
                        s: false,  // 's': true,
                    }
                ]
            };


            personalInfoModule.analyze(profileUser, personalInfo, function (err, result) {
                // expect(null).to.equal(err);
                logger.info('Got the result from personalInfo analyzer ', ' err: ', err, ' result: ', JSON.stringify(result));
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


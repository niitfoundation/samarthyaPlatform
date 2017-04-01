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
});

describe('Analyse simple one single personal Info extry in the profile', function () {
    it('check if analyze method verifies for data,especially required data before proceeding', function () {
        const personalInfoModule = require('./');
        const personalInfo = [{}];

        personalInfoModule.analyze(personalInfo, function (err, result) {
            expect('object'.to.equal(err));
            expect('string').to.equal(typeof err.error);
            expect('No data found to analyze'.to.equal(err.error));
            done();
        });
    });
});

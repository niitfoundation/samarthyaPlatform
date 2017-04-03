// this is for test the projects Analyzer functionality
const chai = require('chai');
const expect = chai.expect;
describe('Test project section data analysis', function () {
    it('Invoke project as a module', function (done) {
        const projectModule = require('./');
        expect(undefined).to.not.equal(projectModule);
        expect('object').to.not.equal(projectModule);
        expect(typeof projectModule.analyze).to.equal('function');
        done();
    });
    describe('Validation', function () {
        it('Check if analyze method verifies for data, espeically required data, before prcoeeding to analyze', function (done) {
            const projectModule = require('./');
            const profileUser = {username:'john'};
            const projectColn = [{
                name:"Samarthya",
                duration:"3",
                location:"Delhi",
                jobRole:"Lead Developer",
                skills:["Angular2"]
            }];
            projectModule.analyze(profileUser, projectColn, function (err, result) {
                expect('object').to.equal(typeof err);
              //  expect('string').to.equal(typeof err.error);
               // expect('Data not found '.to.equal(err.error));
                done();
            });

        });
    })
    describe('Analyse simple one single project entry', function () {
        before(function () {
            // clean up graph model
            console.log('Cleaning up graph model, BEFORE verifying graph model creation from analyzer ');
        });
        it('Pass an actual data and check if data model is returned', function () {
            const projectModule = require('./');
            const profileUser = {username:'john'};
            const projectColn = [{
                name:"Lucy",
                duration:"12",
                location:"Pune",
                jobRole:"Developer",
                skills:["React","Mongo"]
            }];
            projectModule.analyze(profileUser, projectColn, function(err, result) {
                expect(null).to.equal(err);
                done();
            });
        });

        after(function() {
            console.log(' Cleaning up graph model, AFTER verifying graph model creation from analyzer');
        });
    })
});
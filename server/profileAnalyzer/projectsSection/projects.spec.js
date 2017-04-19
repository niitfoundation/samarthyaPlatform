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
        this.timeout(5000);

        it('Check if analyze method verifies for data, espeically required data, before prcoeeding to analyze', function (done) {
            const projectModule = require('./');
            const profileUser = {username:'john'};
            const projectColn = [{
                name:"samarthya",
                duration:{
                    start:"2017-04-19T09:21:00",
                    end:"2017-07-19T09:21:00"
                },
                location:"Delhi",
                jobRole:"Lead Developer",
                skills:["Angular2"]
            }
            ];

            projectModule.analyze(profileUser, projectColn, function (err, result) {
                console.log('Result: ', result);
                expect('object').to.equal(typeof result);
                done();
            });

        });
    })

});
const chai = require('chai');
const expect = chai.expect;

describe('Test project section data analysis', function () {
    it('Invoke project analyser as a module', function (done) {
        const projectGraphModel = require('./projects.graphmodel')

        let personName = 'John';
        let projectObj = {
            name: 'Samarth',
            jobRole: 'Developer',
            location: 'Bangalore',
            skills: ['Angular','React'],
            duration: '2'
        };

        projectGraphModel.relatePersonToProject(personName, projectObj, function (err, result) {
            console.log('Result: ', JSON.stringify(result));
            expect(err).to.equal(null);
            expect(result).to.not.equal(null);
            expect(result).to.not.equal(undefined);
            done();
        });
        projectGraphModel.relateProjectToSkills(projectObj.name, projectObj, function (err, result) {
            console.log('Result: ', JSON.stringify(result));
            expect(err).to.equal(null);
            expect(result).to.not.equal(null);
            expect(result).to.not.equal(undefined);
            done();
        });
    });
});
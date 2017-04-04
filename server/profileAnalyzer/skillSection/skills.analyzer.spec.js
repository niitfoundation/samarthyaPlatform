const chai = require('chai');
const expect = chai.expect;

let profileUser = { username: 'gowtham' };

let skillColln = [{
    name: 'Angular2',
    experience: '7',
    expertise: 'Expert'
},
{
    name: 'Neo4j',
    experience: '4',
    expertise: 'Beginner'
},
{
    name: 'J2EE',
    experience: '6',
    expertise: 'Experienced'
}];

describe('Test skill section graphdata model', function () {
    it('Test analyzer function', function (done) {
        const analyzer = require('./skills.analyzer');
        this.setTimeout = 10000;
        analyzer.analyzer(profileUser, skillColln, function (err, result) {
            console.log('Result: ', JSON.stringify(result));

            expect(err).to.equal(null);
            expect(result).to.not.equal(null);
            expect(result).to.not.equal(undefined);
            done();
        });
    });
});


const chai = require('chai');
const expect = chai.expect;

let profileUser = { username: 'divesh' };

let qualificationColln = [{
    name: 'B.Tech',
    subject: 'Electronics',
    academictype: 'bachelor',
    batch: { startDate: '2012', endDate: '2016' },
    result: { score: '85', unit: '%' },
    institute: 'CGC',
    affiliation: 'PTU',
    location: 'Landran'
},
{
    name: 'JAVA',
    subject: 'Java',
    academictype: 'Training',
    batch: { startDate: '01/07/2016', endDate: '30/10/2016' },
    result: { score: '80', unit: '%' },
    institute: 'wipro',
    affiliation: 'wipro',
    location: 'Greater Noida'
},
{
    name: 'Angular2',
    subject: 'MEAN',
    academictype: 'Training',
    batch: { startDate: '06/01/2017', endDate: '07/04/2017' },
    result: { score: '90', unit: '%' },
    institute: 'Stack route',
    affiliation: 'NIIT',
    location: 'Koramangala'
}];

describe('Test qualification section graphdata model', function () {
    it('Test analyzer function', function (done) {
        const analyzer = require('./qualification.analyzer');
        this.setTimeout = 10000;
        analyzer.analyzer(profileUser, qualificationColln, function (err, result) {
            console.log('Result: ', JSON.stringify(result));

            expect(err).to.equal(null);
            expect(result).to.not.equal(null);
            expect(result).to.not.equal(undefined);
            done();
        });
    });
});


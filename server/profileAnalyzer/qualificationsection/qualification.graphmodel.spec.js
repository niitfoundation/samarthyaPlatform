const chai = require('chai');
const expect = chai.expect;

let personName = 'sheenam';

    let qualifications = {
        name: 'B.Tech',
        subject: 'Electronics',
        academictype: 'bachelor',
        batch: { startDate: '2012', endDate: '2016' },
        result: { score: '85', unit: '%' },
        institute: 'CGC',
        affiliation: 'PTU',
        location: 'Landran'
    };

describe('Test qualification section graphdata model', function () {
  it('Test relatePersonToQualification function', function (done) {
    const qualificationGraphModule = require('./qualification.graphmodel');

    qualificationGraphModule.relatePersonToQualification(personName, qualifications, function(err, result) {
      console.log('Result: ', JSON.stringify(result));

            expect(err).to.equal(null);
            expect(result).to.not.equal(null);
            expect(result).to.not.equal(undefined);
            done();
    });
  });

  it('Test relatePersonToInstitute function', function (done) {
    const qualificationGraphModule = require('./qualification.graphmodel');

    qualificationGraphModule.relatePersonToInstitute(personName, qualifications, function(err, result) {
      console.log('Result: ', JSON.stringify(result));

            expect(err).to.equal(null);
            expect(result).to.not.equal(null);
            expect(result).to.not.equal(undefined);
            done();
    });
  });

  it('Test relatePersonToSkill function', function (done) {
    const qualificationGraphModule = require('./qualification.graphmodel');

    qualificationGraphModule.relatePersonToSkill(personName, qualifications, function(err, result) {
      console.log('Result: ', JSON.stringify(result));

            expect(err).to.equal(null);
            expect(result).to.not.equal(null);
            expect(result).to.not.equal(undefined);
            done();
    });
  });

  it('Test relateQualificationToSkill function', function (done) {
    const qualificationGraphModule = require('./qualification.graphmodel');

    qualificationGraphModule.relateQualificationToSkill(qualifications, function(err, result) {
      console.log('Result: ', JSON.stringify(result));

            expect(err).to.equal(null);
            expect(result).to.not.equal(null);
            expect(result).to.not.equal(undefined);
            done();
    });
  });

  it('Test relateInstituteToQualification function', function (done) {
    const qualificationGraphModule = require('./qualification.graphmodel');

    qualificationGraphModule.relateInstituteToQualification(qualifications, function(err, result) {
      console.log('Result: ', JSON.stringify(result));

            expect(err).to.equal(null);
            expect(result).to.not.equal(null);
            expect(result).to.not.equal(undefined);
            done();
    });
  });
});


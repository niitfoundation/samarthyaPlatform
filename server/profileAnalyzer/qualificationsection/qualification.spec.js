const chai = require('chai');
const expect = chai.expect;

describe('Test qualification section data analysis', function () {
  it('Invoke qualification analyser as a module', function (done) {
    this.timeout = 10000;
    const qualificationModule = require('./');
    expect(undefined).to.not.equal(qualificationModule);
    expect('object').to.equal(typeof qualificationModule);
    expect('function').to.equal(typeof qualificationModule.analyzer);
    done();
  });
});

describe('Validations', function () {
  it('Check if analyze method verifies for data, espeically required data, before prcoeeding to analyze', function (done) {
    this.timeout = 10000;
    const qualificationModule = require('./');
    const profileUser = {username: 'sheenam'};
    const qualifications = [{
      name: 'M.Tech',
      subject: 'Computer Science',
      academictype: 'Master',
      batch: { startDate: '2015', endDate: '2017' },
      result: { score: '70', unit: '%' },
      institute: 'IIT Dhelhi',
      affiliation: 'IIT Dhelhi',
      location: 'Dhelhi'
    }];
    // Expecting a error
    qualificationModule.analyzer(profileUser, qualifications, function (err, result) {
      // Only if no data was passed, error should be thrown
      // if error comes, test case passes, if no error comes, test cases failes
      // expect('object').to.equal(typeof err);
     // expect('string').to.equal(typeof err.error);
     // expect('No data found to analyze').to.equal(err.error);
      done();
    });
  });
});

describe('Analyse simple one single qualification entry in the profile', function () {
  before(function () {
    console.log('[*] Cleaning up graph model, BEFORE verifying graph model creation from analyzer ');
  });

  it('Pass a actual data and check if data model is returned', function (done) {
    this.timeout = 10000;
    const qualificationModule = require('./');
    const profileUser = { username: 'dheeren' };
    const qualifications = [{
      name: 'B.Tech',
      subject: 'Computer Science',
      academictype: 'Master',
      batch: { startDate: '2015', endDate: '2017' },
      result: { score: '70', unit: '%' },
      institute: 'IIT Dhelhi',
      affiliation: 'IIT Dhelhi',
      location: 'Dhelhi'
    }];
    qualificationModule.analyzer(profileUser, qualifications, function (err, result) {
      expect(null).to.equal(err);
      done();
    });
  }); after(function () {
    console.log('[*] Cleaning up graph model, AFTER verifying graph model creation from analyzer');
  });
});

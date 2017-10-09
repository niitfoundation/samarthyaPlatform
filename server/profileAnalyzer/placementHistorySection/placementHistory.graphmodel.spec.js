const chai = require('chai');
const logger = require('./../../../applogger');
const expect = chai.expect;

describe('Test placement history section data analysis', function() {
    it('Invoke placement history analyser as a module', function(done) {
        const plcmntHisGraphModel = require('./placementHistory.graphmodel');

        let personName = 'Dheeren';
        let placementHistory = {
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

        plcmntHisGraphModel.relatePersonToOrganisation(personName, placementHistory, function(err, result) {
            logger.debug('Result: ', JSON.stringify(result));

            expect(err).to.equal(null);
            expect(result).to.not.equal(null);
            expect(result).to.not.equal(undefined);
            done();
        });

        plcmntHisGraphModel.relatePersonToOrganisationForAssisstedPlacement(personName, placementHistory, function(err, result) {
            logger.debug('Result: ', JSON.stringify(result));

            expect(err).to.equal(null);
            expect(result).to.not.equal(null);
            expect(result).to.not.equal(undefined);
            done();
        });

        plcmntHisGraphModel.relatePersonToOrganisationForSelfPlacement(personName, placementHistory, function(err, result) {
            logger.debug('Result: ', JSON.stringify(result));

            expect(err).to.equal(null);
            expect(result).to.not.equal(null);
            expect(result).to.not.equal(undefined);
            done();
        });
    });
});
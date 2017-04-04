const chai = require('chai');
const expect = chai.expect;

describe('Test personalInfo section and profession data analysis', function () {
    it('Invoke personalInfo and profession analyser as a module', function (done) {
        const personalInfoModule = require('./userRegistration.graphmodel');

        let personName = 'Divesh';
        let profession = 'full stack developer'
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


        personalInfoModule.relatePersonToProfession(personName, profession, personalInfo, function (err, result) {
            console.log('Result: ', JSON.stringify(result));

            expect(err).to.equal(null);
            expect(result).to.not.equal(null);
            expect(result).to.not.equal(undefined);
            done();
        });
    });
});

const router = require('../server/api/v1/centres/centres.controller');
const supertest = require('supertest')(router);
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;

chai.use(chaiAsPromised);

// describe('centre node', function () {
//     it('get centres', function (done) {
//         supertest(router)
//             .post('/')
//             .send({
//                 name: 'Mumbai'
//             })
//             .expect(201)
//             .end(function (err, res) {
//                 expect(Promise.resolve(res.body.name).to.eventually.equal('Mumbai'));
//                 done();
//             });
//     });
// });

describe('centre node function check', function () {
    it('add centre check', function () {
         router.addCentre('Goa', '5')
               .then(function(data) {
                   console.log(data);
               });
    });
});

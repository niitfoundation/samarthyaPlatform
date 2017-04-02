const router = require('../server/api/v1/centres/centres.router');
const supertest = require('supertest');
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;

chai.use(chaiAsPromised);

describe('centre node', function () {
    it('get centres', function (done) {
        supertest(router)
            .post('/add')
            .set('Accept', 'application/x-www-form-urlencoded')
            .send({
                name: 'sasasasasasasasas',
                limit: '15'
            })
            .expect(201)
            .end(function (err, res) {
                // expect(Promise.resolve(res.body.name).to.eventually.equal('Mumbai'));
                done();
            });
    });
});

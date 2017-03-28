// test cases
const router = require('./auth.router');
const supertest = require('supertest')(router);
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;

chai.use(chaiAsPromised);

describe('Userdata', function() {
    it('add userdata', function(done) {
        supertest
            .post('/')
            .set('Accept', 'application/x-www-form-urlencoded')
            .send({

            })
            .expect(201)
            .end(function(err, res) {
                if(err) done(err);
                expect(Promise.resolve(res.body.message)).to.eventually.equal('sent successfully');
                done();
            });
    });
});

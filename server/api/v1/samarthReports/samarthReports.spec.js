// test cases
const router = require('../authentication/auth.router');
const app = require("../../../../bin/www.placement")
const supertest = require('supertest');
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
const agent = supertest.agent(app);
chai.use(chaiAsPromised);

describe('samarthReport', () => {
    it('get samarthReport', (done)  =>  {
        agent
            .get('/samarthReport')
            .set('Accept', 'application/x-www-form-urlencoded')
            .expect(201)
            .end((err, res) => {
                if (err) done(err);
                expect(res.body).to.have.property('data').which.is.a('number').above(-1).and.satisfy(Number.isInteger);
                done();
        });
    });
});
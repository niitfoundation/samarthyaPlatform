const chai = require('chai');
const router = require('./centres.router');
const supertest = require('supertest');
var server = supertest.agent('http://localhost:3000');
// const request = require('supertest')(router);
const expect = chai.expect;

describe('Test centres.router module', function() {
    it('Test get api', function(done) {
        server
            .get('/centres?name=Patiala')
            .expect(201)
            .end(function(err, res) {
                console.log(res.text);
                console.log(res.body);
                done();
            });
    });

    it('Test post api', function(done) {
        server
            .post('/centres')
            .send({
                name: ['Shimla']
            })
            .expect(201)
            .end(function(err, res) {
                console.log(res.text);
                done();
            });
    });
});

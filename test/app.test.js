const request = require('supertest');
const app = require('../app'); // Caminho para o arquivo do servidor

describe('GET /', function() {
 it('responds with 200 status', function(done) {
   request(app)
     .get('/')
     .expect(200, done);
 });
});

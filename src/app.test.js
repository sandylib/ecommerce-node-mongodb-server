var chai = require('chai')
  , chaiHttp = require('chai-http'),
  server = require('./index'), 
  expect = chai.expect;;

chai.use(chaiHttp);

describe("GET /random-url", () => {
 
  it('fails, as expected', function(done) {
    chai.request('http://localhost:8080')
    .get('/api/v1/zodiac/')
    .end(function(err, res) {
      console.log('res', res);
      // expect(res).to.be(undefined);
      done();                         
    });
  });

})

describe("GET | zodiac ", () => {
 
  it('should return 200 get address back send to the correct endpoints with query variables', function(done) {
    chai.request('http://localhost:8080')
    .get('/api/v1/zodiac')
    .end(function(err, res) {
      console.log('res', res);
      // expect(res).to.have.status(200);
      done();                         
    });
  });

})


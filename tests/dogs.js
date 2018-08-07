const chai = require('chai');
const request = require('request-promise');
const mlog = require('mocha-logger');

describe('Sample Test', function () {

  it('should list user by id', function () {
    const options = {
      uri: 'http://localhost:3000/api/v1/dogs/1',
      resolveWithFullResponse: true,
      json: true // Automatically parses the JSON string in the response
    };
    return request (options)
      .then(function (res) {
          // mlog.log(JSON.stringify(res.body));
          chai.expect(res.statusCode).to.equal(200);
          chai.expect(res.body.name).to.equal('Corgi');
      });
  });

 });
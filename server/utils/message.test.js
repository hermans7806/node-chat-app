var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate correct message object', () => {
    var from = "Herman";
    var text = "Do the test";
    var res = generateMessage(from, text);

    expect(res).toInclude({from, text});
    expect(res.createdAt).toBeA('number');
  });
});

describe('generateLocationMessage', () => {
  it('should generate correct location object', () => {
    var from = "Herman";
    var latitude = 123;
    var longitude = -17;
    var url = `https://www.google.com/maps?q=${latitude},${longitude}`;
    var res = generateLocationMessage(from, latitude, longitude);

    expect(res).toInclude({from, url});
    expect(res.createdAt).toBeA('number');
  });
});

const lib = require('../src/shapes.js');
const assert = require('assert');

describe('testRectangle', function() {
  it('rectangle() should give 3x2 stars for filled pattern', function() {
    const actualValue = lib.rectangle('filled', 3, 2);
    const expectedValue = ['**', '**', '**'];
    assert.deepStrictEqual(actualValue, expectedValue);
  });

  it('rectangle() should give hollow rectangle for hollow pattern', function() {
    const actualValue = lib.rectangle('hollow', 3, 5);
    const expectedValue = ['*****', '*   *', '*****'];
    assert.deepStrictEqual(actualValue, expectedValue);
  });

  it('rectangle() should give altarnating rectangle for altarnating pattern', function() {
    const actualValue = lib.rectangle('alternating', 3, 9);
    const expectedValue = ['---------', '+++++++++', '---------'];
    assert.deepStrictEqual(actualValue, expectedValue);
  });

  it('rectangle() should give interlaced rectangle for interlaced pattern', function() {
    const actualValue = lib.rectangle('interlaced', 3, 4);
    const expectedValue = ['+-+-', '-+-+', '+-+-'];
    assert.deepStrictEqual(actualValue, expectedValue);
  });

  it('rectangle() should give expected  rectangle if more than needed args given', function() {
    const actualValue = lib.rectangle('alternating', 3, 9, 67, 09);
    const expectedValue = ['---------', '+++++++++', '---------'];
    assert.deepStrictEqual(actualValue, expectedValue);
  });

  it('rectangle() should give empty rows when column is 0', function() {
    const actualValue = lib.rectangle('alternating', 3, 0);
    const expectedValue = ['', '', ''];
    assert.deepStrictEqual(actualValue, expectedValue);
  });

  it('rectangle() should give empty array when row is 0', function() {
    const actualValue = lib.rectangle('alternating', 0, 5);
    const expectedValue = [];
    assert.deepStrictEqual(actualValue, expectedValue);
  });
});

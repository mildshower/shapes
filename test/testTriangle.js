const lib = require('../src/shapes.js');
const assert = require('assert');

describe('testTriangle', function()  {
  it("triangle() should give filled triangle for filled pattern", function() {
    const actualValue = lib.triangle('filled', 4);
    const expectedValue = ['*', '**', '***', '****'];
    assert.deepStrictEqual(actualValue, expectedValue);
  });

  it("triangle() should give hollow triangle for hollow pattern", function() {
    const actualValue = lib.triangle('hollow', 6);
    const expectedValue = ['*', '**', '* *', '*  *', '*   *', '******'];
    assert.deepStrictEqual(actualValue, expectedValue);
  });

  it("triangle() should give altarnating triangle for altarnating pattern", function() {
    const actualValue = lib.triangle('alternating', 3);
    const expectedValue = ['-', '++', '---'];
    assert.deepStrictEqual(actualValue, expectedValue);
  });

  it("triangle() should give interlaced triangle for interlaced pattern", function() {
    const actualValue = lib.triangle('interlaced', 3);
    const expectedValue = ['+', '-+', '+-+'];
    assert.deepStrictEqual(actualValue, expectedValue);
  });

  it("triangle() should give expecpted triangle if more than needed args are given", function() {
    const actualValue = lib.triangle('alternating', 3, 6, 8, 98765);
    const expectedValue = ['-', '++', '---'];
    assert.deepStrictEqual(actualValue, expectedValue);
  });

  it("rectangle() should give empty array when row is 0", function() {
    const actualValue = lib.rectangle('alternating', 0);
    const expectedValue = [];
    assert.deepStrictEqual(actualValue, expectedValue);
  });
});

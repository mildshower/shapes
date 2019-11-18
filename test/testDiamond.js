const lib = require('../src/shapes.js');
const assert = require('assert');

describe('Diamond()',function() {
  it("diamond() should give 3 geight filled diamond for filled pattern", function() {
    const actualValue = lib.diamond('filled', 3);
    const expectedValue = [' *', '***', ' *'];
    assert.deepStrictEqual(actualValue, expectedValue);
  });

  it("diamond() should give hollow diamond for hollow pattern", function() {
    const actualValue = lib.diamond('hollow', 5);
    const expectedValue = ['  *',' * *', '*   *', ' * *', '  *'];
    assert.deepStrictEqual(actualValue, expectedValue);
  });

  it("diamond() should give angled diamond for angled pattern", function() {
    const actualValue = lib.diamond('angled', 5);
    const expectedValue = ['  *',' / \\', '*   *', ' \\ /', '  *'];
    assert.deepStrictEqual(actualValue, expectedValue);
  });

  it("diamond() should give altarnating diamond for altarnating pattern", function() {
    const actualValue = lib.diamond('alternating', 3);
    const expectedValue = [' -', '+++', ' -'];
    assert.deepStrictEqual(actualValue, expectedValue);
  });

  it("diamond() should give interlaced diamond for interlaced pattern", function() {
    const actualValue = lib.diamond('interlaced', 3);
    const expectedValue = [' +', '-+-', ' +'];
    assert.deepStrictEqual(actualValue, expectedValue);
  });

  it("diamond() should give expected  diamond if more than needed args given", function() {
    const actualValue = lib.diamond('alternating', 3, 9, 67, 09);
    const expectedValue = [' -', '+++', ' -'];
    assert.deepStrictEqual(actualValue, expectedValue);
  });

  it("diamond() should give empty array when row is 0", function() {
    const actualValue = lib.diamond('alternating', 0);
    const expectedValue = [];
    assert.deepStrictEqual(actualValue, expectedValue);
  });
});

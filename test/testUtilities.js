const util = require('../src/utilities.js');
const assert = require('assert');

describe('GetChars', function() {
  it("getChars() should give empty string for 0 as times", function() {
    let actualValue = util.getChars('*', 0);
    let expectedValue = ''; 
    assert.deepStrictEqual(actualValue, expectedValue);
  }
  );
  it("getChars() should give chars string whose length is given", function() {
    let actualValue = util.getChars('*', 5);
    let expectedValue = '*****';
    assert.deepStrictEqual(actualValue, expectedValue);
  }
  );
}
);

describe('getPrintabelString', function() {
  it("Should return emepty string for empty array as input", function() {
    let actualValue = util.getPrintableString([true, []]);
    let expectedValue = '';
    assert.deepStrictEqual(actualValue, expectedValue);
  }
  );

  it("Should return the row of a single row shape", function() {
    let actualValue = util.getPrintableString([true, ['***']]);
    let expectedValue = '***';
    assert.deepStrictEqual(actualValue, expectedValue);
  }
  );

  it("Should insert newLine between every rows", function() {
    let actualValue = util.getPrintableString([true, ['***','****']]);
    let expectedValue = '***\n****';
    assert.deepStrictEqual(actualValue, expectedValue);
  }
  );

  it("Should give error message string if shape functions gives false flag", function() {
    let actualValue = util.getPrintableString([false]);
    let expectedValue = 'Given set of options is not valid. Pleage give valid set of Options';
    assert.deepStrictEqual(actualValue, expectedValue);
  }
  );
}
);

describe('GetRange', function() {
  it("Should return emepty array for 0 as input", function() {
    let actualValue = util.getRange(0);
    let expectedValue = [];
    assert.deepStrictEqual(actualValue, expectedValue);
  }
  );

  it("Should return range from 1 to limit when 2nd arguement is not given", function() {
    let actualValue = util.getRange(5);
    let expectedValue = [1, 2, 3, 4, 5];
    assert.deepStrictEqual(actualValue, expectedValue);
  }
  );

  it("Should return range with increament of given second arguement", function() {
    let actualValue = util.getRange(3, 2);
    let expectedValue = [1, 3, 5];
    assert.deepStrictEqual(actualValue, expectedValue);
  }
  );
}
);

describe('parseShapeProperties', function() {
  it("Should give filled rectangle 5,5 for no option in input", function() {
    let actualValue = util.parseShapeProperties([]);
    let expectedValue = {'-s': 'rectangle', '-p': 'filled', '-d': '5,5'};
    assert.deepStrictEqual(actualValue, expectedValue);
  }
  );

  it("Should keep a option as default if the option is not provided in input", function() {
    let actualValue = util.parseShapeProperties(['-s', 'triangle', '-d', '5,67,4']);
    let expectedValue = {'-s': 'triangle', '-p': 'filled', '-d': '5,67,4'};
    assert.deepStrictEqual(actualValue, expectedValue);
  }
  );

  it("Should take the last arg if option is repeated", function() {
    let actualValue = util.parseShapeProperties(['-s', 'triangle', '-s', 'diamond']);
    let expectedValue = {'-s': 'diamond', '-p': 'filled', '-d': '5,5'};
    assert.deepStrictEqual(actualValue, expectedValue);
  }
  );

  it("Should give undefined if any wrong input is given", function() {
    let actualValue = util.parseShapeProperties(['-s', '-s', 'diamond']);
    let expectedValue = undefined;
    assert.deepStrictEqual(actualValue, expectedValue);
  }
  );
}
);

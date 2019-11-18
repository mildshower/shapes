const shapeGenerator = require('../src/shapeGenerator.js');
const assert = require('assert');

const testWithNoOption = function() {
  let actualValue = shapeGenerator.getShape([]);
  let expectedValue = [true, ['*****', '*****', '*****', '*****', '*****']];
  let message = "Should give default 5x5 filled rectangle if no opt is given";
  assert.deepStrictEqual(actualValue, expectedValue, message);
};

const testWithOneSOption = function() {
  let actualValue = shapeGenerator.getShape(['-s', 'rectangle']);
  let expectedValue = [true, ['*****', '*****', '*****', '*****', '*****']];
  let message = "Should give 5x5 filled rectangle if only -s opt given with rectangle arg";
  assert.deepStrictEqual(actualValue, expectedValue, message);

  actualValue = shapeGenerator.getShape(['-s', 'triangle']);
  expectedValue = [true, ['*', '**', '***', '****', '*****']];
  message = "Should give 5 height filled triangle if only -s opt given with triangle arg";
  assert.deepStrictEqual(actualValue, expectedValue, message);

  actualValue = shapeGenerator.getShape(['-s', 'diamond']);
  expectedValue = [true, ['  *', ' ***', '*****', ' ***', '  *']];
  message = "Should give 5 height filled diamond if only -s opt given with diamond arg";
  assert.deepStrictEqual(actualValue, expectedValue, message);

  actualValue = shapeGenerator.getShape(['-s']);
  expectedValue = [false];
  message = "Should give error message if -s given without arg";
  assert.deepStrictEqual(actualValue, expectedValue, message);

  actualValue = shapeGenerator.getShape(['-s', 'hello']);
  expectedValue = [false];
  message = "Should give error message if random stuff is given as arg of -s";
  assert.deepStrictEqual(actualValue, expectedValue, message);
};

const testWithOnePOption = function() {
  let actualValue = shapeGenerator.getShape(['-p', 'filled']);
  let expectedValue = [true, ['*****', '*****', '*****', '*****', '*****']];
  let message = "Should give 5x5 filled rectangle if only -p opt given with filled arg";
  assert.deepStrictEqual(actualValue, expectedValue, message);

  actualValue = shapeGenerator.getShape(['-p', 'hollow']);
  expectedValue = [true, ['*****', '*   *', '*   *', '*   *', '*****']];
  message = "Should give 5 height hollow rectangle if only -p opt given with hollow arg";
  assert.deepStrictEqual(actualValue, expectedValue, message);

  actualValue = shapeGenerator.getShape(['-p', 'interlaced']);
  expectedValue = [true, ['+-+-+', '-+-+-', '+-+-+', '-+-+-', '+-+-+']];
  message = "Should give 5 height interlaced rectangle if only -p opt given with interlaced arg";
  assert.deepStrictEqual(actualValue, expectedValue, message);

  actualValue = shapeGenerator.getShape(['-p', 'alternating']);
  expectedValue = [true, ['-----', '+++++', '-----', '+++++', '-----']];
  message = "Should give 5 height alternating rectangle if only -p opt given with alternating arg";
  assert.deepStrictEqual(actualValue, expectedValue, message);

  actualValue = shapeGenerator.getShape(['-p']);
  expectedValue = [false];
  message = "Should give error message if -p given without arg";
  assert.deepStrictEqual(actualValue, expectedValue, message);

  actualValue = shapeGenerator.getShape(['-p', 'hello']);
  expectedValue = [false];
  message = "Should give error message if random stuff is given as arg of -p";
  assert.deepStrictEqual(actualValue, expectedValue, message);
};

const testWithOneDOption = function() {
  let actualValue = shapeGenerator.getShape(['-d', '3,4']);
  let expectedValue = [true, ['****', '****', '****']];
  let message = "Should give 3x4 filled rectangle if only -d opt given with '3,4' arg";
  assert.deepStrictEqual(actualValue, expectedValue, message);

  actualValue = shapeGenerator.getShape(['-d', '3,5,6,2']);
  expectedValue = [true, ['*****', '*****', '*****']];
  message = "Should not object if more than needed dimensions are given";
  assert.deepStrictEqual(actualValue, expectedValue, message);

  actualValue = shapeGenerator.getShape(['-d']);
  expectedValue = [false];
  message = "Should give error message if -d given without arg";
  assert.deepStrictEqual(actualValue, expectedValue, message);

  actualValue = shapeGenerator.getShape(['-d', '5,']);
  expectedValue = [false];
  message = "Should give error message if -d's asr has number then coma and then nothing followed by the coma";
  assert.deepStrictEqual(actualValue, expectedValue, message);

  actualValue = shapeGenerator.getShape(['-p', '1d,r']);
  expectedValue = [false];
  message = "Should give error message if random stuff is given as arg of -d";
  assert.deepStrictEqual(actualValue, expectedValue, message);
};

const testWithSAndP = function() {
  let actualValue = shapeGenerator.getShape(['-s', 'rectangle', '-p', 'filled']);
  let expectedValue = [true, ['*****', '*****', '*****', '*****', '*****']];
  let message = "Should give 5x5 filled rectangle if -s rectangle and -p filled given";
  assert.deepStrictEqual(actualValue, expectedValue, message);

  actualValue = shapeGenerator.getShape(['-s', 'rectangle', '-p', 'hollow']);
  expectedValue = [true, ['*****', '*   *', '*   *', '*   *', '*****']];
  message = "Should give 5x5 hollow rectangle if -s rectangle and -p hollow given";
  assert.deepStrictEqual(actualValue, expectedValue, message);

  actualValue = shapeGenerator.getShape(['-s', 'rectangle', '-p', 'interlaced']);
  expectedValue = [true, ['+-+-+', '-+-+-', '+-+-+', '-+-+-', '+-+-+']];
  message = "Should give 5x5 interlaced rectangle if -s rectangle and -p interlaced given";
  assert.deepStrictEqual(actualValue, expectedValue, message);

  actualValue = shapeGenerator.getShape(['-s', 'rectangle', '-p', 'alternating']);
  expectedValue = [true, ['-----', '+++++', '-----', '+++++', '-----']];
  message = "Should give 5x5 alternating rectangle if -s rectangle and -p alternating given";
  assert.deepStrictEqual(actualValue, expectedValue, message);

  actualValue = shapeGenerator.getShape(['-s', 'rectangle', '-p', 'angled']);
  expectedValue = [false];
  message = "Should object as angled is given as pattern of rectangle";
  assert.deepStrictEqual(actualValue, expectedValue, message);

  actualValue = shapeGenerator.getShape(['-s', 'triangle', '-p', 'alternating']);
  expectedValue = [true, ['-', '++', '---', '++++', '-----']];
  message = "Should give 5 height alternating triangle if -s triangle and -p alternating given";
  assert.deepStrictEqual(actualValue, expectedValue, message);

  actualValue = shapeGenerator.getShape(['-s', 'triangle', '-p', 'interlaced']);
  expectedValue = [true, ['+', '-+', '+-+', '-+-+', '+-+-+']];
  message = "Should give 5 height interlaced triangle if -s triangle and -p interlaced given";
  assert.deepStrictEqual(actualValue, expectedValue, message);

  actualValue = shapeGenerator.getShape(['-s', 'triangle', '-p', 'hollow']);
  expectedValue = [true, ['*', '**', '* *', '*  *', '*****']];
  message = "Should give 5 height hollow triangle if -s triangle and -p alternating given";
  assert.deepStrictEqual(actualValue, expectedValue, message);

  actualValue = shapeGenerator.getShape(['-s', 'triangle', '-p', 'filled']);
  expectedValue = [true, ['*', '**', '***', '****', '*****']];
  message = "Should give 5 height filled triangle if -s triangle and -p filled given";
  assert.deepStrictEqual(actualValue, expectedValue, message);

  actualValue = shapeGenerator.getShape(['-s', 'triangle', '-p', 'angled']);
  expectedValue = [false];
  message = "Should object as angled is given as pattern of triangle";
  assert.deepStrictEqual(actualValue, expectedValue, message);

  actualValue = shapeGenerator.getShape(['-s', 'diamond', '-p', 'alternating']);
  expectedValue = [true, ['  -', ' +++', '-----', ' +++', '  -']];
  message = "Should give 5 height alternating diamond if -s diamond and -p alternating given";
  assert.deepStrictEqual(actualValue, expectedValue, message);

  actualValue = shapeGenerator.getShape(['-s', 'diamond', '-p', 'interlaced']);
  expectedValue = [true, ['  +', ' -+-', '+-+-+', ' -+-', '  +']];
  message = "Should give 5 height interlaced diamond if -s diamond and -p interlaced given";
  assert.deepStrictEqual(actualValue, expectedValue, message);

  actualValue = shapeGenerator.getShape(['-s', 'diamond', '-p', 'hollow']);
  expectedValue = [true, ['  *', ' * *', '*   *', ' * *', '  *']];
  message = "Should give 5 height hollow diamond if -s diamond and -p alternating given";
  assert.deepStrictEqual(actualValue, expectedValue, message);

  actualValue = shapeGenerator.getShape(['-s', 'diamond', '-p', 'filled']);
  expectedValue = [true, ['  *', ' ***', '*****', ' ***', '  *']];
  message = "Should give 5 height filled diamond if -s diamond and -p filled given";
  assert.deepStrictEqual(actualValue, expectedValue, message);

  actualValue = shapeGenerator.getShape(['-s', 'diamond', '-p', 'angled']);
  expectedValue = [true, ['  *', ' / \\', '*   *', ' \\ /', '  *']];
  message = "Should give 5 height angled diamond if -s diamond and -p angled given";
  assert.deepStrictEqual(actualValue, expectedValue, message);

  actualValue = shapeGenerator.getShape(['-p', 'filled', '-s', 'triangle']);
  expectedValue = [true, ['*', '**', '***', '****', '*****']];
  message = "Should work properly if order: -p is given first and -s is given second";
  assert.deepStrictEqual(actualValue, expectedValue, message);
};

const testWithSAndD = function() {
  let actualValue = shapeGenerator.getShape(['-s', 'rectangle', '-d', '3,5']);
  let expectedValue = [true, ['*****', '*****', '*****']];
  let message = "Should give 3x5 filled rectangle if -s rectangle and -d 3,5 given";
  assert.deepStrictEqual(actualValue, expectedValue, message);

  actualValue = shapeGenerator.getShape(['-s', 'rectangle', '-d', '5']);
  expectedValue = [false];
  message = "should give error message if only one dimension given for rectangle";
  assert.deepStrictEqual(actualValue, expectedValue, message);

  actualValue = shapeGenerator.getShape(['-s', 'triangle', '-d', '6']);
  expectedValue = [true, ['*', '**', '***', '****', '*****', '******']];
  message = "Should give 6 height filled triangle if -s triangle and -d 6 given";
  assert.deepStrictEqual(actualValue, expectedValue, message);

  actualValue = shapeGenerator.getShape(['-s', 'diamond', '-d', '3']);
  expectedValue = [true, [' *', '***', ' *']];
  message = "Should give 6 height filled diamond if -s diamond and -d 3 given";
  assert.deepStrictEqual(actualValue, expectedValue, message);

  actualValue = shapeGenerator.getShape(['-s', 'diamond', '-d', '4']);
  expectedValue = [false];
  message = "Should object as even no is given as dimension of diamond";
  assert.deepStrictEqual(actualValue, expectedValue, message);

  actualValue = shapeGenerator.getShape(['-d', '5', '-s', 'triangle']);
  expectedValue = [true, ['*', '**', '***', '****', '*****']];
  message = "Should work properly if order: -d is given first and -s is given second";
  assert.deepStrictEqual(actualValue, expectedValue, message);
};

const testWithDAndP = function() {
  let actualValue = shapeGenerator.getShape(['-d', '3,5', '-p', 'filled']);
  let expectedValue = [true, ['*****', '*****', '*****']];
  let message = "Should give 3x5 filled rectangle if -d 3,5 and -p filled given";
  assert.deepStrictEqual(actualValue, expectedValue, message);

  actualValue = shapeGenerator.getShape(['-d', '4,5', '-p', 'hollow']);
  expectedValue = [true, ['*****', '*   *', '*   *', '*****']];
  message = "Should give 4x5 hollow rectangle if -s 4,5 and -p hollow given";
  assert.deepStrictEqual(actualValue, expectedValue, message);

  actualValue = shapeGenerator.getShape(['-d', '3,4', '-p', 'interlaced']);
  expectedValue = [true, ['+-+-', '-+-+', '+-+-']];
  message = "Should give 4x5 interlaced rectangle if -s 4,5 and -p interlaced given";
  assert.deepStrictEqual(actualValue, expectedValue, message);

  actualValue = shapeGenerator.getShape(['-d', '6,4', '-p', 'alternating']);
  expectedValue = [true, ['----', '++++', '----', '++++', '----', '++++']];
  message = "Should give 6x4 alternating rectangle if -d 6,4 and -p alternating given";
  assert.deepStrictEqual(actualValue, expectedValue, message);

  actualValue = shapeGenerator.getShape(['-p', 'filled', '-d', '5,4']);
  expectedValue = [true, ['****', '****', '****', '****', '****']];
  message = "Should work properly if order: -p is given first and -d is given second";
  assert.deepStrictEqual(actualValue, expectedValue, message);
};

const testWithAllSPD = function() {
  let actualValue = shapeGenerator.getShape(['-s', 'triangle', '-d', '3', '-p', 'filled']);
  let expectedValue = [true, ['*', '**', '***']];
  let message = "Should work when order is -s -d -p";
  assert.deepStrictEqual(actualValue, expectedValue, message);

  actualValue = shapeGenerator.getShape(['-s', 'triangle', '-p', 'hollow', '-d', '3']);
  expectedValue = [true, ['*', '**', '***']];
  message = "Should work when order is -s -p -d";
  assert.deepStrictEqual(actualValue, expectedValue, message);

  actualValue = shapeGenerator.getShape(['-d', '4,5', '-p', 'hollow', '-s', 'rectangle']);
  expectedValue = [true, ['*****', '*   *', '*   *', '*****']];
  message = "Should work when order is -d -p -s";
  assert.deepStrictEqual(actualValue, expectedValue, message);

  actualValue = shapeGenerator.getShape(['-d', '4,5', '-s', 'rectangle', '-p', 'alternating']);
  expectedValue = [true, ['-----', '+++++', '-----', '+++++']];
  message = "Should work when order is -d -s -p";
  assert.deepStrictEqual(actualValue, expectedValue, message);

  actualValue = shapeGenerator.getShape(['-p', 'alternating', '-s', 'triangle', '-d', '3']);
  expectedValue = [true, ['-', '++', '---']];
  message = "Should work when order is -p -s -d";
  assert.deepStrictEqual(actualValue, expectedValue, message);

  actualValue = shapeGenerator.getShape(['-p', 'alternating', '-d', '3,4', '-s', 'rectangle']);
  expectedValue = [true, ['----', '++++', '----']];
  message = "Should work when order is -p -s -d";
  assert.deepStrictEqual(actualValue, expectedValue, message);
};

const testRepeatingOption = function() {
  let actualValue = shapeGenerator.getShape(['-s', 'rectangle', '-s', 'triangle']);
  let expectedValue = [true, ['*', '**', '***', '****', '*****']];
  let message = "Should give last shape if repeated -s option is given";
  assert.deepStrictEqual(actualValue, expectedValue, message);

  actualValue = shapeGenerator.getShape(['-p', 'alternating', '-p', 'hollow']);
  expectedValue = [true, ['*****', '*   *', '*   *', '*   *', '*****']];
  message = "Should give last pattern if repeated -p option is given";
  assert.deepStrictEqual(actualValue, expectedValue, message);

  actualValue = shapeGenerator.getShape(['-d', '9,17', '-d', '3,2']);
  expectedValue = [true, ['**', '**', '**']];
  message = "Should take last dimension if repeated -d option is given";
  assert.deepStrictEqual(actualValue, expectedValue, message);
};

const testInvalidOption = function() {
  let actualValue = shapeGenerator.getShape(['-a', 'rectangle']);
  let expectedValue = [false];
  let message = "Should give error message if Invalid option is given";
  assert.deepStrictEqual(actualValue, expectedValue, message);

  actualValue = shapeGenerator.getShape(['Hi Mr. Hollow Room']);
  expectedValue = [false];
  message = "Should give error message for random input";
  assert.deepStrictEqual(actualValue, expectedValue, message);
};

const runTests = function() {
  console.log('testing with no option..');
  testWithNoOption();
  console.log('testing with one S option..');
  testWithOneSOption();
  console.log('testing with one P option..');
  testWithOnePOption();
  console.log('testing with one D option..');
  testWithOneDOption();
  console.log('testing with S and P option...');
  testWithSAndP();
  console.log('testing with S and D option...');
  testWithSAndD();
  console.log('testing with D and P option...');
  testWithDAndP();
  console.log('testing with S, P and D option...');
  testWithAllSPD();
  console.log('testing with repeated option...');
  testRepeatingOption();
  console.log('testing with Invalid option...');
  testInvalidOption();
};

runTests();

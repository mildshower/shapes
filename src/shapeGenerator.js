const shapes = require('./shapes.js');
const util = require('./utilities.js');

const getShape = function(userInputs) {
  const combination = util.parseShapeProperties(userInputs);
  if(!combination) {
    return [false];
  }
  const row = +combination['-d'].split(',')[0];
  const column = +combination['-d'].split(',')[1];
  return [true, shapes[combination['-s']](combination['-p'], row, column)];
};

exports.getShape = getShape;

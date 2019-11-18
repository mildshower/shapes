const shapeGenerator = require('./src/shapeGenerator.js');
const util = require('./src/utilities.js');

const printPattern = function() {
  const userInputs = process.argv.slice(2);
  const shape = shapeGenerator.getShape(userInputs);
  const printableString = util.getPrintableString(shape);
  console.log(printableString);
}

printPattern();

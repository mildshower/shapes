const validations = require('./validations.js');

const getChars = function(character, times) {
  return character.repeat(times);
};

const getPrintableString = function(generatedShape) {
  if(!generatedShape[0]) {
    return "Given set of options is not valid. Pleage give valid set of Options";
  }
  return generatedShape[1].join('\n');
};

const getRange = function(lim, optionalIncreament) {
  const range = [];
  const increament = optionalIncreament || 1;
  let num = 1;

  for(let count = 1; count <= lim; count ++) {
    range.push(num);
    num += increament;
  }

  return range;
};

const parseShapeProperties = function(userInput) {
  const properties = {'-s': 'rectangle', '-p': 'filled', '-d': '5,5' };

  for(let index = 0; index < userInput.length; index += 2) {
    const option = userInput[index];
    const arg = userInput[index + 1];
    if(!validations.isValidPair(option, arg)) {
      return undefined;
    }
    properties[option] = arg;
  }

  if(validations.isCombinationValid(properties['-s'], properties['-d'], properties['-p'])) {
    return properties;
  }
};


exports.getPrintableString = getPrintableString;
exports.getChars = getChars;
exports.getRange = getRange;
exports.parseShapeProperties = parseShapeProperties;

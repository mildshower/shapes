const isWholeNum = function(element) {
  return +element == parseInt(element) && Number.isInteger(+element) && +element >= 0;
};

const argValidationForS = function(option, arg) {
  const isValidSArg = ['triangle', 'rectangle', 'diamond'].includes(arg);
  return option === '-s' && isValidSArg;
};

const argValidationForP = function(option, arg) {
  const isValidPArg = ['filled', 'hollow', 'alternating', 'interlaced', 'angled'].includes(arg);
  return option === '-p' && isValidPArg;
};

const argValidationForD = function(option, arg) {
  const isOptD = option === '-d'; 
  const isArgStr = (arg != undefined);
  return isOptD && isArgStr && arg.split(',').every(isWholeNum);
};

const isValidPair = function(option, arg) {
  const isValidDPair = argValidationForD(option, arg);
  const isValidSPair = argValidationForS(option, arg);
  const isValidPPair = argValidationForP(option, arg);
  return isValidPPair || isValidDPair || isValidSPair;
};

const isCombinationValid = function(shapeName, dimensions, pattern) {
  const rectDimMatch = !(shapeName == 'rectangle' && dimensions.split(',').length < 2);
  const diamDimMatch = !(shapeName == 'diamond' && dimensions.split(',')[0] % 2 == 0);
  const diamPatMatch = !(pattern == 'angled' && shapeName != 'diamond');
  return rectDimMatch && diamPatMatch && diamDimMatch;
};

exports.isValidPair = isValidPair;
exports.isCombinationValid = isCombinationValid;

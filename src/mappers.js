const util = require('./utilities.js');

const getHollowRow = function(rowLength, rowNum) {
  const filledRow = util.getChars('*', rowLength);
  return filledRow.split('').fill(' ', 1, -1).join('');
};

const getFilledRow = function(rowLength) {
  return util.getChars('*', rowLength);
};

const getAlternatingRow = function(rowLength, rowNum) {
  const characters = ['-', '+']
  return util.getChars(characters[rowNum % 2], rowLength);
};

const getInterlacedRow = function(rowLength, rowNum) {
  const listOf1s = util.getRange(rowLength).fill(1);
  const rowBeginWithMinus = listOf1s.map(getAlternatingRow).join('');
  const rowBeginWithPlus = '+' + rowBeginWithMinus.slice(0, -1);
  const interlacingRows = [rowBeginWithPlus, rowBeginWithMinus];
  return interlacingRows[rowNum % 2];
};

const getAddSpaceMapper = function(length) {
  return function(row) {
    const noOfSpaces = (length - row.length) / 2;
    return util.getChars(' ', noOfSpaces) + row;
  };
};

const reverseStr = function(str) {
  return str.split('').reverse().join('');
};

const getAngledRow = function(length) {
  const range = util.getRange(length);
  range[0] = '/';
  range[range.length - 1] = '\\';
  return range.fill(' ', 1, -1).join('');
};

exports.getFilledRow = getFilledRow;
exports.getHollowRow = getHollowRow;
exports.getAlternatingRow = getAlternatingRow;
exports.getInterlacedRow = getInterlacedRow;
exports.getAddSpaceMapper = getAddSpaceMapper;
exports.reverseStr = reverseStr;
exports.getAngledRow = getAngledRow;

const util = require('./utilities.js');
const mappers = require('./mappers.js')

const filledRectangle = function(row, column) {
  const rowLengths = util.getRange(row).fill(column);
  return rowLengths.map(mappers.getFilledRow);
};

const hollowRectangle = function(row, column) {
  const rowLengths = util.getRange(row).fill(column);
  const filledRows = rowLengths.map(mappers.getFilledRow);
  const hollowRow = mappers.getHollowRow(column);
  return filledRows.fill(hollowRow, 1, -1);
};

const interlacedRectangle = function(row, column) {
  const rowLengths = util.getRange(row).fill(column);
  return rowLengths.map(mappers.getInterlacedRow);
};

const alternatingRectangle = function(row, column) {
  const rowLengths = util.getRange(row).fill(column);
  return rowLengths.map(mappers.getAlternatingRow);
};

const rectangle = function(pattern, row, column) {
  const rectFuncs = {filled: filledRectangle, hollow: hollowRectangle,
    alternating: alternatingRectangle, interlaced: interlacedRectangle};
  return rectFuncs[pattern](row, column);
};

const filledTriangle = function(height) {
  const rowLengths = util.getRange(height);
  return rowLengths.map(mappers.getFilledRow);
};

const interlacedTriangle = function(height) {
  const rowLengths = util.getRange(height);
  return rowLengths.map(mappers.getInterlacedRow);
};

const hollowTriangle = function(height) {
  const rowLengths = util.getRange(height);
  const lastRowLength = rowLengths.slice(-1);
  const lastRow = lastRowLength.map(mappers.getFilledRow);
  const restRowLengths = rowLengths.slice(0, -1);
  return restRowLengths.map(mappers.getHollowRow).concat(lastRow);
};

const alternatingTriangle = function(height) {
  const rowLengths = util.getRange(height);
  return rowLengths.map(mappers.getAlternatingRow);
};

const triangle = function(pattern, height) {
  const triangleFuncs = {filled: filledTriangle, hollow: hollowTriangle,
    alternating: alternatingTriangle, interlaced: interlacedTriangle};
  return triangleFuncs[pattern](height);
};

const getFilledDiamondRows = function(rowLengths) {
  return rowLengths.map(mappers.getFilledRow);
};

const getHollowDiamondRows = function(rowLengths) {
  return rowLengths.map(mappers.getHollowRow);
};

const getAlternatingDiamondRows = function(rowLengths) {
  return rowLengths.map(mappers.getAlternatingRow);
};

const getInterlacedDiamondRows = function(rowLengths) {
  return rowLengths.map(mappers.getInterlacedRow);
};

const getAngledDiamondsRows = function(rowLengths) {
  const middleRowIndex = (rowLengths.length - 1) / 2;
  const middleRowLength = rowLengths[middleRowIndex];
  const middleRow = [middleRowLength].map(mappers.getHollowRow);
  const upperRowsLengths = rowLengths.slice(0, middleRowIndex);
  const upperAngledRowLengths = upperRowsLengths.slice(1);
  const upperAngledRows = upperAngledRowLengths.map(mappers.getAngledRow);
  const firstLastRowLength = upperRowsLengths.slice(0, 1);
  const firstLastRow = firstLastRowLength.map(mappers.getFilledRow);
  const lowerAlngledRows = upperAngledRows.slice().reverse().map(mappers.reverseStr);
  return firstLastRow.concat(upperAngledRows).concat(middleRow).concat(lowerAlngledRows).concat(firstLastRow);
}

const diamond = function(pattern, height) {
  const rowLengthsTillMiddle = util.getRange((height + 1) / 2, 2);
  const rowLengths = rowLengthsTillMiddle.concat(rowLengthsTillMiddle.slice(0, -1).reverse());
  const rowGenerators = {filled: getFilledDiamondRows, hollow: getHollowDiamondRows,
    alternating: getAlternatingDiamondRows, interlaced: getInterlacedDiamondRows,
    angled: getAngledDiamondsRows};
  const rows = rowGenerators[pattern](rowLengths);
  const addSpace = mappers.getAddSpaceMapper(height);
  return rows.map(addSpace);
};

exports.rectangle = rectangle;
exports.triangle = triangle;
exports.diamond = diamond;

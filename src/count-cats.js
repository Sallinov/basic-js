const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  throw new CustomError('Not implemented');
  let count = 0;
  arr.forEach(element => element.forEach(element => count += (element === '^^'  ? 1 : 0)));
  return count;
};

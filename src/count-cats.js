const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let count = 0;
  matrix.forEach(element => element.forEach(element => count += (element === '^^'  ? 1 : 0)));
  return count;
};

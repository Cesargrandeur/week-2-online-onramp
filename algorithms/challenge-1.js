function missingNumber(numArr) {
  let numArrs = [];
  for (let i = 1; i < 10; i++) {
    if (numArr.indexOf(i) === -1) {
      numArrs.push(i);
    }
  }
  if (numArrs.length === 1) {
    return numArrs[0];
  }
  if (numArrs.length === 0) {
    return false;
  }
  return numArrs.sort();
}

module.exports = missingNumber;

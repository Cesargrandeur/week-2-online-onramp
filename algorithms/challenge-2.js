function numSwap(number) {
  let numArr = number.toString().split("");

  if (numArr.length % 2 === 0) {
    for (let i = 0; i < numArr.length / 2; i += 2) {
      [numArr[i], numArr[i + 1]] = [numArr[i + 1], numArr[i]];
    }
  }
  return parseInt(numArr.join(""));
}

module.exports = numSwap;

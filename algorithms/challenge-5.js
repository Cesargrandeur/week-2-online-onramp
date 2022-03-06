function arraySum(arr1, arr2) {
  return arr1.map(function (num, i) {
    return num + arr2[i % arr2.length];
  });
}

module.exports = arraySum;

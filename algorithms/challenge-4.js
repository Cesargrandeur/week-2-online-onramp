function withdraw(amount) {
  let remainder100 = amount % 100;
  let numDivisible100 = (amount - remainder100) / 100;
  let remainder50 = remainder100 % 50;
  let numDivisible50 = (remainder100 - remainder50) / 50;
  let numDivisible20 = remainder50 / 20;
  return [numDivisible100, numDivisible50, numDivisible20];
}

module.exports = withdraw;

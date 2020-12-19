const generateNumberBetween = (min, max) => {
  if (min > max) {
    [max, min] = [min, max];
  }

  return new Promise(resolve => {
    const factor = max - min + 1 + min;
    const randomNumber = parseInt(Math.random() * factor);

    resolve(randomNumber);
  });
};

generateNumberBetween(1, 45)
  .then(number => number * 10)
  .then(multiplyByTen => `O número gerado foi:  ${multiplyByTen}`)
  .then(console.log);

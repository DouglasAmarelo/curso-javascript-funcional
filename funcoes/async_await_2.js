const generateNumberBetween = (min, max) => {
  if (min > max) [max, min] = [min, max];

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

const multiplyByTen = number => number * 10;

const genrateNumber = async () => {
  const generatedNumber = await generateNumberBetween(1, 45);

  console.log(`O número gerado de novo foi ${multiplyByTen(generatedNumber)}`);
};

genrateNumber();

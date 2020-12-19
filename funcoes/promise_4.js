const generateNumberBetween = (min, max, time = 3000) => {
  if (min > max) {
    [max, min] = [min, max];
  }

  return new Promise(resolve => {
    const factor = max - min + 1 + min;
    const randomNumber = parseInt(Math.random() * factor);

    setTimeout(() => {
      resolve(randomNumber);
    }, time);
  });
};

const generateSomeNumbers = () => {
  return Promise.all([
    generateNumberBetween(1, 60, 4000),
    generateNumberBetween(1, 60, 1000),
    generateNumberBetween(1, 60, 500),
    generateNumberBetween(1, 60, 3000),
    generateNumberBetween(1, 60, 100),
    generateNumberBetween(1, 60, 1500),
  ]);
};

generateSomeNumbers().then(console.log);

// Uma função pura é uma função em que
// o valor de retorno é dererminado APENAS por seus valores de entrada,
// sem efeitos colaterais observáveis.

// Impura
const genarateRandomNumber = (min = 0, max = 100) => {
  const factor = max - min + 1;
  return parseInt(Math.random() * factor) + min;
};

console.log('@ Random Number: ', genarateRandomNumber(1, 30));
console.log('@ Random Number: ', genarateRandomNumber(1, 30));
console.log('@ Random Number: ', genarateRandomNumber(1, 30));
console.log('@ Random Number: ', genarateRandomNumber(1, 30));
console.log('@ Random Number: ', genarateRandomNumber(1, 30));

const itWorksOrNot = (value, errorChance) => {
  return new Promise((resolve, reject) => {
    if (Math.random() < errorChance) {
      return reject('Ocorreu um erro');
    }

    resolve(value);
  });
};

const realType = value => Object.prototype.toString.call(value);

itWorksOrNot('Testando...', 0.1)
  .then(value => value.split(''))
  .then(value => value.join('.'))
  .then(value => value.toUpperCase())
  .then(value => console.log(`Valor: ${value} -> ${realType(value)}`))
  .catch(error => console.log(`Erro Geral: ${error}`));

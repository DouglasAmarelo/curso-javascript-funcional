const { interval, from } = require('rxjs');

// Interval é um operador de criação que retorna um obervable
const gerarNumeros = interval(500);

// Assim podemos nos registrar no observable
const sub1 = gerarNumeros.subscribe(number => {
  console.log(Math.pow(2, number));
});

const sub2 = gerarNumeros.subscribe(console.log);

// Depois de se registar, é retornado uma função
// possibilitando cancelar o registro feito anteriormente
setTimeout(() => sub1.unsubscribe(), 8000); // Cancelar o registro depois de 8 segundos
setTimeout(() => sub2.unsubscribe(), 6000); // Cancelar o registro depois de 6 segundos

// Também é possível criar um fluxo de dados usando os
// Operadores de Criação. Nesse caso o uso do Operador "from"
from([1, 2, 3, 4, 5]).subscribe(console.log);

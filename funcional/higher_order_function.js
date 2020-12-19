// Funções que operam em outras funções,
// tomando-as como argumentos ou retornando-as,
// são chamdas de higher order functions.

const executar = (fn, ...params) => (desc = '') => `${desc} ${fn(...params)}`;

const somar = (a, b, c) => a + b + c;

const multiplicar = (a, b) => a * b;

const result1 = executar(somar, 4, 5, 6)('Resultado da soma: ');
const result2 = executar(multiplicar, 30, 40)('Resultado da multiplicação: ');
const result3 = executar(multiplicar, 30, 40);

console.log('@ Executar Somar:', result1);
console.log('@ Executar Multiplicar:', result2);
console.log('@ Executar Multiplicar:', result3('Alllowww: '));

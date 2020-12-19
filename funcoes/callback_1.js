// Callback
const calculate = (fn, n1, n2) => fn(n1, n2);
const multiplicar = (n1, n2) => n1 * n2;
const somar = (n1, n2) => n1 + n2;
const subtrair = (n1, n2) => n1 - n2;

console.log('multiplicar: ', calculate(multiplicar, 2, 5));
console.log('somar: ', calculate(somar, 2, 5));
console.log('subtrair: ', calculate(subtrair, 2, 5));

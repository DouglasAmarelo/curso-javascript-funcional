require('./customArrayMethods');

const numbers = [1, 2, 3, 4, 5];

const dobro = number => number * 2;
const somar5 = n1 => n1 + 5;

const doubleNumbers = numbers.map(dobro);
console.log(doubleNumbers);

const numerosSomados = numbers.customMap(somar5);
console.log('Somados: ', numerosSomados);

const people = [
  { nome: 'Douglas', idade: '30' },
  { nome: 'Jéssica', idade: '29' },
  { nome: 'Bruno', idade: '23' },
  { nome: 'Gui', idade: '30' },
];

people.customMap(({ nome, idade }, i, a) => {
  console.log('@', i + 1, nome, idade, a[i]);
});

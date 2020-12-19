const letrasAninhadas = [
  ['O', ['l'], 'á'],
  [' '],
  ['m', ['u', 'n'], 'd', 'o'],
  ['!', '!', '!'],
];

console.log('@ FLAT: ', letrasAninhadas.flat()); // First level
console.log('@ FLAT: ', letrasAninhadas.flat(2)); // Second level
console.log('@ FLAT: ', letrasAninhadas.flat().flat()); // Second level

const letras = letrasAninhadas.flat(Infinity); // Infinit level

console.log('@ FLAT: ', letras);

const resultado = letras
  .map(l => l.toUpperCase())
  .reduce((acc, curr) => (acc += curr), '');

console.log('@ Flat Map: ', resultado);

const resultadoFlat = letrasAninhadas
  .flatMap(l => [l, ','])
  .reduce((acc, curr) => (acc += curr), '');

console.log('@ Flat Map: ', resultadoFlat);

const nums = [3, 1, 7, 9, 4, 6];

const ordenarNumbers = numbersList => [...numbersList].sort();

console.log('@ Imutabilidade:', nums, '// Original');
console.log('@ Imutabilidade:', ordenarNumbers(nums), '// Alterated');
console.log('@ Imutabilidade:', nums, '// Original');

// Uma opção para imutabilidade seria:
const nuns2 = Object.freeze([5, 9, 2, 4, 1, 3]);

// console.log('@ Freeze:', nuns2, '// Original');
// console.log('@ Freeze:', nuns2.sort(), '// Sorted'); // Retorna ERRO
// console.log('@ Freeze:', nuns2, '// Original');

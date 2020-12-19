const nums = [4, 8, 3, 2, 9, 1, 9, 3];

// #01 - Dados mutáveis
// Estratégia imperativa e não declarativa
// let total = 0;

// for (let i = 0; i < nums.length; i++) {
//   total += nums[i];
// }

// console.log('@ Imutabilidade:', total, '// For');

// #02 - Reduce
// const somar = (num1, num2) => num1 + num2;
// const total = nums.reduce(somar, 0);

// console.log('@ Imutabilidade:', total, '// Reduce');

// #03 - Recursividade
const somarArray = (numbersList, total = 0) => {
  if (numbersList.length === 0) {
    return total;
  }

  return somarArray(numbersList.slice(1), total + numbersList[0]);
};

const total = somarArray(nums);

console.log('@ Imutabilidade:', total, '// Recursividade');

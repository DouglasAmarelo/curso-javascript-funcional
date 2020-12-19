// Uma função pura é uma função em que
// o valor de retorno é dererminado APENAS por seus valores de entrada,
// sem efeitos colaterais observáveis.

let quantidadeDeExecucoes = 0;

// Pura
const somar = (n1, n2) => {
  quantidadeDeExecucoes++; // Efeito colateral observável

  return n1 + n2;
};

console.log('@ Quantidade', quantidadeDeExecucoes);
console.log('@ Pura: ', somar(10, 20));
console.log('@ Pura: ', somar(10, 20));
console.log('@ Pura: ', somar(10, 20));
console.log('@ Pura: ', somar(10, 20));
console.log('@ Pura: ', somar(10, 20));
console.log('@ Quantidade', quantidadeDeExecucoes);

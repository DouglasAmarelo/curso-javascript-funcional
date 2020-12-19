require('./customArrayMethods');

const carrinho = [
  { nome: 'Caneta', quantidade: 10, preco: 7.99, fragil: true },
  { nome: 'Impressora', quantidade: 1, preco: 649.5, fragil: true },
  { nome: 'Caderno', quantidade: 4, preco: 27.1, fragil: false },
  { nome: 'Lápis', quantidade: 3, preco: 5.82, fragil: false },
  { nome: 'Tesoura', quantidade: 1, preco: 19.2, fragil: true },
];

const getTotal = ({ quantidade, preco }) => quantidade * preco;
const somar = (acc, curr) => acc + curr;

const totalGeral = carrinho.map(getTotal).reduce(somar);
console.log(totalGeral);

/**
 * TODO:
 * 1. Retornar somente os produtos frágeis
 * 2. Somar a quantidade * preço => total
 * 3. Media totais
 */

const { media } = carrinho
  .customFilter(({ fragil }) => fragil)
  .customMap(getTotal)
  .customReduce(
    (acc, curr) => {
      const quantidade = acc.quantidade + 1;
      const total = acc.total + curr;
      const media = total / quantidade;

      return { quantidade, total, media };
    },
    {
      quantidade: 0,
      total: 0,
      media: 0,
    }
  );

console.log('@media', media);

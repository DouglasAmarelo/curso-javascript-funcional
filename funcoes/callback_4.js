require('./customArrayMethods');

const carrinho = [
  { nome: 'Caneta', quantidade: 10, preco: 7.99 },
  { nome: 'Impressora', quantidade: 0, preco: 649.5 },
  { nome: 'Caderno', quantidade: 4, preco: 27.1 },
  { nome: 'Lápis', quantidade: 3, preco: 5.82 },
  { nome: 'Tesoura', quantidade: 1, preco: 19.2 },
];

const gratterThanZero = ({ quantidade }) => quantidade > 0;
const getName = ({ nome }) => nome;

const validProducts = carrinho.customFilter(gratterThanZero).customMap(getName);
console.log('validProducts >', validProducts);

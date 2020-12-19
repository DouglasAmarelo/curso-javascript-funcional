// Functors são objetos que implemetam a função MAP
// que também é um "wrapper" de um valor

// ARRAY é um exemplo de FUNCTOR
const nums = [1, 2, 3, 4, 5, 6];
const newNums = nums.map(num => num + 10).map(num => num * 2);

console.log('@ Functors: ', nums);
console.log('@ Functors: ', newNums);

const tipoSeguro = function (valor) {
  return {
    valor,
    valorInvalido() {
      return this.valor === null || this.valor === undefined;
    },
    map(fn) {
      if (this.valorInvalido()) {
        return tipoSeguro(null);
      }

      const novoValor = fn(this.valor);
      return tipoSeguro(novoValor);
    },
    flatMap(fn) {
      return this.map(fn).valor;
    },
  };
};

const { valor: valorTipoSeguro } = tipoSeguro('Este é um texto')
  .map(text => text.toUpperCase())
  .map(text => `${text}!!!!!!!!!!!!`)
  .map(text => [...text].join(' '));

console.log('@ Functors: ', valorTipoSeguro, '// tipoSeguro');

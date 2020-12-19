// Lazy evaluation
const textoComTamanhoEntre = min => {
  return max => {
    return erro => {
      return (texto = '') => {
        const tamanho = texto.trim().length;

        if (tamanho < min || texto > max) {
          throw erro;
        }
      };
    };
  };
};

// Versões parciais da função textoComTamanhoEntre.
const forcarTamanhoPadrao = textoComTamanhoEntre(4)(255);
const focarNomeProdutoValido = forcarTamanhoPadrao('Nome inválido');

// Produtos
const produto_01 = { name: 'A', price: 14.99, discount: 0.25 };
const produto_02 = { name: 'AB', price: 1599.99, discount: 0.15 };

// Sem currying
const aplicarValidacao = (fn, valor) => {
  try {
    fn(valor);
  } catch (error) {
    return { error };
  }
};

console.log(
  '@ - Sem currying',
  aplicarValidacao(focarNomeProdutoValido, produto_01.name)
);
console.log(
  '@ - Sem currying',
  aplicarValidacao(focarNomeProdutoValido, produto_02.name)
);

// Com currying
const aplicarValidacao2 = fn => valor => {
  // Lazy evaluation
  try {
    fn(valor);
  } catch (error) {
    return { error };
  }
};

const validarProduto = aplicarValidacao2(focarNomeProdutoValido);

console.log('@ + Com currying', validarProduto(produto_01.name));
console.log('@ + Com currying', validarProduto(produto_02.name));

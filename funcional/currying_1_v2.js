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
const produto_02 = { name: 'Máquina de lavar', price: 1599.99, discount: 0.15 };

focarNomeProdutoValido(produto_01.name);

// Fnção sem currying
const textoComTamanhoEntre = (min, max, erro, texto = '') => {
  const tamanho = texto.trim().length;

  if (tamanho < min || texto > max) {
    throw erro;
  }
};

// Produto
const produto_01 = { name: 'A', price: 14.99, discount: 0.25 };

textoComTamanhoEntre(4, 25, 'Nome inválido', produto_01.name);

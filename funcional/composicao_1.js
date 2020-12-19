// Helper para compor funções
const composicao = (...funcoes) => {
  return valor => {
    return funcoes.reduce((valorAcumulado, funcaoAtual) => {
      return funcaoAtual(valorAcumulado);
    }, valor);
  };
};

// Retorna o texto em maiúsculo
const gritar = texto => texto.toUpperCase();

// Retorna o texto com pontos de exclamação
const enfatizar = texto => `${texto} !!!!!!!`;

// Separa o texto por pontos
const separarPorPonto = texto => texto.split('').join('.');

// Função intermediária que faz a transformação do texto
const transformarTexto = composicao(gritar, separarPorPonto, enfatizar);

// Variável que armazena o texto transformado
const textoTransformado1 = transformarTexto('Douglas');

// Exemplo sem função intermediária
const textoTransformado2 = composicao(
  gritar,
  separarPorPonto,
  enfatizar
)('#mag');

console.log('@ Composição: ', textoTransformado1); // @ Composição:  D.O.U.G.L.A.S !!!!!!!
console.log('@ Composição: ', textoTransformado2); // @ Composição:  #.M.A.G !!!!!!!

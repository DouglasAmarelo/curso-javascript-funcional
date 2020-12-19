// Helper para compor funções
const composicao = (...funcoes) => {
  return valor => {
    return funcoes.reduce(async (valorAcumulado, funcaoAtual) => {
      if (Promise.resolve(valorAcumulado) === valorAcumulado) {
        const valorResolvido = await valorAcumulado;
        return funcaoAtual(valorResolvido);
      }

      return funcaoAtual(valorAcumulado);
    }, valor);
  };
};

const gritar = texto => texto.toUpperCase();

const enfatizar = texto => `${texto} !!!!!!!`;

const separarPorPonto = texto => texto.split('').join('.');

const separarPorEspaco = text => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve([...text].join(' '));
    }, 3000);
  });
};

const transformarTexto = composicao(
  gritar,
  separarPorPonto,
  separarPorEspaco,
  enfatizar
);

const textoTransformado1 = transformarTexto('Douglas');

textoTransformado1.then(texto => console.log('@ Composição: ', texto)); // @ Composição:  D.O.U.G.L.A.S !!!!!!!

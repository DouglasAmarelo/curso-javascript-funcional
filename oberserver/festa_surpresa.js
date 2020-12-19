// Esse exemplo se baseia na idéia de uma festa surpresa.
// Para exemplificar, temos como personagens:

// #Namorad_a
// - Responsável pela organização da festa
// - Solicita que o #Porteiro avise quando o #Namorad_o chegar

// #Namorad_o
// - Aniversariante

// #Porteiro
// - Responsável por observar o #Namorad_o
// - Avisa a #Namorad_a e o #Sindico (qualquer interessado) quando o #Namorad_o chegar

// #Sindico
// - Responsável por monitorar o barulho da festa
// - Solicita que o porteiro avise quando o #Namorad_o chegar (pra saber quando a festa começa)

const readline = require('readline');

const obterResposta = pergunta => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise(resolve => {
    rl.question(pergunta, resposta => {
      resolve(resposta);
      rl.close();
    });
  });
};

// Observer
const namorada = () => {
  console.log('@ #Namorad_a: ', 'Apagar as luzes...');
  console.log('@ #Namorad_a: ', 'Pedir silêncio...');
  console.log('@ #Namorad_a: ', 'Gritar surpresa!!!');
  console.log('\n');
};

// Observer
const sindico = evento => {
  console.log('@ Sindico: ', 'Monitorando o barulho!');
  console.log('@ Sindico: ', evento.resposta);
  console.log('@ Sindico: ', evento.data);
  console.log('\n');
};

// Subject
// Normalmente o Subject vai ter alguma estrutura de loop
// porque ele precisa trabalhar de forma ativa avisando
// quem está esperando para trabalhar de forma reativa

const porteiro = async listaDeInteressados => {
  while (true) {
    const resposta = String(
      await obterResposta('@ O #Namorad_o chegou? (s | N | q) \n')
    ).toLowerCase(); // s = chegou | N = Qualquer resposta | q = Sair do programa

    if (resposta === 's') {
      // Nesse ponto, os observadores são notivicados
      (listaDeInteressados || []).forEach(interessado =>
        interessado({
          resposta,
          data: Date.now(),
        })
      ); // Interessado = Oberserver
    } else if (resposta === 'q') {
      break;
    }
  }
};

// Chamada da função que registro os observadores
// Observadores: Namorada e Síndico
// Subject: Porteiro
porteiro([namorada, sindico]);

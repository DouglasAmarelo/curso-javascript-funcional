const fs = require('fs');
const path = require('path');

const caminho = path.join(__dirname, 'dados.txt');

const exibirConteudo = (err, conteudo) => {
  if (err) {
    throw new Error(`Deu ruim: ${err}`);
  }

  console.log(conteudo.toString());
};

fs.readFile(caminho, {}, exibirConteudo);

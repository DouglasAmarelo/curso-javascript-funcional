const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'dados.txt');

const readText = (path = filePath) => {
  return new Promise(resolve => {
    fs.readFile(path, (error, content) => {
      if (error) throw new Error(`Deu ruim: ${error}`);
      resolve(content.toString());
    });
  });
};

const changeToUpperCase = text => text.toUpperCase();
const changeNumbers = text => text.replace(/(\d+)/gim, `[[$1]]`);
const removeTabs = text => text.replace(/(\t)+/gim, '');
const changeToArray = text => text.split('\n');
const changeToString = text => text.join(', ');

readText()
  .then(changeToUpperCase)
  .then(changeNumbers)
  .then(removeTabs)
  .then(changeToArray)
  .then(changeToString)
  .then(console.log);

const getFirstElement = stringOrArray => stringOrArray[0];
const changeToLowercase = text => String(text).toLowerCase();
const printText = text => console.log(text);

const myPromise = new Promise(resolve => {
  resolve(['Jéssica', 'Douglas', 'Guilherme', 'Bruno']);
});

myPromise
  .then(getFirstElement)
  .then(getFirstElement)
  .then(changeToLowercase)
  .then(printText);

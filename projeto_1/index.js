const path = require('path');
const {
  getFilesPathFromDirectory,
  filterByExtension,
  getFilesContent,
  filesContentToString,
  breakContentIntoLines,
  removeEmptyLines,
  removeLinesThatContains,
  removeCharacters,
  breakContentByWords,
  groupByWords,
  orderByAttribute,
} = require('./funcoes');

const directoryPath = path.join(__dirname, '..', 'dados', 'legendas');
const specialCharacters = [
  '.',
  '?',
  '-',
  ',',
  '"',
  '♪',
  '_',
  '<i>',
  '</i>',
  '\r',
  '[',
  ']',
  '(',
  ')',
];

getFilesPathFromDirectory(directoryPath)
  .then(filesPaths => filterByExtension(filesPaths))
  .then(filteredFiles => getFilesContent(filteredFiles))
  .then(allFilesContent => filesContentToString(allFilesContent))
  .then(unifiledContent => breakContentIntoLines(unifiledContent))
  .then(contentInLines => removeEmptyLines(contentInLines))
  .then(contentInLines => removeLinesThatContains(contentInLines, '-->'))
  .then(contentInLines => removeLinesThatContains(contentInLines, /\d+\r/))
  .then(contentInLines => removeCharacters(contentInLines, specialCharacters))
  .then(contentInLines => filesContentToString(contentInLines))
  .then(unifiledContent => breakContentByWords(unifiledContent))
  .then(contentInWords => groupByWords(contentInWords))
  .then(groupOfWors => orderByAttribute(groupOfWors, 'quantity'))
  .then(console.log);

console.log('filesPath', directoryPath);

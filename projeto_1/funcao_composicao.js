const path = require('path');
const {
  compose,
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

const transformFilesFromDirectoryIntoAListOfMoreSpokenWords = compose(
  directoryPath => getFilesPathFromDirectory(directoryPath),
  filesPaths => filterByExtension(filesPaths),
  filteredFiles => getFilesContent(filteredFiles),
  allFilesContent => filesContentToString(allFilesContent),
  unifiledContent => breakContentIntoLines(unifiledContent),
  contentInLines => removeEmptyLines(contentInLines),
  contentInLines => removeLinesThatContains(contentInLines, '-->'),
  contentInLines => removeLinesThatContains(contentInLines, /\d+\r/),
  contentInLines => removeCharacters(contentInLines, specialCharacters),
  contentInLines => filesContentToString(contentInLines),
  unifiledContent => breakContentByWords(unifiledContent),
  contentInWords => groupByWords(contentInWords),
  groupOfWors => orderByAttribute(groupOfWors, 'quantity')
);

transformFilesFromDirectoryIntoAListOfMoreSpokenWords(directoryPath).then(
  console.log
);

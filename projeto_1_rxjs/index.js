const path = require('path');
const { toArray, map } = require('rxjs/operators');
const _ = require('lodash');
const helperFunctions = require('./funcoes');

const {
  getFilesPathFromDirectory,
  filterByExtension,
  getFileContent,
  breakContentIntoLines,
  removeEmptyLines,
  removeLinesThatContains,
  removeCharacters,
  breakContentByWords,
  groupByWords,
} = helperFunctions;

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
  '!',
];

getFilesPathFromDirectory(directoryPath)
  .pipe(
    filterByExtension('.srt'),
    getFileContent(),
    breakContentIntoLines(),
    removeEmptyLines(),
    removeLinesThatContains('-->'),
    removeLinesThatContains(/\d+/),
    removeCharacters(specialCharacters),
    breakContentByWords(),
    toArray(),
    groupByWords(),
    map(array => _.sortBy(array, el => -el.quantity))
  )
  .subscribe(value => console.log(value));

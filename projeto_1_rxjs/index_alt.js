const path = require('path');
const { toArray, map, groupBy, mergeMap, reduce } = require('rxjs/operators');
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
    groupBy(word => word),
    // mergeMap(group => group.pipe(reduce((acc, curr) => [...acc, curr], []))) // usando o Reduce
    mergeMap(group => group.pipe(toArray())), // Usando o toArray
    map(groupedWords => {
      const [element] = groupedWords;
      return { element, quantity: groupedWords.length };
    }),
    toArray(),
    map(array => _.sortBy(array, el => -el.quantity))
  )
  .subscribe(value => console.log(value));

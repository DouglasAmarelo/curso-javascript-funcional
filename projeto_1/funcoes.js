const fs = require('fs');
const path = require('path');

const compose = (...functions) => {
  return value => {
    return functions.reduce(async (accValue, currFunction) => {
      if (Promise.resolve(accValue) === accValue) {
        const resolvedvalue = await accValue;
        return currFunction(resolvedvalue);
      }

      return currFunction(accValue);
    }, value);
  };
};

const getFilesPathFromDirectory = directoryPath => {
  return new Promise((resolve, reject) => {
    try {
      const files = fs.readdirSync(directoryPath);
      const filesPath = files.map(file => path.join(directoryPath, file));
      resolve(filesPath);
    } catch (error) {
      reject(error);
    }
  });
};

const filterByExtension = (filesPathList, extension = '.srt') => {
  if (!extension) {
    throw new Error('"extension" parameter is obrigatory');
  }
  return filesPathList.filter(filePath => filePath.endsWith(extension));
};

const getFileContent = filePath => {
  return new Promise((resolve, reject) => {
    try {
      const fileContent = fs.readFileSync(filePath, { encoding: 'utf-8' });
      resolve(fileContent.toString());
    } catch (error) {
      reject(error);
    }
  });
};

const getFilesContent = filesPathList => {
  const filesContent = filesPathList.map(filePath => getFileContent(filePath));
  return Promise.all(filesContent);
};

const filesContentToString = filesContentList => {
  return filesContentList.join(' ');
};

const breakContentIntoLines = content => {
  return content.split('\n');
};

const removeEmptyLines = contentInLines => {
  return contentInLines.filter(line => line.trim());
};

const removeLinesThatContains = (contentInLines, filterRule) => {
  const regex = new RegExp(filterRule, 'gim');
  return contentInLines.filter(line => !regex.test(line));
};

const removeCharacters = (contentInLines, characters) => {
  return contentInLines.map(contentPerLine => {
    return characters.reduce((text, char) => {
      return text.split(char).join('').trim();
    }, contentPerLine);
  });
};

const breakContentByWords = content => {
  return content.split(' ');
};

const groupByWords = wordList => {
  const reducedList = wordList.reduce((newWordList, currentWord) => {
    const word = currentWord.toLowerCase();
    const quantity = newWordList[word] ? newWordList[word].quantity + 1 : 1;

    newWordList[word] = { word, quantity };

    return newWordList;
  }, {});

  return Object.values(reducedList);
};

const orderByAttribute = (groupOfWors, attribute) => {
  const orderDesc = (n1, n2) => n2[attribute] - n1[attribute];
  const ordenedList = [...groupOfWors].sort(orderDesc);

  return ordenedList;
};

module.exports = {
  compose,
  getFilesPathFromDirectory,
  filterByExtension,
  getFileContent,
  getFilesContent,
  filesContentToString,
  breakContentIntoLines,
  removeEmptyLines,
  removeLinesThatContains,
  removeCharacters,
  breakContentByWords,
  groupByWords,
  orderByAttribute,
};

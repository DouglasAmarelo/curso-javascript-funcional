const fs = require('fs');
const path = require('path');
const { Observable } = require('rxjs');

const createPipeableOperator = operatorFn => {
  return obsData => {
    return new Observable(subscriber => {
      const sub = operatorFn(subscriber);

      obsData.subscribe({
        next: sub.next,
        error: sub.error || (e => subscriber.error(e)),
        complete: sub.complete || (() => subscriber.complete()),
      });
    });
  };
};

const getFilesPathFromDirectory = directoryPath => {
  return new Observable(subscriber => {
    try {
      const files = fs.readdirSync(directoryPath);

      files.forEach(file => {
        const filePath = path.join(directoryPath, file);
        subscriber.next(filePath);
      });

      subscriber.complete();
    } catch (error) {
      subscriber.error(error);
    }
  });
};

const filterByExtension = extension => {
  return createPipeableOperator(subscriber => ({
    next(filePath) {
      if (filePath.endsWith(extension)) {
        subscriber.next(filePath);
      }
    },
  }));
};

const getFileContent = () => {
  return createPipeableOperator(subscriber => ({
    next(filePath) {
      try {
        const fileContent = fs.readFileSync(filePath, { encoding: 'utf-8' });

        subscriber.next(fileContent.toString());
      } catch (error) {
        subscriber.error(error);
      }
    },
  }));
};

const breakContentIntoLines = () => {
  return createPipeableOperator(subscriber => ({
    next(content) {
      const lines = content.split('\n');
      lines.forEach(line => {
        subscriber.next(line);
      });
    },
  }));
};

const removeEmptyLines = () => {
  return createPipeableOperator(subscriber => ({
    next(line) {
      if (line.trim()) {
        subscriber.next(line.trim());
      }
    },
  }));
};

const removeLinesThatContains = filterRule => {
  return createPipeableOperator(subscriber => ({
    next(contentInLines) {
      const regex = new RegExp(filterRule, 'gim');

      if (!regex.test(contentInLines.trim())) {
        subscriber.next(contentInLines);
      }
    },
  }));
};

const removeCharacters = characters => {
  return createPipeableOperator(subscriber => ({
    next(line) {
      const textWithOutCharacters = characters.reduce((text, char) => {
        return text.split(char).join('').trim();
      }, line);

      subscriber.next(textWithOutCharacters);
    },
  }));
};

const breakContentByWords = () => {
  return createPipeableOperator(subscriber => ({
    next(line) {
      const breakedText = line.split(' ');
      breakedText.forEach(word => {
        subscriber.next(word);
      });
    },
  }));
};

const groupByWords = () => {
  return createPipeableOperator(subscriber => ({
    next(wordList) {
      const reducedList = wordList.reduce((newWordList, currentWord) => {
        const word = currentWord.toLowerCase();
        const quantity = newWordList[word] ? newWordList[word].quantity + 1 : 1;

        newWordList[word] = { word, quantity };

        return newWordList;
      }, {});

      const groupedWords = Object.values(reducedList);

      subscriber.next(groupedWords);
    },
  }));
};

module.exports = {
  getFilesPathFromDirectory,
  filterByExtension,
  getFileContent,
  breakContentIntoLines,
  removeEmptyLines,
  removeLinesThatContains,
  removeCharacters,
  breakContentByWords,
  groupByWords,
};

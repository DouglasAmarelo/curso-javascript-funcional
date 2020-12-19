// Função que executa a sequencia de números do Array recebido
const generateElements = numberList => {
  return {
    init: fn => {
      let index = 0;
      const interval = setInterval(() => {
        if (index >= numberList.length) {
          clearInterval(interval);
        } else {
          fn(numberList[index]);
          index++;
        }
      }, 1000);

      return {
        stop: () => {
          clearInterval(interval);
        },
      };
    },
  };
};

// Helper para executar o parar
const stopAfter = (time, fn) => setTimeout(fn, time);

// Lista de números
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Criar um primeiro temporizador
const temp1 = generateElements(numbers);

// Executar o primeiro temporizador
const exec1 = temp1.init(number => console.log(Math.pow(2, number)));

// Parar o temporizador 1
stopAfter(4000, exec1.stop);

// Uma outra forma de executar
generateElements([
  'Douglas',
  'Jéssica',
  'Guilherme',
  'Bruno',
  'Gus',
]).init(value => console.log(value));

// Função que executa a sequencia de números
const generateNumbers = () => ({
  init: (fn, interval = 1000) => {
    let number = 0;
    const initInterval = setInterval(() => fn(number++), interval);

    return {
      stop: () => clearInterval(initInterval),
    };
  },
});

// Helper para executar o parar
const stopAfter = (time, fn) => setTimeout(fn, time);

// Criar um primeiro temporizador
const temp1 = generateNumbers();

// Executar o primeiro temporizador
const exec11 = temp1.init(num => console.log('#1.1', num * 2), 1000);
const exec12 = temp1.init(num => console.log('#1.2', num * 2), 500);

// Criar um segundo temporizador
const temp2 = generateNumbers();

// Executar o segundo temporizador
const exec2 = temp2.init(num => console.log('#2', num + 100), 2000);

// Parar o temporizador 1.1 e o 2
stopAfter(3000, () => {
  exec11.stop();
  exec2.stop();
});

// Parar o temporizador 1.2
stopAfter(5000, exec12.stop);

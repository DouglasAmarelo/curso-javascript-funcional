const { Observable } = require('rxjs');

// Um exemplo para entender a diferença do uso de um Observable vs uma Promise.

// Usando uma Promise
const myPromise = new Promise(resolve => {
  resolve('Promise resolvida');
  // De nada adiantaria chamar uma segunda vez, porque a Promise
  // vai ser resolvida na primeira vez que `resolve` for chamado
  resolve('Promise resolvida');
});

// Passando apenas a referência de uma função
myPromise.then(console.log);

// Usando um Observable
const myObservable = new Observable(subscriber => {
  // Aqui é possível chamar várias vezes
  subscriber.next('Observable...');
  subscriber.next('está...');
  subscriber.next('sendo...');
  subscriber.next('resolvido...');
  subscriber.next('Pronto!');

  // Não enviar mais dados depois de 5 segundos
  setTimeout(() => {
    subscriber.complete();
  }, 5000);
});

// Recebendo o valor como parâmetro da função
myObservable.subscribe(value => console.log(value));

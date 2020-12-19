const { Observable, noop } = require('rxjs');

const obs = Observable.create(subscriber => {
  subscriber.next('RxJS...');
  subscriber.next('é...');
  subscriber.next('bem...');
  subscriber.next('poderoso!');

  if (Math.random() > 0.5) {
    subscriber.complete();
  } else {
    subscriber.error('Houve algum problema');
  }
});

// Com tratativa de erro
obs.subscribe(
  value => console.log('Sucesso:', value), // Executada no cenário de sucesso
  error => console.log('Erro:', error), // Executada no cenário de erro
  () => console.log('Final!') // Executada quando o "complete" é chamado
);

// Sem a tratativa de erro
obs.subscribe(
  console.log, // Sucesso!
  noop, // Sem tratativa de erro (noop = sem operação)
  () => console.log('Final!') // Final
);

// Passando um objeto de configuração
obs.subscribe({
  next(value) {
    console.log('Sucesso:', value);
  },
  error(error) {
    console.log('Erro:', error);
  },
  complete() {
    console.log('Final!');
  },
});

// Passando um objeto de configuração
obs.subscribe({
  next: value => console.log('Sucesso:', value),
  error: error => console.log('Erro:', error),
  complete: () => console.log('Final!'),
});

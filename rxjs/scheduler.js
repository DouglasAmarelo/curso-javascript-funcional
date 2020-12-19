const { from, asyncScheduler } = require('rxjs');
const { observeOn } = require('rxjs/operators');

const obs = from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

// O comportamento padrão dos operadores é trabalhar de forma SÍNCRONA
console.log('Início...');
obs.subscribe(value => console.log('Schedule: ', value));
console.log('...Fim. \n');

// Mas é possível mudar o comportamento para uma forma ASÍNCRONA assim:
console.log('Antes...');
obs
  .pipe(observeOn(asyncScheduler))
  .subscribe(value => console.log('Schedule: ', value));
console.log('...Depois! \n');

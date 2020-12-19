// Os dois tipos de operadores:

// 01 - Operadores de criação.
const { of, from } = require('rxjs');

// 02 - Operadores encadeáveis (Pipeable Operator)
const { first, last, map } = require('rxjs/operators');

// Gerando um stream de dados
const obs = of(1, 2, 'Ana', false, 'último'); // obs = obsersable
const obs2 = from([21, 22, '2Ana', true, '2último']); // obs = obsersable

obs.subscribe(value => console.log(`Ex 01: O valor gerado foi: ${value}`));

// Usando o operador `first`
obs
  .pipe(first())
  .subscribe(value => console.log(`Ex 02: O valor gerado foi: ${value}`));

// Usando o operador `last`
obs
  .pipe(last())
  .subscribe(value => console.log(`Ex 03: O valor gerado foi: ${value}`));

// Usando o operador `map`
obs
  .pipe(last())
  .pipe(map(value => value[0])) // Pegando somente a primeira letra de cada valor
  .subscribe(value => console.log(`Ex 04: O valor gerado foi: ${value}`));

// Ao usar o pipe(), tanto é possível encadear vários pipes e ir fazendo as
// transformações, como é possível chamar um único pipe e passar todas as
// funções como parâmetros do pipe.

// Exemplo - Vários pipes:
obs
  .pipe(last())
  .pipe(map(value => value[0])) // Pegando somente a primeira letra de cada valor
  .pipe(map(letter => `A letra encontrada foi: ${letter}`)) //Gerando um texto
  .subscribe(text => console.log(`Ex 05: O texto gerado foi: ${text}`));

// Exemplo - Um único pipe:
obs2
  .pipe(
    last(),
    map(value => value[0]), // Pegando somente a primeira letra de cada valor
    map(letter => `A letra encontrada foi: ${letter}`) //Gerando um texto
  )
  .subscribe(text => console.log(`Ex 06: O texto gerado foi: ${text}`));

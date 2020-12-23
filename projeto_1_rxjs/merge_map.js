const { from } = require('rxjs');
const { mergeMap, map } = require('rxjs/operators');

const obs1 = from([1, 2, 3, 4]);
const obs2 = from([5, 6, 7, 8]);

obs1
  .pipe(
    mergeMap(number_obs1 =>
      obs2.pipe(map(number_obs2 => `${number_obs1} => ${number_obs2}`))
    )
  )
  .subscribe(value => console.log('@MergeMap: ', value));

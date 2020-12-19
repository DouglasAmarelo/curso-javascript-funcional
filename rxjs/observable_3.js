const { Observable, noop } = require('rxjs');

const generateNumbersBetween = (min, max) => {
  if (min > max) [min, max] = [max, min];

  return new Observable(subscriber => {
    // for (let number = min; number <= max; number++) {
    //   subscriber.next(number);
    // }

    Array(max - min + 1)
      .fill()
      .map((_, i) => subscriber.next(min + i));

    subscriber.complete();
  });
};

generateNumbersBetween(4, 10).subscribe(
  number => console.log(`Number: ${number}`),
  noop,
  () => console.log('Final')
);

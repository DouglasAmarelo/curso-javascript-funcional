// Pipeable operator
const { from, Observable } = require('rxjs');

const list = [1, 2, 3, 4, 5];

const first = () => obsData => {
  return new Observable(subscriber => {
    obsData.subscribe({
      next(value) {
        subscriber.next(value + 1000);
        subscriber.complete();
      },
    });
  });
};

const none = () => obsData => {
  return new Observable(subscriber => {
    obsData.subscribe({
      next(value) {
        subscriber.complete();
      },
    });
  });
};

const last = () => obsData => {
  return new Observable(subscriber => {
    let lastItem;

    obsData.subscribe({
      next(value) {
        lastItem = value;
      },
      complete() {
        if (lastItem !== undefined) {
          subscriber.next(lastItem);
        }
        subscriber.complete();
      },
    });
  });
};

from(list)
  .pipe(
    // first(),
    // none(),
    last()
  )
  .subscribe(value => console.log('@ Operadores: ', value));

// Pipeable operator
const { from, Observable } = require('rxjs');

const list = [1, 2, 3, 4, 5];

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

const first = () => {
  return createPipeableOperator(subscriber => ({
    next(value) {
      subscriber.next(value + 1000);
      subscriber.complete();
    },
  }));
};

const none = () => {
  return createPipeableOperator(subscriber => ({
    next() {
      subscriber.complete();
    },
  }));
};

const last = () => {
  let lastItem;

  return createPipeableOperator(subscriber => ({
    next(value) {
      lastItem = value;
    },
    complete() {
      if (lastItem !== undefined) {
        subscriber.next(lastItem);
      }
      subscriber.complete();
    },
  }));
};

from(list)
  .pipe(
    // first(),
    // none(),
    last()
  )
  .subscribe(value => console.log('@ Operadores: ', value));

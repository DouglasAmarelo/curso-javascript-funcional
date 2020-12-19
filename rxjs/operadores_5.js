const { of, Observable } = require('rxjs');

const terminadoCom = lastname => obsData => {
  return new Observable(subscriber => {
    obsData.subscribe({
      next(value) {
        if (Array.isArray(value)) {
          subscriber.next(value.filter(item => item.endsWith(lastname)));
        } else if (value.endsWith(lastname)) {
          subscriber.next(value);
        }
      },
      error(error) {
        subscriber.error(error);
      },
      complete() {
        subscriber.complete();
      },
    });
  });
};

of(['Ana Silva', 'Maria Silva', 'Pedro Rocha'])
  .pipe(terminadoCom('Silva'))
  .subscribe(console.log);

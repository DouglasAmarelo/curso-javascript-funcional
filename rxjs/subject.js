const { Observable, Subject } = require('rxjs');

// Exemplo com Observable
const getObervable = () => {
  return new Observable(subscriber => {
    setTimeout(() => {
      console.log('#1 - Oberver');
      subscriber.next(Math.random());
      subscriber.complete();
    }, 1000);
  });
};

const obs = getObervable();

obs.subscribe(value => console.log('@Observable 1:', value));
obs.subscribe(value => console.log('@Observable 2:', value));

// Exemplo com Subject
const getSubject = () => {
  const sub = new Subject();

  setTimeout(() => {
    console.log('#2 - Subject');
    sub.next(Math.random());
    sub.complete();
  }, 1000);

  return sub;
};

const sub = getSubject();

sub.subscribe(value => console.log('@Subject 1:', value));
sub.subscribe(value => console.log('@Subject 2:', value));

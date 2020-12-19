const eager = (a, b) => {
  // Processamento mais pesado:
  const final = Date.now() + 2500;
  while (Date.now() < final) {}

  const value = Math.pow(a, 3);
  return value + b;
};

console.time('#1');
console.log('@ Lazy', eager(3, 100));
console.log('@ Lazy', eager(3, 200));
console.log('@ Lazy', eager(3, 300));
console.timeEnd('#1');

const lazy = function (a) {
  // Processamento mais pesado:
  const final = Date.now() + 2500;
  while (Date.now() < final) {}

  const value = Math.pow(a, 3);

  return function (b) {
    return value + b;
  };
};

console.time('#2');
const lazy3 = lazy(3);

console.log('@ Lazy', lazy3(100));
console.log('@ Lazy', lazy3(200));
console.log('@ Lazy', lazy3(300));
console.timeEnd('#2');

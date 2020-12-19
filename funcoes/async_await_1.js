const waitFor = time => {
  return new Promise(resolve => {
    setTimeout(() => resolve(), time);
  });
};

// waitFor(2000)
//   .then(() => console.log('Executando promise 01...'))
//   .then(() => waitFor(2000))
//   .then(() => console.log('Executando promise 02...'))
//   .then(() => waitFor(2000))
//   .then(() => console.log('Executando promise 03...'));

const showMessage = async () => {
  await waitFor(2000);
  console.log('Executando message 01...');

  await waitFor(2000);
  console.log('Executando message 02...');

  await waitFor(2000);
  console.log('Executando message 03...');
};

showMessage();

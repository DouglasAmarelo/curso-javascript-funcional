const waitFor = (time = 2000) => {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log('Executando...');
      resolve();
    }, time);
  });
};

waitFor()
  .then(() => waitFor())
  .then(waitFor);

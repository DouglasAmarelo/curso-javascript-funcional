const pessoa = {
  name: 'Maria',
  height: '1.76',
  city: 'São paulo',
  address: {
    street: 'Vergueiro',
  },
};

console.log('@ Imutabilidade:', pessoa, '// Original');

// Atribuição por referência
const novaPessoa = pessoa;

novaPessoa.name = 'Douglas';
novaPessoa.height = '1.89';

console.log('@ Imutabilidade:', pessoa, '// Alterado pra Douglas');
console.log('@ Imutabilidade:', novaPessoa, '// Atribuição por referência');

// Passagem por referência (Função impura)
const alterarPessoa = pessoa => {
  const novaPessoa = { ...pessoa }; // Cópia raza
  novaPessoa.name = 'João';
  novaPessoa.city = 'Fortaleza';
  novaPessoa.address.street = 'Sabará'; // Ainda aponta para a referência

  return novaPessoa;
};

const outraNovaPessoa = alterarPessoa(pessoa);

console.log('@ Imutabilidade:', pessoa, '// Alterado pra João');
console.log('@ Imutabilidade:', outraNovaPessoa, '// Passagem por referência');

// Atribuição por valor
let a = 3;
let b = a; // Uma cópia e não uma referência

a++;
b--;

console.log('@ Imutabilidade:', a, '// Atribuição por valor');
console.log('@ Imutabilidade:', b, '// Atribuição por valor');

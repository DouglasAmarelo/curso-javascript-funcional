// Diz-se que uma linguagem de programação possui
// funções de primeira classe quando funções nessa
// linguagem são tratadas como qualquer outra variável

const x = 3;

const y = text => `Esse é o texto: ${text}`;

console.log('@ Variável:', x);
console.log('@ Função:', y('Teste'));

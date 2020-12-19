// Uma função pura é uma função em que
// o valor de retorno é dererminado APENAS por seus valores de entrada,
// sem efeitos colaterais observáveis.

// Função inpura - Depende de fatores externos
const PI = 3.14;
const areaCircunferencia = raio => {
  return raio * raio * PI;
};

console.log('@ Inpura', areaCircunferencia(10));
console.log('@ Inpura', areaCircunferencia(10));

// Função pura - NÃO depende de fatores externos
const areaCircunferenciaPura = (raio, pi) => raio * raio * pi;

console.log('@ Pura', areaCircunferenciaPura(10, 3.14));
console.log('@ Pura', areaCircunferenciaPura(10, 3.141592));
console.log('@ Pura', areaCircunferenciaPura(10, Math.PI));

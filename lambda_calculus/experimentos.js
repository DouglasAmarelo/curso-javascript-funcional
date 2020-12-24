let result;

const I = a => a;
result = I(3);
console.log('Identidade:', result);
result = I(I);
console.log('Identidade:', result);

const SELF = f => f(f);
result = SELF(I);
console.log('Self:', result);

const FIRST = a => _ => a;
result = FIRST(7)(11);
console.log('First:', result);

const LAST = _ => b => b;
result = LAST(7)(11);
console.log('Last:', result);

const INVERT = f => a => b => f(b)(a);
result = INVERT(LAST)(7)(11);
console.log('Invert Last:', result);
result = INVERT(FIRST)(7)(11);
console.log('Invert First:', result);

// Compondo a partir de outras funções:
const LAST2 = a => b => INVERT(FIRST)(a)(b);
result = LAST2(7)(11);
console.log('Last 2:', result);

// Operadores Lógicos:

// Boolean: TRUE e FALSE
// TRUE ? <FIRST> : LAST
// FALSE ? FIRST : <LAST>

const T = FIRST;
const F = LAST;

const NOT = a => a(F)(T);
result = NOT(F);
console.log('Not:', result);
result = NOT(T);
console.log('Not:', result);

const AND = a => b => a(b)(F);
result = AND(T)(T);
console.log('And:', result);
result = AND(F)(T);
console.log('And:', result);

const OR = a => b => a(T)(b);
result = OR(F)(T);
console.log('Or:', result);

const EQ = a => b => a(b)(NOT(b));
result = EQ(T)(T);
console.log('Equal:', result);
result = EQ(T)(F);
console.log('Equal:', result);
result = EQ(F)(T);
console.log('Equal:', result);
result = EQ(F)(F);
console.log('Equal:', result);

const XOR = a => b => NOT(EQ(a)(b));
result = XOR(T)(T);
console.log('Exclusivo:', result);
result = XOR(T)(F);
console.log('Exclusivo:', result);
result = XOR(F)(T);
console.log('Exclusivo:', result);
result = XOR(F)(F);
console.log('Exclusivo:', result);

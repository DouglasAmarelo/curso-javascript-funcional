/**
 * Desafio `subscription`.
 * Criar uma função que:
 * - Espera 3 segundos para começar
 * - Gera números de meio em meio segundo
 * - Para depois de 10 segundos (unsubscribe)
 **/

const { timer, Subscription } = require('rxjs');

const startAfter = 3000;
const generateAt = 500;
const stopAfter = 10000;

const obs = timer(startAfter, generateAt);

const sub1 = obs.subscribe(number => console.log(`#1 number: ${number}`));
const sub2 = obs.subscribe(number => console.log(`#2 number: ${number}`));

const generalSub = new Subscription();
generalSub.add(sub1);
generalSub.add(sub2);

setTimeout(() => {
  sub1.unsubscribe(); // Parar a primeira subscrição
  sub2.unsubscribe(); // Parar a segunda subscrição

  generalSub.unsubscribe(); // Parar todas
}, stopAfter);

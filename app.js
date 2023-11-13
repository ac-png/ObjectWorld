import Human from './classes/Human.js';
import Ninja from './classes/Ninja.js';
import Wizard from'./classes/Wizard.js';

let human1 = new Human();
let mo = new Human();
let wiz = new Wizard();
let nin = new Ninja();

console.log('Mo: ', mo.getStats());
console.log('Human1: ', human1.getStats());
console.log('Wizard: ', wiz.getStats());
console.log('Ninja: ', nin.getStats());
console.log("---------------------------------");

nin.attack(human1);
nin.steal(human1);
wiz.fireBall(nin);
wiz.heal(human1);

console.log('Mo: ', mo.getStats());
console.log('Human1: ', human1.getStats());
console.log('Wizard: ', wiz.getStats());
console.log('Ninja: ', nin.getStats());
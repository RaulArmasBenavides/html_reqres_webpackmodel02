// import { heroesCiclo, heroeIfAwait } from './js/await';
import { getInfo, CreateHero } from "./js/promesas";

import * as CRUD from "./js/promesas";
import { shuffle, debounce, uniqBy } from "lodash";
// getInfo();

// let hero = {
//    name: "Fernando",
//    job: "Carpintero",
// };

// CRUD.CreateHero(hero).then(console.log);
// hero = {
//    name: "Raúl",
//    job: "Ingeniero",
// };

// CRUD.MostrarHeroe(hero);

// CRUD.CreateHero(hero).then(console.log);
// hero = {
//    name: "Miguel",
//    job: "Abogado",
// };
// CRUD.MostrarHeroe(hero);
// CRUD.CreateHeroAsync(hero).then(console.log);

const array = [1, 2, 3, 4];
const shuffledArray = shuffle(array);
console.log(shuffledArray);

const debouncedFunc = debounce(
   () => console.log("Ejecutado después de un retraso"),
   300
);
debouncedFunc();

const original = {
   id: 1,
   details: {
      name: "John",
      age: 30,
   },
};

// 1. Copia profunda con _.cloneDeep
const deepCopy = _.cloneDeep(original);
deepCopy.details.name = "Jane";

// 2. Copia superficial con spread
const shallowCopy = { ...original };
shallowCopy.details.age = 25;

console.log("Original:", original);
// Salida: { id: 1, details: { name: 'John', age: 25 } } <- Cambia porque la referencia es compartida con shallowCopy

console.log("Deep Copy:", deepCopy);
// Salida: { id: 1, details: { name: 'Jane', age: 30 } } <- No afecta al original

console.log("Shallow Copy:", shallowCopy);
// Salida: { id: 1, details: { name: 'John', age: 25 } }


original.details.age = 35;

console.log("Shallow Copy:", shallowCopy);
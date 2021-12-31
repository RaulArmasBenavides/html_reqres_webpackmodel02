import { heroesCiclo, heroeIfAwait } from './js/await';
import {getInfo,CreateHero} from './js/promesas';


import * as CRUD from './js/promesas';

heroesCiclo();

 
heroeIfAwait('iron');
getInfo();


let hero = {
    name: 'Fernando',
    job: 'Carpintero'
};

CRUD.CreateHero(hero).then( console.log );
 hero = {
    name: 'Raúl',
    job: 'Ingeniero'
};

CRUD.MostrarHeroe(hero);

CRUD.CreateHero(hero).then( console.log );
 hero = {
    name: 'Miguel',
    job: 'Abogado'
};
CRUD.MostrarHeroe(hero);
CRUD.CreateHeroAsync(hero).then( console.log );









import {obtenerChiste} from  './js/http-provider'
// promesa que permite resolver si un número es igual a 10 o no let x =10 ;

// const p = new  Promise((resolve,reject)=>{
// if(x==10)
// {
//     resolve('La variable es igual a 10');
// }else
// {
//     reject('La variable no es igual a 10');
// }
// });


// p.then(res=>{
//     console.log('succes' +res);
// })
// .catch(error => {
//     console.log('error' + error)
// });




//CALLBACK
// const heroes = {
//     capi: {
//         nombre: 'Capitán América',
//         poder : 'Aguantar inyecciones sin morir'
//     },
//     iron: {
//         nombre: 'Ironman',
//         poder : 'Absurda cantidad de dinero'
//     },
//     spider: {
//         nombre: 'Spiderman',
//         poder : 'La mejor reacciona alériga'
//     }

// };

//callback buscarheroe
// const buscarHeroe = (id,callback) => 
// {
//     const heroe = heroes[id];

//     if(heroe != null)
//     {
//         callback(heroe);
//     }else{
//         callback(`No existe un héroe con el id ${ id }`);
//     }
// }

// const heroeID = 'capi';

// buscarHeroe(heroeID, (heroe) => {
//     console.log(heroe)
// }
// );


//promesa buscar héroe
// const buscarHeroe = ( id ) => {
    
//     const heroe = heroes[id];

//     return new Promise( ( resolve, reject ) => {
//         if( heroe ) {
            
//             setTimeout(() => resolve( heroe ), 1000);

//         } else {
//             reject(`No existe un héroe con el id ${ id }`);
//         }
//     });
// }






//PROMESAS  
// const promesaLenta = new Promise( ( resolve, reject ) => {
//     setTimeout(() => resolve('Promesa Lenta') , 2000);
// });

// const promesaMedia = new Promise( ( resolve, reject ) => {
//     setTimeout(() => resolve('Promesa Media') , 1500);
// });

// const promesaRapida = new Promise( ( resolve, reject ) => {
//     setTimeout(() => resolve('Promesa Rápida') , 1000);
// });



// promesaLenta.then(console.log);
// promesaMedia.then(console.log);
// promesaRapida.then(console.log);


//await 
// const obtenerHeroeAwait = async( id ) => {

//     try {

//         const heroe = await buscarHeroeAsync( id );
//         return heroe;

//     }catch( err ) {
//         console.log( 'CATCH!!!' );
//         return {
//             nombre: 'Sin nombre',
//             poder: 'Sin poder'
//         };

//     }
// }

// const buscarHeroeAsync = async( id ) => {
    
//     const heroe = heroes[id];

//     if( heroe ) {
//         return heroe;
//     } else {
//         throw `No existe un héroe con el id ${ id }`;
//     }
// }

// const heroesIds = ['capi','iron','spider'];
// const heroesPromesas = heroesIds.map( buscarHeroe );

//  const heroesCiclo = async () => {

//     console.time('HeroesCiclo');
//     // heroesPromesas.forEach( async(p) => console.log( await p ));
//     for await( const heroe of heroesPromesas ) {
//         console.log(heroe);
//     }
//     console.timeEnd('HeroesCiclo');
//     // const heroes = await Promise.all( heroesPromesas );
//     // heroes.forEach( heroe => console.log(heroe) );
// }

// obtenerHeroeAwait('iron');
// heroesCiclo();


//import { obtenerChiste } from './js/http-provider';
//import 'css/styles.css';
//import 'css/bootstrap.css';
//import { init } from "./js/chistes-page";





//fetch(jokeURL).then( resp =>{
 //  resp.json().then( data => {

//    console.log(data.id);
//    console.log(data.value);
//   });
//});



obtenerChiste().then(console.log);
// obtenerChiste().then(console.log);

//getUsuario(1).then();


//init();

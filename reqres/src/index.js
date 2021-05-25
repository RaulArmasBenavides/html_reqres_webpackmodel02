//Se realizó este cambio  
//module.exports = {
//     module: {
//       rules: [
//         {
//           test: /\.html$/i,
//           loader: 'html-loader',
//           options: {
//             // Disables attributes processing
//             sources: false,                       //Aqui Fernando nos comenta que 
//   //pongamos atributes,pero debe ir la palabra sources
//           },
//         },
//       ],
//     },
//   };




//import { init } from './js/chistes-page';
import { init } from './js/usuarios-page';
//import { init } from './js/archivos-page';

// import * as CRUD from './js/crud-provider';


init();


// CRUD.getUsuario( 2 ).then( console.log );

// CRUD.crearUsuario({
//     name: 'Fernando',
//     job: 'Carpintero'
// }).then( console.log );

// CRUD.actualizarUsuario( 1, {
//     name: 'Melissa',
//     job: 'Developer'
// }).then( console.log );


// CRUD.borrarUsuario( 1 ).then( console.log );
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_usuarios_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/usuarios-page */ \"./src/js/usuarios-page.js\");\n//import { init } from './js/chistes-page';\r\n\r\n//import { init } from './js/archivos-page';\r\n\r\n// import * as CRUD from './js/crud-provider';\r\n\r\n\r\n(0,_js_usuarios_page__WEBPACK_IMPORTED_MODULE_0__.init)();\r\n\r\n\r\n// CRUD.getUsuario( 2 ).then( console.log );\r\n\r\n// CRUD.crearUsuario({\r\n//     name: 'Fernando',\r\n//     job: 'Carpintero'\r\n// }).then( console.log );\r\n\r\n// CRUD.actualizarUsuario( 1, {\r\n//     name: 'Melissa',\r\n//     job: 'Developer'\r\n// }).then( console.log );\r\n\r\n\r\n// CRUD.borrarUsuario( 1 ).then( console.log );\n\n//# sourceURL=webpack://reqres3/./src/index.js?");

/***/ }),

/***/ "./src/js/http-provider.js":
/*!*********************************!*\
  !*** ./src/js/http-provider.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"obtenerChiste\": () => (/* binding */ obtenerChiste),\n/* harmony export */   \"obtenerUsuarios\": () => (/* binding */ obtenerUsuarios),\n/* harmony export */   \"subirImagen\": () => (/* binding */ subirImagen)\n/* harmony export */ });\nconst jokeUrl     = 'https://api.chucknorris.io/jokes/random';\nconst urlUsuarios = 'https://reqres.in/api/users?page=2';\n\n// Cloudinary\nconst cloudPreset = 'autwc6pa';\nconst cloudUrl    = 'https://api.cloudinary.com/v1_1/dx0pryfzn/upload';\n\nconst obtenerChiste = async() => {\n\n    try {\n\n        const resp = await fetch( jokeUrl );\n\n        if( !resp.ok ) throw 'No se pudo realizar la peticion'; \n\n        const { icon_url, id, value } = await resp.json();\n\n        return { icon_url, id, value };\n\n    } catch (err ){\n\n        throw err;\n\n    }\n    \n    \n}\n\nconst obtenerUsuarios = async() => {\n\n    const resp = await fetch( urlUsuarios );\n    const { data:usuarios } = await resp.json();\n\n    return usuarios; \n}\n\n\n// ArchivoSubir :: File\nconst subirImagen = async( archivoSubir ) => {\n\n    const formData = new FormData();\n    formData.append('upload_preset', cloudPreset );\n    formData.append('file', archivoSubir );\n\n    try { \n        \n        const resp = await fetch( cloudUrl, {\n            method: 'POST',\n            body: formData\n        });\n\n        if ( resp.ok ) {\n            const cloudResp = await resp.json();\n            return cloudResp.secure_url; \n        } else {\n            throw await resp.json();\n        }\n\n    } catch( err ) {\n        throw err;\n    }\n\n}\n\n\n\n\n\n\n\n//# sourceURL=webpack://reqres3/./src/js/http-provider.js?");

/***/ }),

/***/ "./src/js/usuarios-page.js":
/*!*********************************!*\
  !*** ./src/js/usuarios-page.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"init\": () => (/* binding */ init)\n/* harmony export */ });\n/* harmony import */ var _http_provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./http-provider */ \"./src/js/http-provider.js\");\n\n\nconst body  = document.body;\nlet tbody;\nlet correlativo = 0;\n\nconst crearHtml = () => {\n    \n    const html = `\n    <h1 class=\"mt-5\"> Usuarios</h1>\n    <hr>\n\n    <table class=\"table\">\n        <thead>\n            <tr>\n                <th scope=\"col\">#</th>\n                <th scope=\"col\">email</th>\n                <th scope=\"col\">Nombre</th>\n                <th scope=\"col\">Avatar</th>\n            </tr>\n        </thead>\n        <tbody>\n        </tbody>\n    </table>\n    `;\n\n    const div = document.createElement('div');\n    div.innerHTML = html;\n    body.appendChild( div );\n\n    // Crear una referencia al TBODY\n    // ya que los TRs van dentro del tbody\n            // querySelector('tbody');\n            // Crear una variable para mantener la referencia?\n    tbody = document.querySelector('tbody');\n}\n\n\n// La función crearFilaUsuario debería de recibir un UNICO usuario\n// con la siguiente estructura\n    // {\n    //     \"id\": 7,\n    //     \"email\": \"michael.lawson@reqres.in\",\n    //     \"first_name\": \"Michael\",\n    //     \"first_name\": \"Lawson\",\n    //     \"avatar\": \"https://s3.amazonaws.com/uifaces/faces/twitter/follettkyle/128.jpg\"\n    // }\nconst crearFilaUsuario = ( usuario ) => {\n\n    // En la tabla deben de colocar un correlativo empezando en 1\n    // También deben de colocar el avatar\n    correlativo++;\n\n    const html = `\n        <td scope=\"col\"> ${ correlativo }. </td>\n        <td scope=\"col\"> ${ usuario.email } </td>\n        <td scope=\"col\"> ${ usuario.first_name } ${ usuario.first_name } </td>\n        <td scope=\"col\">\n            <img class=\"img-thumbnail\" src=\"${ usuario.avatar }\">\n        </td>\n    `;\n\n    const tr = document.createElement('tr');\n    tr.innerHTML = html;\n\n    // Añadir el table row (tr) dentro del TBody creado anteriormente\n    tbody.appendChild( tr );\n}\n\n\nconst init = async() => {\n\n    crearHtml();\n\n    correlativo = 0;\n\n    // Obtener la lista de usuarios usando el servicio creado\n    // Por cada usuario, llamar la función crearFilaUsuario (for, forEach)\n    // Colocar el init en el index.js, para que se ejecute la creación\n    (await (0,_http_provider__WEBPACK_IMPORTED_MODULE_0__.obtenerUsuarios)()).forEach( crearFilaUsuario );\n\n}\n\n\n\n//# sourceURL=webpack://reqres3/./src/js/usuarios-page.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
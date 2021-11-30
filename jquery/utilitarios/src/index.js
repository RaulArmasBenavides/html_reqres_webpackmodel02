import { createSelectPicker } from "./js/utils"; 

let FilterBodegaEN = $('#cboBodega');
let listaPalavras = ['ola', 'mundo', 'mundojs', 'batata'];
createSelectPicker(FilterBodegaEN,listaPalavras,[],true);
//Utils.createSelectPicker(FilterBodegaEN, listaPalavras, [], true);


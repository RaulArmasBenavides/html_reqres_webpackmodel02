//referencia : https://www.youtube.com/watch?v=mn07nxUXoPA
let nro_intentos = 0;
const MAX_ATTEMPTS= 7;
let ok = false;
String.prototype.replaceAt = function (index,character) 
{
    return this.substr(0,index) + character + this.substr(index+character.length);
}

//arreglos partidos políticos 
const palabras = ['APRA','PPC','ACCIÓN POPULAR','FREPAP','FUERZA POPULAR','PARTIDO MORADO']

const palabra = palabras[Math.floor(Math.random()*palabras.length)]
let exito = false;
let posicion = 0;
let palabraOculta = palabra.replace(/./g,"_ ");


document.querySelector('#output').innerHTML = palabraOculta;



//validación de mayusculas 
var lock = (e, max, arr = e.value.match(/[A-Z]/g) || []) => arr.length === max;

 
document.getElementById("calcular").onclick = () => { 
    if(lock(document.getElementById("letra"), 1)) console.log("Correcto");
    else alert("Debe ingresar una letra en mayúscula");
  };


  
document.querySelector('#calcular').addEventListener('click',()=>
{

    exito=false;
    nro_intentos++;
    const letra = document.querySelector('#letra').value;



// if([...palabra].find(element => element === letra))
// {
//     exito = true;
//     posicion = palabra.indexOf([...palabra].find(element => element === letra));
//     alert(posicion);
//     palabraOculta = palabraOculta.replaceAt(posicion*2 ,letra);
//     document.querySelector('#output').innerHTML = palabraOculta;
// }
// else
// {
//     exito = false;
// }





for(const i in palabra)
{
    if(letra==palabra[i])
    {
        palabraOculta = palabraOculta.replaceAt(i*2,letra);
        ok = true;
    }
}

if(ok == false)
{  // alert(nro_intentos);
    CambiarImagen(nro_intentos);
    if(nro_intentos >= MAX_ATTEMPTS){
        document.querySelector('#output').innerHTML = palabra;
       // alert("PERDISTE EL JUEGO");
    }
}
else
{
    document.querySelector('#output').innerHTML = palabraOculta;
}
});



function CambiarImagen(id_foto)
{
    if(id_foto<MAX_ATTEMPTS)
    {
        let char_raiz = "./imgs/Ahorcado-";
        var imagen = document.getElementById("foto");
        char_raiz = char_raiz.concat(id_foto);
        imagen.src = char_raiz.concat(".png");
       // alert('la imagen sera' + imagen.src);
    }

}





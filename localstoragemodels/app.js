if(typeof(Storage) !== 'undefined')
{
    console.log("Localstorage disponible");
}
else 
    console.log("Localstorage no disponible");

localStorage.setItem("titulo1","Curso : Master en Javasript Aprender JS, JQuery,Anulgar,NodeJS");
localStorage.setItem("titulo2","Curso : Master en Java");
localStorage.setItem("titulo3","Curso : Master en C#");


document.querySelector("#peliculas").innerHTML = localStorage.getItem("titulo1") + "  " +  localStorage.getItem("titulo2");
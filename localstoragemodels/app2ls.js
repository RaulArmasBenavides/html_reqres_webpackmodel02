var formulario = document.querySelector("#formfilms");
formulario.addEventListener('submit',function()
{
    var peli = document.querySelector("#addfilms");
    localStorage.setItem(peli,peli);
});

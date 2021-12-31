//fetch (ajax) y peticiones a servicios api rest
var div_usuarios = document.querySelector("#usuarios");
var usuarios = [];


getUsuarios().then(data =>data.json())
.then(users => {
  usuarios = users.data;
  console.log(usuarios);
  listadoUsuarios(users.data)
});


function getUsuarios(){
 return fetch('https://reqres.in/api/users');
}


function listadoUsuarios(usuarios){
  usuarios.map((user,i) =>
  {
    let nombre = document.createElement('h2');
    nombre.innerHTML = i + '.'+ user.first_name + "" + user.last_name;
    div_usuarios.appendChild(nombre);
    document.querySelector(".loading").style.display = 'none';
  })
}
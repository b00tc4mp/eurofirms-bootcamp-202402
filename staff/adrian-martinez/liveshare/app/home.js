debugger;
var title = document.querySelector("h1");
var alias = document.querySelector("#alias");
var cumpleanos = document.querySelector("#cumpleanos");
var correo = document.querySelector("#correo");
var contrasena = document.querySelector("#contrasena");

var logoutButton = document.querySelector("button");

try{
    var user = retrieveUser();

    title.innerText = "Hello, "+ user.name +"!";
    alias.innerText = "Tu alias es "+ user.username +".";
    cumpleanos.innerText = "Fecha de cumpleaños:  "+ user.birthdate +".";
    correo.innerText = "Correo: "+ user.email +".";
    contrasena.innerText = "Contraseña: "+ user.password +".";
}
catch(error){
    
    var homeAddress = location.href;
    var loginAddress = homeAddress.replace("home", "login");

    location.href = loginAddress;
}

logoutButton.onclick = function(){

    logoutUser();

    var homeAddress = location.href;
    var loginAddress = homeAddress.replace("home", "login");

    location.href = loginAddress;
}
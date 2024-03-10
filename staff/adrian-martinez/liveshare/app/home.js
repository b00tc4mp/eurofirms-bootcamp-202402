debugger;
var title = document.querySelector("h1");
var alias = document.querySelector("#alias");
var cumpleanos = document.querySelector("#cumpleanos");
var correo = document.querySelector("#correo");

var logoutButton = document.querySelector("button");

var conectados = document.querySelector("#online-users");

try{
    var user = logic.retrieveUser();

    title.innerText = "Hello, "+ user.name +"!";
    alias.innerText = "Tu alias es "+ user.username +".";
    cumpleanos.innerText = "Fecha de cumpleaños:  "+ user.birthdate +".";
    correo.innerText = "Correo: "+ user.email +".";
}
catch(error){
    
    var homeAddress = location.href;
    var loginAddress = homeAddress.replace("home", "login");

    location.href = loginAddress;
}

logoutButton.onclick = function(){

    try{
        logic.logoutUser();

        var homeAddress = location.href;
        var loginAddress = homeAddress.replace("home", "login");

        location.href = loginAddress;
    }
    catch(error){
        console.error(error);

        alert(error.message);
    }
}
try{
    var users = logic.retrieveUsers();

    users.forEach(function(user){
        var item = document.createElement("li");

        item.classList.add(user.online ? "online" : "offline");
        item.innerText = user.username;

        conectados.appendChild(item);
    })
}
catch(error){

    console.error(error);
    alert(error.message);
}
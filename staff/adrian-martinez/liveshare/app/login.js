debugger;
var form = document.querySelector(".form");

form.onsubmit = function (event){
            
    event.preventDefault();

    //Cogemos el valor de los campos para pasárselo a la propiedad de un array de objetos de usuarios
                
    var usernameInput = form.querySelector("#username");
    var username = usernameInput.value;

    var passwordInput = form.querySelector("#password");
    var password = passwordInput.value;

    try{
        loginUser(username, password);

        console.log("Usuario logueado!");
        alert("Bienvenido "+ username);
        
        form.reset();

        var loginAddress = location.href;
        var homeAddress = loginAddress.replace("login","home");

        location.href = homeAddress;

    }
    catch(e){

        console.error(e.message);
        alert(e.message);
    }
}

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

        sessionStorage.username = username;

        console.log("Usuario logueado!");
        alert("Bienvenido "+ username);


        let loginAddress = location.href;
        let homeAddress = loginAddress.replace("login","home");

        location.href = homeAddress;

        form.reset();
    }
    catch(e){

        console.error(e.message);
        alert(e.message);
    }
}
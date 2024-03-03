//Capa de presentación o vista
var form = document.querySelector(".form");
var anchor = document.querySelector("a");

form.onsubmit = function (event){
            
    event.preventDefault(); //Esto para evitar que le página se recargue al enviar el formulario

    //Cogemos el valor de los campos para pasárselo a la propiedad de un array de objetos de usuarios
            
    var nameInput = form.querySelector("#name");
    var name = nameInput.value; 

    var birthdateInput = form.querySelector("#birthdate");
    var birthdate = birthdateInput.value; 
                
    var usernameInput = form.querySelector("#username");
    var username = usernameInput.value;

    var emailInput = form.querySelector("#email");
    var email = emailInput.value;

    var passwordInput = form.querySelector("#password");
    var password = passwordInput.value;

    
    try{
        registerUser(name, birthdate, username, email, password);

        console.log("USUARIO REGISTRADO");
        alert("USUARIO REGISTRADO");
        form.reset();

        anchor.click(); //Para que reedirija a login automáticamente una registrado
    }
    catch(e){

        console.error(e.message);
        alert(e);
    }
}
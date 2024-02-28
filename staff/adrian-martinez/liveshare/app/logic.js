//Capa de lógica o controlador

 function registerUser(name, birthdate, username, email, password){

    if(name.length < 1){

        throw new Error("Error. Ningún nombre tiene menos de 1 caracter");
    }

    var nameIsBlank = true;
    for(let i=0;i < name.length && nameIsBlank; i++){

        var char = name[i];
        if(char !== " "){

            nameIsBlank = false;
        }
    }
    if(nameIsBlank){

        throw new Error("Error. El nombre tiene espacios");
    }
    if(birthdate.length !== 10){

        throw new Error("Error. Tu fecha de cumpleaños debe tener 10 caracteres");
    }
    if(birthdate.includes(" ")){

        throw new Error("Error. Tu fecha de cumpleaños no debe tener espacios en blanco");
    }
    if(birthdate.indexOf("-") !== 4 || birthdate.lastIndexOf("-") !== 7){

        throw new Error("Error. Los guiones de tu fecha de cumpleaños no están en la posición correcta");
    }

    //TODO check that birthdate has only 2 dashes
    //TODO check that birthdate has no alphabet characters (only numbrer and 2 dashes)
    //TODO check that birthdate is equal or greater than 18 years old

    if(name.length < 3){

        throw new Error("Error. El nombre debe tener por lo menos 3 caracteres");
    }
    if(name.includes(" ")){

        throw new Error("Error. El nombre tiene algún caracter en blanco");
    }
    if(username.includes(" ")){

        throw new Error("Error. El nombre tiene algún caracter en blanco");
    }
    if(email.length < 6){

        throw new Error("Error. El correo debe tener por lo menos 6 caracteres");
    }
    if(!email.includes("@")){

        throw new Error("Error. El correo debe tener una @ que separe tu nombre del nombre de dominio");
    }
    if(!email.includes(".")){

        throw new Error("Error. El correo debe tener un punto");
    }
    if(email.lastIndexOf(".") < email.indexOf("@")){

        throw new Error("Error. El correo no debe tener un . antes de la @");
    }
    if(password.length < 8){

        throw new Error("Error. La contraseña debe tener un mínimo de 8 caracteres");
    }
    if(password.includes(" ")){

        throw new Error("Error. La contraseña no debe tener espacios");
    }
    for(let i=0;i < users.length;i++){

        let user = users[i];

        if(user.email == email){

            throw new Error("Error. El usuario ya existe");
        }
    }

    const user ={
        name: name,
        birthdate: birthdate,
        username: username,
        email: email,
        password: password
    }

    users[users.length] = user;
 }

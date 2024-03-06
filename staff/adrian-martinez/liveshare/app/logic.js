//Capa de lógica o controlador
var logic = (function() {

    function validateName(name){

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
    }
    function validateBirthdate(birthdate){

        if(birthdate.length !== 10){
    
            throw new Error("Error. Tu fecha de cumpleaños debe tener 10 caracteres");
        }
        if(birthdate.includes(" ")){
    
            throw new Error("Error. Tu fecha de cumpleaños no debe tener espacios en blanco");
        }
        if(birthdate.indexOf("-") !== 4 || birthdate.lastIndexOf("-") !== 7){
    
            throw new Error("Error. Los guiones de tu fecha de cumpleaños no están en la posición correcta");
        }
    }
    function validateUsername(username){

        if(username.length < 3){
    
            throw new Error("Error. El nombre debe tener por lo menos 3 caracteres");
        }
        if(username.includes(" ")){
    
            throw new Error("Error. El nombre tiene algún caracter en blanco");
        }
        if(username.includes(" ")){
    
            throw new Error("Error. El nombre tiene algún caracter en blanco");
        }
    }
    function validateEmail(email){

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
    }
    function validatePassword(password){

        if(password.length < 8){
    
            throw new Error("Error. La contraseña debe tener un mínimo de 8 caracteres");
        }
        if(password.includes(" ")){
    
            throw new Error("Error. La contraseña no debe tener espacios");
        }
    }
    function registerUser(name, birthdate, username, email, password){

        validateName(name);
        validateBirthdate(birthdate);
        validateUsername(username);
        validateEmail(email);
        validatePassword(password);        
        
        //TODO check that birthdate has only 2 dashes
        //TODO check that birthdate has no alphabet characters (only numbrer and 2 dashes)
        //TODO check that birthdate is equal or greater than 18 years old
    
        var user = data.findUser(function(user){
    
            return user.username === username || user.email === email;
        })
        if(user !== undefined){
    
            throw new Error("El usuario ya existe");
        }
        /* for(let i=0;i < users.length;i++){
    
            let user = users[i];
    
            if(user.email == email){
    
                throw new Error("Error. El correo ya existe");
            }
            if(user.username == username){
    
                throw new Error("Error. El usuario ya existe");
            }
        } */
    
        var user = {
            name: name,
            birthdate: birthdate,
            username: username,                                                                                                       
            email: email,
            password: password
        }
    
        data.insertUser(user);
        /* users[users.length] = user;
    
        //Hay que guardar el usuario en LocalStorage en formato JSON
        localStorage.users = JSON.stringify(users); */
     }
     function loginUser(username, password){
    
        validateUsername(username);
        validatePassword(password);
    
        var user = data.findUser(function(user){                                  
            return user.username === username;
        })
        if(user === undefined){
    
            throw new Error("Usuario no encontrado");
        }
        if(user.password !== password){
    
            throw new Error("Contraseña incorrecta");
        }
        sessionStorage.userId = user.id;
        
        user.online = true;
    
        data.saveUser(user);
     }
    
     function retrieveUser(){
    
        var user = data.findUser(function(user){
            return user.id === sessionStorage.userId;
        });
         
        if(user === undefined){
    
            throw new Error("Usuario no encontrado");
        }
    
        return user;
     }
     function logoutUser(){
        
        var user = data.findUser(function(user){
            return user.id == sessionStorage.userId;
        })

        if(!user){

            throw new Error("Usuario no encontrado")
        } 

            user.online = false;

            data.saveUser(user);
            
            delete sessionStorage.userId;
        }
     
     function retrieveOnlineUsers(){

        var users = data.findUsers(function(user){
            return user.online;
        })

        users.forEach(function(user){
            delete user.name;
            delete user.birthdate;
            delete user.email;
            delete user.password;
            delete user.online;
         })

         return users;
     }

     //Las funciones propias de una capa mejor meterlas como propiedad en de un objecto
    return {
        registerUser: registerUser,
        loginUser: loginUser,
        retrieveUser: retrieveUser,
        logoutUser: logoutUser,
        retrieveOnlineUsers: retrieveOnlineUsers
    }
})()
 
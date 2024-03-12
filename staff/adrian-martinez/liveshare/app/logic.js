//Capa de lógica o controlador
var logic = (function() {
    //Utils

    /* function convertDateToString(){

        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var day = date.getDate();

        var hours = date.getHours();
        var minutes = date.getMinutes();
        var seconds = date.getSeconds();
        var milisegundos = date.getMilisegundos();
       
        function twoDigits(value){
            return value < 10 ? "0" + value : "" + value;
        }
        
        //No entiendo estas condiciones
        function threeDigits(value){
            return value < 10 ? "00" + value : value < 100 ? "0" + value : "" + value;
        }

        var dateConvert = year + "-" + twoDigits(month) + "-" +twoDigits(day) + "-" + twoDigits(hours) + ":" + twoDigits(minutes) + ":"
        + twoDigits(seconds) + "." + threeDigits(milisegundos);

        return dateConvert;
    } */

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
        if(!password.length){

            throw new Error("La contraseña no debe estar vacía");
        }
    }

    function validateUserId(userId){

        if(typeof userId !== "string"){

            throw new Error("El ID del usuario no es una cadena");
        }
        if(userId.includes(" ")){

            throw new Error("El ID no puede tener espacios");
        }
        if(!userId.length){

            throw new Error("El ID del usuario no debe estar vacío");
        }
    }

    function validateText(text){

        if(typeof text !== "string"){

            throw new Error("El texto debe ser una cadena");
        }
        if(text.includes(" ")){

            throw new Error("El texto no puede tener espacios");
        }
        if(!text.length){

            throw new Error("El texto no debe estar vacío");
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
    
        var user = {
            name: name,
            birthdate: birthdate,
            username: username,                                                                                                       
            email: email,
            password: password
        }
    
        data.insertUser(user);
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
    
        data.updateUser(user);
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

            data.updateUser(user);
            
            delete sessionStorage.userId;
        }
     
     function retrieveUsers(){

        var users = data.getAllUsers();
        
        var index = users.findIndex(function(user){
            return user.id === sessionStorage.userId;
        })

        users.splice(index, 1);

        users.forEach(function(user){
            delete user.name;
            delete user.birthdate;
            delete user.email;
            delete user.password;
         })

         users.sort(function(user1, user2){
            return user1.online > user2.online ? -1 : 1;
         })

         return users;
     }

     function sendMessageToUser(userId, text){

        validateUserId(userId);
        validateText(text);

        var message = {
            from: sessionStorage.userId,
            to: userId,
            text: text,
            date: new Date().toISOString()
        }

        data.insertMessage(message);

        return messages;
     }

     function getLoggedInUserId(){
        return sessionStorage.userId;
     }

     function retrieveMessagesWithUser(userId){

        validateUserId(userId);

        var messages = data.findMessages(function(message){
            return message.from === sessionStorage.userId && message.to === userId || message.from === userId && message.to === sessionStorage.userId; 
        })
        
        return messages;
     }

     //Las funciones propias de una capa mejor meterlas como propiedad de un objecto
    return {
        registerUser: registerUser,
        loginUser: loginUser,
        retrieveUser: retrieveUser,
        logoutUser: logoutUser,
        retrieveUsers: retrieveUsers,
        sendMessageToUser: sendMessageToUser,
        retrieveMessagesWithUser: retrieveMessagesWithUser,
        getLoggedInUserId: getLoggedInUserId
    }
})()
 
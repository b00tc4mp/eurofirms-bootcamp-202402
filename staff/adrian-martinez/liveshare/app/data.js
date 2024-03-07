//Capa de datos o modelo
/* var users = [];

if(localStorage.users){

    users = JSON.parse(localStorage.users);
} */
var data = (function(){

    function loadUsers(){
        return JSON.parse(localStorage.users || "[]");
    }
    function saveUsers(users){
        localStorage.users = JSON.stringify(users);
    }
    function findUser(callback){

        var users = loadUsers();
        for(let i=0;i < users.length;i++){
    
            var user = users[i];
            var matches = callback(user);
    
            if(matches){
                return user;
            }
        }
    }
    function insertUser(user){
    
        var users = loadUsers();
    
        user.id = parseInt(Math.random() * 10000000000000).toString(36);
    
        users[users.length] = user;
    
        saveUsers(users);
    }
    function saveUser(user){
    
        var users = loadUsers();
    
        var index = users.findIndex(function(usuarioBuscado){
            return usuarioBuscado.id === user.id;
        })
    
        users.splice(index, 1, user);

        saveUsers(users)
    }
    function findUsers(callback){
    
        var users = loadUsers();
        var filtered = users.filter(callback);

        return filtered;
    }
    //Las funciones propias de una capa mejor meterlas como propiedad en de un objecto
    return {
        findUser: findUser,
        insertUser: insertUser,
        saveUser: saveUser,
        findUsers: findUsers,
    }
})()
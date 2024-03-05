//Capa de datos o modelo
/* var users = [];

if(localStorage.users){

    users = JSON.parse(localStorage.users);
} */
function findUser(callback){

    var users = JSON.parse(localStorage.users || "[]");

    for(let i=0;i < users.length;i++){

        var user = users[i];
        var matches = callback(user);

        if(matches){
            return user;
        }
    }
}
function insertUser(user){

    var users = JSON.parse(localStorage.users || "[]");

    user.id = parseInt(Math.random() * 10000000000000).toString(36);

    users[users.length] = user;

    localStorage.users = JSON.stringify(users);
}
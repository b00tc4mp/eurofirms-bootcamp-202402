
function find(object, callback){

    for(let i=0;i < object.length;i++){

        var callbackResult = callback(object[i]);
        if(callbackResult){
            return object[i];
        }
    }
}
var users = {
    "0": {
        name: "Wendy",
        userName: "Wendy12",
        password: "123",
    },
    "1": {
        name: "Peter Pan",
        userName: "PeterP",
        password: "123",
    },
    "2": {
        name: "Campanilla",
        userName: "Campana",
        password: "123",
    },
    length: 3
}
var user = find(users, function(user){
    
    return user.userName == "Peter Pan";
})

console.log(user);
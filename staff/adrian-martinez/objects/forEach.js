
function forEach(object, callback){
    
    for(let i=0;i < object.length;i++){

        callback(object[i]);
    }
}
var users = {
    "0": {
        name: "Wendy",
        userName: "Wendy12",
        password: "123",
        length: 0
    },
    "1": {
        name: "Peter Pan",
        userName: "PeterP",
        password: "123",
        length: 1
    },
    "2": {
        name: "Campanilla",
        userName: "Campana",
        password: "123",
        length: 2
    }
}
    //Callback
    var userNames = function(obj){

        return users.name;
    }

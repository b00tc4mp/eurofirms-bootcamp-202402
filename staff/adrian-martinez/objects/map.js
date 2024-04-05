
/**
 * 
 * @param {*} iterable
 * @param {*} callback 
 */
function map(iterable, callback){
    
    var mapped = {length: 0};

    for(let i=0;i < iterable.length;i++){

        result[i] = callback(object[i]);
    }
    result.length = object.length
}
var users = {
    "0": {
        name: "Wendy",
        userName: "Wendy12",
        password: "123"
    },
    "1": {
        name: "Peter Pan",
        userName: "PeterP",
        password: "123"
    },
    "2": {
        name: "Campanilla",
        userName: "Campana",
        password: "123"
    }
}
var callback = map(users, function(user){

    return users.userName;
})
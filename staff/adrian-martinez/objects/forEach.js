
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
    /* var userNames = function(obj){

        return users.name;
    } */

    var nums = {
        0:5,
        1:10,
        2:20,
        3:30,
        length: 4
    }

    forEach(nums, function(element) {

        console.log(element * 10);
    });

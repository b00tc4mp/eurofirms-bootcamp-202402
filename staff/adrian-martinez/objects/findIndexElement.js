
var users = {
    0: "Wendy",
    1: "Peter Pan",
    2: "Capitán Garfio",
    length: 3
}

function findIndexElement(object, callbackIndex){

    for(var i=0;i < object.length;i++){

        var encontrado = callbackIndex(object[i]);
        if(encontrado){
            return i;
        }
    }
    return -1; //Lo correcto es devolverlo como número
}
var callbackIndex = function(elemento){
    
    if(elemento === "Peter Pan"){
        return true
    }
    return false;
};

console.log(findIndexElement(users, callbackIndex));
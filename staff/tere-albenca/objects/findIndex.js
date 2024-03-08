var numbers = {
    0:1,
    1:10,
    2:16,
    3:43,
    4:51,
    length:5
}

function findIndex(object, callback){
    //recorro el objeto para buscar el indice descrito en el callback
    for (var i = 0; i< object.length; i++){
        //mi indice esta dentro del objeto , es un object i
        var index = object[i]
        if (callback(object[i]))
            //return object[i]
            //return index
            return i
    } return - 1
}

var index = findIndex(numbers, function(number){
//necesito saber el index del numero 11
return number === 10
})
console.log(index)
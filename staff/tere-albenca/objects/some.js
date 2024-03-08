var numbers = {
    0:1,
    1:10,
    2:16,
    3:43,
    4:51,
    length:5
}

function some(object, callback){
    //recorro el objeto para buscar si algun numero es mayor al descrito en el callback
    for (var i = 0; i< object.length; i++){
        if(callback(object[i])) //si se cumple una vez el callback devuelvo true
        return true
    }return false //si ninguno cumple devolvemos false
}
//esta es la condicion de callback
var somenumbers = some(numbers, function(number){
return number > 52
})
console.log(somenumbers)
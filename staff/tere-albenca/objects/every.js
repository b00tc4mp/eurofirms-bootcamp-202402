var cities = {
    0:'Valencia',
    1:'Madrid',
    2:'Sevilla',
    3:'Pontevedra',
    4:'Caceres',
    5:'Barcelona',
    6:'Oviedo',
    7:'Lleida',
    length:8
}
function every(object, callback){
    //recorro el objeto para comprobar si no se cumple el callback
    for (var i = 0; i< object.length; i++){
        if(!callback(object[i]))
        return false
    }  return true
}
//la callback
var callbackEvery = every(cities, function(element){
    return element.length > 4
})
console.log(callbackEvery)
var callbackEvery7 = every(cities, function(element){
    return element.length > 7
})
console.log(callbackEvery7)
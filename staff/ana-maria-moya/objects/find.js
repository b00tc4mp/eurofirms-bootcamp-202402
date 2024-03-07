function find(object, callback) {
    for (var i = 0; i < object.length; i++) {
        if (callback(object[i]))
            return true

    }
    return false
}
var callback = function (element) {
    return element === 'cadiz'
}

console.log('CASE1: comprobar si existe el primer elemento "Cadiz" del objeto')
var cities = {
    0: 'cadiz',
    1: 'malaga',
    2: 'granada',
    3: 'jaen',
    4: 'huelva',
    5: 'sevilla',
    length:6
}
console.log(find(cities, callback))

//Para hacer el callback anonima
// //console.log(find(cities,fuction(element){
//     return element==='cadiz'
// }))
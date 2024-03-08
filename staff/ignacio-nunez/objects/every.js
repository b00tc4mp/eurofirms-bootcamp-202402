function every(object, callback) {
    for (var i = 0; i < object.length; i++) {
        if (!callback(object[i])) return false
    }

    return true
}

console.log('FUNCTION EVERY')

console.log('CASE 1: return true on all cities have length higher than 4')

var cities = {
    0: 'Barcelona',
    1: 'Madrid',
    2: 'Sevilla',
    3: 'Valencia',
    4: 'Oviedo',
    5: 'Pontevedra',
    6: 'Caceres',
    length: 7
}

// var callback = function(element){

// }

// every(cities, callback)

var isEveryHigherThan4 = every(cities, function (element) {
    return element.length > 4
})

console.log(isEveryHigherThan4)

console.log('CASE 2: return false on all cities have length higher than 6')

var isEveryHigherThan4 = every(cities, function (element) {
    return element.length > 6
})

console.log(isEveryHigherThan4)
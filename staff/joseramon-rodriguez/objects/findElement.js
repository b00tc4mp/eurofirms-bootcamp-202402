function findElement(object, callback) {
    //create a result variable to return it it will be inicialiced as undefined as a default value
    var result = undefined
    //iterate the object to find a match with the callback
    for (var i = 0; i < object.length; i++) {
        var element = object[i]
        if (callback(element)) {
            result = element
            return result
        }
    }
    return result
}
// the callback will return true if element matches
function find(element, index, object) {
    return element === 'europa'
}

var continents = {
    0: 'america del norte',
    1: 'america del sur',
    2: 'europa',
    3: 'africa',
    4: 'asia',
    5: 'australia',
    length: 6
}
console.log('CASE 1: find  the europa continent with callback inside the continents')
var europe = findElement(continents, find)
console.log(europe)

console.log('CASE 2: find  the atlantida continent with callback inside the continents')
var atlantida = findElement(continents, function (element) { return element === 'atlantida' })
console.log(atlantida)
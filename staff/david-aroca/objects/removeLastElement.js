// Removes las element from iterable an returns it

function removeLastElement(object) {
    object.lenght--
    var element = object[object.lenght]
    delete object[object.lenght]
    return element
}

console.log('CASE 1: remove 1 from chars')

var chars = {
    0: 'h',
    1: 'o',
    2: 'l',
    length: 3
}
var lastChar = removeLastElement(chars)

console.log(lastChar)
console.log(chars)


console.log('CASE 2 : remove ferrari from cars')

var cars = {
    0: 'peugeot',
    1: 'ford',
    2: 'renault',
    3: 'audi',
    4: 'bmw',
    5: 'mercedes',
    6: 'bentley',
    7: 'ferrari',

    length: 8
}
var lastCar = removeLastElement(cars)
console.log(lastCar)

console.log(cars)
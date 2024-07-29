/**
 * Removes last element from iterable and returns it.
 */
function removeLastElement(object) {
    // TODO

    // object -> { 0: 'h', 1: 'o', 2: 'l', length: 3 }

    object.length-- // { 0: 'h', 1: 'o', 2: 'l', length: 2 }

    var element = object[object.length]

    delete object[object.length]

    return element
}

console.log('CASE 1: removes l from chars')

var chars = {
    0: 'h',
    1: 'o',
    2: 'l',

    length: 3
}

var lastChar = removeLastElement(chars)

console.log(lastChar)
// 'l'

console.log(chars)
/*
{
    0: 'h',
    1: 'o',
    
    length: 2
}
*/


console.log('CASE 2: remove ferrari from cars')

var cars = {
    0: 'peugeot',
    1: 'ford',
    2: 'renault',
    3: 'audi',
    4: 'bmw',
    5: 'mercedez',
    6: 'bentley',
    7: 'ferrari',

    length: 8
}

var lastCar = removeLastElement(cars)

console.log(lastCar)
// 'ferrari'

console.log(cars)
/*
{
    0: 'peugeot',
    1: 'ford',
    2: 'renault',
    3: 'audi',
    4: 'bmw',
    5: 'mercedez',
    6: 'bentley',

    length: 7
}
*/
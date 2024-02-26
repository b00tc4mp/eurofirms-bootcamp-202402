/**
 * Adds one element  to iterable object.
 */

function addElement(object, element) {
    object[object.length] = element 

    object.length++
}

console.log('CASE 1: add a to chars')

var chars = {
    0: 'h',
    1: 'o',
    2: 'l',

    length: 3
}

addElement(chars, 'a')

console.log(chars)
// {0: 'h', 1: '0', 2: 'l', '3': 'a', length: 4}

console.log('CASE 2: add 500 to nums')

var nums = {
    0: 100,
    1: 200,
    2: 300,
    3: 400,

    length: 4
}

addElement(cars, 'ferrari')

console.log
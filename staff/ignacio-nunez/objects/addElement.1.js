/**
 * Adds one element to iterable object.
 */
function addElement(object, element) {
    // TODO

    // object -> { 0: 'h', 1: 'o', 2: 'l', length: 3 }
    // element -> 'a'

    // { 0: 'h', 1: 'o', 2: 'l', length: 4 }
    // { 0: 'h', 1: 'o', 2: 'l', 3: 'a', length: 4 }

    //object.length = object.length + 1
    //object.length += 1
    object.length++

    object[object.length - 1] = element
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
// { 0: 'h', 1: 'o', 2: 'l', 3: 'a', length: 4 }


console.log('CASE 2: add 500 to nums')

var nums = {
    0: 100,
    1: 200,
    2: 300,
    3: 400,

    length: 4
}

addElement(nums, 500)

console.log(nums)
// { 0: 100, 1: 200, 2: 300, 3: 400, 4: 500, length: 5 }


console.log('CASE 3: add ferrari to cars')

var cars = {
    0: 'peugeot',
    1: 'ford',
    2: 'renault',
    3: 'audi',
    4: 'bmw',
    5: 'mercedez',
    6: 'bentley',

    length: 7
}

addElement(cars, 'ferrari')

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
    7: 'ferrari',

    length: 8
}
*/
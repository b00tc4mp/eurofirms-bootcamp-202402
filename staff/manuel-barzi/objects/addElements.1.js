/**
 * Adds elements to iterable object.
 */
function addElements(object) {
    // #1 { 0: 'h', 1: 'o', 2: 'l', length: 3 }
    // object -> #1
    // arguments -> { 0: #1, 1: 'a', 2: '!', length: 3 }

    for (var i = 1; i < arguments.length; i++) {
        var elem = arguments[i]

        object[object.length] = elem

        object.length++
    }
    // #1 { 0: 'h', 1: 'o', 2: 'l', 3: 'a', length: 3 }
    // #1 { 0: 'h', 1: 'o', 2: 'l', 3: 'a', length: 4 }
    // #1 { 0: 'h', 1: 'o', 2: 'l', 3: 'a', 4: '!', length: 4 }
    // #1 { 0: 'h', 1: 'o', 2: 'l', 3: 'a', 4: '!', length: 5 }
}


console.log('CASE 1: add "a", "!", to chars')

var chars = {
    0: 'h',
    1: 'o',
    2: 'l',

    length: 3
}

addElements(chars, 'a', '!')

console.log(chars)
// { 0: 'h', 1: 'o', 2: 'l', 3: 'a', 4: '!', length: 5 }


console.log('CASE 2: add 500, 600 and 700 to nums')

var nums = {
    0: 100,
    1: 200,
    2: 300,
    3: 400,

    length: 4
}

addElements(nums, 500, 600, 700, 800)

console.log(nums)
// { 0: 100, 1: 200, 2: 300, 3: 400, 4: 500, 5: 600, 6: 700, 7: 800, length: 8 }


console.log('CASE 3: add ferrari, lambo and bugatti to cars')

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

addElements(cars, 'ferrari', 'lambo', 'bugatti')

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
    8: 'lambo',
    9: 'bugatti',

    length: 10
}
*/
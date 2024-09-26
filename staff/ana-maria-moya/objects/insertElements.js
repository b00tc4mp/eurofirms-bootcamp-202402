/**
 * Inserts elements in iterable object at specified index.
 */
function insertElements(object, index) {
    var positionsToDisplace = object.length - index
    var positionsToInsert = arguments.length - 2

    for (var n = 0; n < positionsToDisplace; n++) {
        var originIndex = object.length - 1 - n
        var destinyIndex = originIndex + positionsToInsert

        object[destinyIndex] = object[originIndex]
    }

    for (var n = 0; n < positionsToInsert; n++) {
        var originIndex = 2 + n
        var destinyIndex = index + n

        object[destinyIndex] = arguments[originIndex]
    }

    object.length += positionsToInsert
}

console.log('CASE 1: inserts citroen, volkswagen and seat in cars at index 4')

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

insertElements(cars, 4, 'citroen', 'volkswagen', 'seat')

console.log(cars)
/*
{
    0: 'peugeot',
    1: 'ford',
    2: 'renault',
    3: 'audi',
    4: 'citroen',
    5: 'volkswagen',
    6: 'seat',
    7: 'bmw',
    8: 'mercedez',
    9: 'bentley',
    10: 'ferrari',

    length: 11
}
*/


console.log('CASE 2: add 250, 260, 270, 280, 290 in nums at index 2')

var nums = {
    0: 100,
    1: 200,
    2: 300,
    3: 400,
    4: 500,

    length: 5
}

insertElements(nums, 2, 250, 260, 270, 280, 290)

console.log(nums)
/*

    0: 100,
    1: 200,
    2: 250,
    3: 260,
    4: 270,
    5: 280,
    6: 290,
    7: 300,
    8: 400,
    9: 500,

    length: 10
}
*/
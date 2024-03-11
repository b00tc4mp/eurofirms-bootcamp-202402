/**
 * Inserts elements in iterable object at specified index.
 */
function insertElements(object, index) {
    // #1 Object { 0: 'peugeot', 1: 'ford', 2: 'renault', 3: 'audi', 4: 'bmw', 5: 'mercedez', 6: 'bentley', 7: 'ferrari', length: 8 }
    // object // #1
    // index // 4
    // arguments // Arguments { 0: #1, 1: 4, 2: 'citroen', 3: 'volkswagen', 4: 'seat', length: 5 }

    // #1 Object { 0: 'peugeot', 1: 'ford', 2: 'renault', 3: 'audi', 4: 'bmw', 5: 'mercedez', 6: 'bentley', 7: 'ferrari', length: 8 }

    object[10] = object[7]
    // #1 Object { 0: 'peugeot', 1: 'ford', 2: 'renault', 3: 'audi', 4: 'bmw', 5: 'mercedez', 6: 'bentley', 7: 'ferrari', 10: 'ferrari', length: 8 }
    object[9] = object[6]
    // #1 Object { 0: 'peugeot', 1: 'ford', 2: 'renault', 3: 'audi', 4: 'bmw', 5: 'mercedez', 6: 'bentley', 7: 'ferrari', 9: 'bentley', 10: 'ferrari', length: 8 }
    object[8] = object[5]
    // #1 Object { 0: 'peugeot', 1: 'ford', 2: 'renault', 3: 'audi', 4: 'bmw', 5: 'mercedez', 6: 'bentley', 7: 'ferrari', 8: 'mercedez', 9: 'bentley', 10: 'ferrari', length: 8 }
    object[7] = object[4]
    // #1 Object { 0: 'peugeot', 1: 'ford', 2: 'renault', 3: 'audi', 4: 'bmw', 5: 'mercedez', 6: 'bentley', 7: 'bmw', 8: 'mercedez', 9: 'bentley', 10: 'ferrari', length: 8 }

    object[4] = arguments[2]
    // #1 Object { 0: 'peugeot', 1: 'ford', 2: 'renault', 3: 'audi', 4: 'citroen', 5: 'mercedez', 6: 'bentley', 7: 'bmw', 8: 'mercedez', 9: 'bentley', 10: 'ferrari', length: 8 }
    object[5] = arguments[3]
    // #1 Object { 0: 'peugeot', 1: 'ford', 2: 'renault', 3: 'audi', 4: 'citroen', 5: 'volkswagen', 6: 'bentley', 7: 'bmw', 8: 'mercedez', 9: 'bentley', 10: 'ferrari', length: 8 }
    object[6] = arguments[4]
    // #1 Object { 0: 'peugeot', 1: 'ford', 2: 'renault', 3: 'audi', 4: 'citroen', 5: 'volkswagen', 6: 'seat', 7: 'bmw', 8: 'mercedez', 9: 'bentley', 10: 'ferrari', length: 8 }

    object.length += 3 // object.length = object.length + 3
    // #1 Object { 0: 'peugeot', 1: 'ford', 2: 'renault', 3: 'audi', 4: 'citroen', 5: 'volkswagen', 6: 'bentley', 7: 'bmw', 8: 'mercedez', 9: 'bentley', 10: 'ferrari', length: 11 }
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
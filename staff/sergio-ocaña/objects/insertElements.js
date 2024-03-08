function insertElements(object, position) {
    for (var i = arguments.length - 1; i > 1; i--) {
        var element = arguments[i]
        for (var j = object.length; j > position; j--) {
            object[j] = object[j - 1]
        }
        object[position] = element
        object.length++
    }

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
/**
 * Merge elements from iterable object to another iterable object at specified index.
 */
function mergeElements(object, index, objectToMerge) {
    // TODO
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

var cars2 = {
    0: 'citroen',
    1: 'volkswagen',
    2: 'seat',
    length: 3
}

mergeElements(cars, 5, cars2)

console.log(cars)
/*
{
    0: 'peugeot',
    1: 'ford',
    2: 'renault',
    3: 'audi',
    4: 'bmw',
    5: 'citroen',
    6: 'volkswagen',
    7: 'seat',
    8: 'mercedez',
    9: 'bentley',
    10: 'ferrari',

    length: 11
}
*/

console.log(cars2)
/*
{
    0: 'citroen',
    1: 'volkswagen',
    2: 'seat',
    length: 3
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

var nums2 = {
    0: 250,
    1: 260,
    2: 270,
    3: 280,
    4: 290,
    length: 5
}

mergeElements(nums, 2, nums2)

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

console.log(nums2)
/*
{
    0: 250,
    1: 260,
    2: 270,
    3: 280,
    4: 290,
    length: 5
}
*/
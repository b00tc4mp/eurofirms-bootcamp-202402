/**
 * Removes an element specified by index from iterable object and returns it.
 */

console.log('CASE 1: remove renault from cars')

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



console.log(car)
// 'renault'

console.log(cars)
/*
{
    0: 'peugeot',
    1: 'ford',
    2: 'audi',
    3: 'bmw',
    4: 'mercedez',
    5: 'bentley',
    6: 'ferrari',

    length: 7
}
*/


console.log('CASE 2: remove 400 from nums')

var nums = {
    0: 100,
    1: 200,
    2: 300,
    3: 400,
    4: 500,

    length: 5
}

var num = removeElement(nums, 3)

console.log(num)
// 400

console.log(nums)
/*
{
    0: 100,
    1: 200,
    2: 300,
    3: 500,

    length: 4
}
*/
function removeElement(object, index) {
    var removedElement = object[index]

    for ( var i = index; i < object.length-1;i++) {
        object[i] = object[i+1]

    }
    object.length--

    delete object[object.length]


    return removedElement
} 


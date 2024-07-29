/**
 * Removes an element specified by index from iterable object and returns it.
 */
function removeElement(object, index) {
    // TODO
    var removedElement = object.index
    delete object.index
    for (var i = index; i < object.length; i++) {
        object[i] = object[i + 1]
    }
    object.length--
    delete object[object.length]
    return removedElement
}

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

var car = removeElement(cars, 2)

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
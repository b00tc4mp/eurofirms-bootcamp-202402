/**
 * Removes first element from iterable object and returns it.
 */
function removeElements(object, index, count) {
    var newObject = {};

    for (let i = index; i < object.length; i++) {
        var deleteValues = object[i];
        object.length--;
    }

    newObject = deleteValues;

    return newObject;
}



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
removeElements(cars, 3, 3)

// console.log('hola')
// var resultado = removeFirstElements(cars, 3, 3)
// console.log(resultado)

console.log(cars)
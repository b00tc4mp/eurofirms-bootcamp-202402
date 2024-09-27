/**
 * Inserts elements in iterable object at specified index.
 */
console.log('CASE 1: inserts citroen, volkswagen and seat in cars at index 3')
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
function insertElements(object, index, ...elements) {
    // object -> { 0: 'peugeot', 1: 'ford', 2: 'renault', 3: 'audi', 4: 'bmw', 5: 'mercedez', 6: 'bentley', 7: 'ferrari', length: 8 }
    for (var i = object.length - 1; i >= index; i--) {
        object[i + elements.length] = object[i]
    }

    //necesitamos recorrer j para añadir los nuevos elementos porque la i solo 
    for (var j = 0; j < elements.length; j++) {
        object[index + j] = elements[j]
    }

    //finalmente se calcula la nueva longitud
    object.length += elements.length
}

insertElements(cars, 3, 'citroen', 'volkswagen', 'seat')
console.log(cars)
// The indexOf() method compares searchElement to elements of the array using strict equality (the same algorithm used by the === operator). NaN values are never compared as equal, so indexOf() always returns -1 when searchElement is NaN.

// The indexOf() method skips empty slots in sparse arrays.

// The indexOf() method is generic. It only expects the this value to have a length property and integer-keyed properties.
function indexOF(object, value) {
    for (let i = 0; i < object.length; i++) {
        if (object[i] === value) {
            var result = Object.keys(object)
            console.log(result)
        }

    }
    return result;

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

var result = indexOF(cars, 'audi')
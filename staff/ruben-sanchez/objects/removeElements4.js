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

function removeElements(object, index, elements) {
    var deleted = {}
    for (var j = 0; j < elements; j++) {
        deleted[j] = object[index]

        for (var i = index ; i < object.length - 1; i++) {
            object[i] = object[i + 1]
        }
        object.length--

        delete object[object.length]
    }
    return deleted
}

removeElements(cars, 2, 3)
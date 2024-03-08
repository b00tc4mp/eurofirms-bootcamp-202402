function findIndexElements(object, callback) {
    for (var i = 0; i < object.length; i++) {
        var call = callback(object[i])
        if (call)
            return i
    }

    return -1
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

console.log(findIndexElements(cars, function (element) {
    return element === 'audi'
}))

console.log(findIndexElements(cars, function (element) {
    return element === 'ferrari'
}))
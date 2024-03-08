function forEach(object, callback) {
    for (var i = 0; i < object.length; i++) {
        callback(object[i])
    }
    return
}
var callback = function (value) {
    console.log(value)
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

forEach(cars, callback)
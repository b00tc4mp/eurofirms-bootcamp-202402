function reverse(object) {
    var reverseObject = { ...object }
    for (i = 0; i < object.length; i++) {
        object[i] = reverseObject[object.length - 1 - i]
    }
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
reverse(cars);
console.log(cars)
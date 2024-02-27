// In this case program merge 2 objects
function mergeObjects(object1, index, object2) {
    // object1.length 8
    // index 2
    // object2.length 3

    for (let i = object1.length; i >= index; i--) {
        object1[i + index] = object1[i - 1]
    }
    for (let j = 0; j < object2.length; j++) {
        object1[j + index] = object2[j]

    }
    object1.length += object2.length;
    return object1;
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

var companys = {
    0: 'cocacola',
    1: 'pepsi',
    2: 'colacao',

    length: 3
}

mergeObjects(cars, 2, companys)


console.log(cars);
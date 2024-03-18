// In this case program merge 2 objects
function mergeObjects(object1, object2) {
    for (let i = 0; i < object2.length; i++) {
        object1[object1.length] = object2[i];
        object1.length++;
    }
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

mergeObjects(cars, companys)


console.log(cars);
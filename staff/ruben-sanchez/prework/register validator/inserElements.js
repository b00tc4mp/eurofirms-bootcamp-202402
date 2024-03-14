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
var nums = {
    0: 100,
    1: 200,
    2: 300,
    3: 400,
    4: 500,

    length: 5
}
function insertElement(object, index, elements){
    for (var j = 2;j < arguments.length;j++) {
    
    for (var i = index; i < object.length - 1; i++) {
        var elem = object[i + 1]

        object[i] = elem
    }
    delete object[object.length - 1]
    
    }
}
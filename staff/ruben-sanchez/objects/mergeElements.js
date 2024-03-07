var cars = {
    0: 'peugot',
    1: 'ford',
    2: 'renault',
    3: 'audi',
    4: 'bmw',
    5: 'mercedes',
    6: 'bentley',
    7: 'ferrari',

    length: 8
}

var cars2 = {
    0: 'citroen',
    1: 'volkswagen',
    2: 'seat',
    length: 3
}

function mergeElementsElement(object, index, object2) {

    for (var j = arguments.length-1; j >= 0 ; j--) {



        for (var i = object.length - 1; i >= index; i--) {

            object[i + 1] = object[i]


        }
        object[index] = object2[j]
        object.length++
    }

    return object
}
mergeElements(cars, 2,cars2)
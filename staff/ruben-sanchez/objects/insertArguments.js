var cars = {
    0: 'tesla',
    1: 'bentley',
    2: 'seat',
    3: 'toyota',
    4: 'nisan',
    5: 'kia',
    length: 6
}

var cars2 = {
    0: 'kawasaki',
    1: 'honda',
    2: 'bmw',
    length: 3
}


function insertElement(object, index) {

    for (var j = arguments.length-1; j >= 2 ; j--) {



        for (var i = object.length - 1; i >= index; i--) {

            object[i + 1] = object[i]


        }
        object[index] = arguments[j]
        object.length++
    }

    return object
}
insertElement(cars, 2, 'honda', 'kawasaki', 'bmw')

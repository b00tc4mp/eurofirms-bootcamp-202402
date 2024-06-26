function splice(object, start, number) {
    var removed = { length: 0 }
    var counter = arguments.length - 3 - number
    for (var i = 0; i < number; i++) {
        removed[i] = object[start + i]
        removed.length++
    }
    if (counter > 0) {
        for (var i = object.length - 1; start < i; i--) {
            object[i + counter] = object[i]
        }


    }
    else {
        counter = -counter
        for (var i = start; i < object.length - counter; i++) {
            object[i + arguments.length - 3] = object[i + counter + arguments.length - 3]
        }

        for (var i = 0; i < counter + 1; i++) {
            delete object[object.length - i]
        }

        counter = -counter
    }
    for (var i = 0; i < arguments.length - 3; i++) {
        object[start + i] = arguments[3 + i]
    }
    object.length += counter
    return removed
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
console.log('CASE 1 at index 2 delete 3 properties and add "hotweels"and "F1"')
console.log(splice(cars, 2, 3, "hotweels", "F1"))
console.log(cars)

cars2 = {
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

console.log('CASE 2 at index 1 delete 1 properties and add "hotweels", "F1"and "autoslocos"')
console.log(splice(cars2, 1, 1, "hotweels", "F1", "autoslocos"))
console.log(cars2)

cars3 = {
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
console.log('CASE 3 at index 4  add "hotweels", "F1"and "autoslocos"')
console.log(splice(cars3, 4, 0, "hotweels", "F1", "autoslocos"))
console.log(cars3)

cars4 = {
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
console.log('CASE 4 at index 5 delete 2')
console.log(splice(cars4, 5, 2))
console.log(cars4)

cars5 = {
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

console.log('CASE 5 at index 6 delete 1 and add "batmovil"')
console.log(splice(cars5, 6, 1, 'batmovil'))
console.log(cars5)


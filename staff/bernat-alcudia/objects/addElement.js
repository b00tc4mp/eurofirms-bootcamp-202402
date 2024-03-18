function addElement(object, element) {
    object[object.length] = element;
    object.length++;
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

addElement(cars, 'mitsubishi')

for (let i = 0; i < cars.length; i++) {
    console.log(cars[i])
}
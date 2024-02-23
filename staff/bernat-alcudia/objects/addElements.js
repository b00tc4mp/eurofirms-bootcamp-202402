/**
 * Removes first element from iterable object and returns it.
 */
function addElements(object, index,) {
    newPositions = arguments.length - 2;


    for (let i = index; i < newPositions; i++) {
        object[i + newPositions] = object[i]

    }

    for (let i = index; i < newPositions; i++) {

        object[i] = arguments[i];//Añadiendo los valores a coche
        length++;//Longitud aumentada del objeto

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

addElements(cars, 2, 'helicopter', 'taxi');

for (let i = 0; i < cars.length; i++) {
    console.log(cars[i])
}
/**
 * Removes first element from iterable object and returns it.
 */
function removeFirstElement(object) {
    var objecDel = object[0];//Guardamos el valor del primer elemento a borrar

    delete object[0];//Eliminamos el primer elemento
    // var cars = {
    //     1: 'ford',
    //     2: 'renault',
    //     3: 'audi',
    //     4: 'bmw',
    //     5: 'mercedez',
    //     6: 'bentley',
    //     7: 'ferrari',

    //     length: 8
    // }
    //Cambiamos de posicion todos los elementos
    for (let i = 0; i < cars.length; i++) {
        object[i] = object[i + 1]

    }
    object[object.length] = ultimovalor;
    //    var cars = {
    //     0: 'peugeot',
    //     1: 'ford',
    //     2: 'renault',
    //     3: 'audi',
    //     4: 'bmw',
    //     5: 'mercedez',
    //     6: 'bentley',
    //     7: 'ferrari',

    //     length: 7 Restamos uno a su longitud
    // }
    cars.length--;

    return objecDel;

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

removeFirstElement(cars);

for (let i = 0; i < cars.length; i++) {
    console.log(cars[i])
}
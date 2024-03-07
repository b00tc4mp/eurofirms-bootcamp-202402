//Merge 2 elements  between them 
function mergeElements(object1, index, object2) {
    for (let i = object1.length - 1; i >= index; i--) {
        object1[i + object2.length] = object1[i];

    }

    for (let i = 0; i < object2.length; i++) {
        object1[index + i] = object2[i];

    }

    object1.length = object1.length + object2.length;
}

console.log('CASE 1: mezcla estos elementos entre ellos  mismos  ')

var cars = {
    0: 'peugeot',
    1: 'audi',
    2: 'citroen',
    3: 'ford',
    4: 'bmw',
    length: 5
}

var cars2 = {
    0: 'volkswagen',
    1: 'chevrolet',
    2: 'ferrari',
    3: 'mercedez',
    length: 4
}

mergeElements(cars, 2, cars2)

console.log(cars);

// {
//     0: 'peugeot',
//     1: 'audi',
//     2: 'volkswagen',
//     3: 'chevrolet',
//     4: 'ferrari',
//     5: 'mercedez'
//     6: 'citroen',
//     7: 'ford',
//     8: 'bmw',
//     length: 9
// }



console.log('CASE 2: mezcla estos elementos entre ellos  mismos  ')




var fruits = {
    0: 'platano',
    1: 'naranja',
    2: 'piña',
    3: 'melon',
    4: 'sandia',
    length: 5
}
var fruits2 = {
    0: 'melocoton',
    1: 'fresa',
    2: 'kiwi',
    length: 3

}

mergeElements(fruits, 3, fruits2)

console.log(fruits)
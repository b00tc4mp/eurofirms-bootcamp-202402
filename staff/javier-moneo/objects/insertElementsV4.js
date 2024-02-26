/**
 * Inserts elements in iterable object at specified index.
 */
function insertElements(object, index) {
    // console.log(arguments);
    var iniArg = 2; // posicion donde empiezan los argumentos variables
    var endArg = arguments.length;  // posicion donde acaban los argumentos variables
    var numArgumentsToInsert = arguments.length - iniArg; // numero total de argumentos a insertar
    // console.log(numArgumentsToInsert);
    for(var i = object.length-1; i >= index; i --){
        object[i + numArgumentsToInsert]= object[i];
    }

    // Introducimos los nuevos valores
    var k = 0;
    for(var j = index; j < (index + numArgumentsToInsert); j++){
        object[j] = arguments[iniArg + k]
        k++;
    }

    //otra forma de introducir los valores
    // for(var i = 2; i <arguments.length; i ++){
    //     object[index + (i-2)] = arguments[i];
    // }
    // actualizamos el valor de object.length
    object.length = object.length + numArgumentsToInsert;
}

console.log('CASE 1: inserts citroen, volkswagen and seat in cars at index 4')

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

insertElements(cars, 4, 'citroen', 'volkswagen', 'seat')

console.log(cars)
/*
{
    0: 'peugeot',
    1: 'ford',
    2: 'renault',
    3: 'audi',
    4: 'citroen',
    5: 'volkswagen',
    6: 'seat',
    7: 'bmw',
    8: 'mercedez',
    9: 'bentley',
    10: 'ferrari',

    length: 11
}
*/


console.log('CASE 2: add 250, 260, 270, 280, 290 in nums at index 2')

var nums = {
    0: 100,
    1: 200,
    2: 300,
    3: 400,
    4: 500,

    length: 5
}

insertElements(nums, 2, 250, 260, 270, 280, 290)

console.log(nums)
/*

    0: 100,
    1: 200,
    2: 250,
    3: 260,
    4: 270,
    5: 280,
    6: 290,
    7: 300,
    8: 400,
    9: 500,

    length: 10
}
*/
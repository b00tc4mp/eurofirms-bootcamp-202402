function slice(object, start, end) {
    var sliceObject = { length: 0 }
    var enterPoint = 0
    var exitPoint = 0
    if (start < 0) {
        start = object.length + start
        //si start es -2 tienes que apuntar al indice 6(object[6])
        //si start es -4 tienes que apuntar al indice 4(object[4])
    }
    if (end < 0) {
        end = object.length + end
        //si end es -2 tienes que apuntar al indice 6(object[6])

    }

    for (var i = start; i < end; i++) {
        sliceObject[i - start] = object[i]
        sliceObject.length++
        // sliceObject[3-3]
        //Saco el primer elemento
        // sliceObjects[0] = objects[3]
        // sliceObjects[1] = Objects[4]
        // sliceObjects[2] = Objects[5]

    }
    return sliceObject
}

console.log('CASE 1: hacer una copia de las películas de dibujos animados, de la 3 a la 5')

var films = {

    0: 'LosVengadores',
    1: 'CadenaPerpetua',
    2: 'LaVieEstBelle',
    3: 'ComoEntrenarATuDragon',
    4: 'ReyLeon',
    5: 'Tarzan',
    6: 'LoslunesAlSol',
    7: 'MillionDollarBaby',

    length: 8
}

var sliceFilms = slice(films, 3, 5)
console.log(films)
console.log(sliceFilms)

console.log('CASE 2: hacer una copia de las películas de dibujos animados, de la -6 a la 3')

var films = {

    0: 'LosVengadores',
    1: 'CadenaPerpetua',
    2: 'LaVieEstBelle',
    3: 'ComoEntrenarATuDragon',
    4: 'ReyLeon',
    5: 'Tarzan',
    6: 'LoslunesAlSol',
    7: 'MillionDollarBaby',

    length: 8
}
var sliceFilms2 = slice(films, -6, 3)
console.log(films)
console.log(sliceFilms2)
/*Expect Result: sliceFilms2 = {0:'LaVieEstBelle',length:1}
*/
console.log('CASE 3: hacer una copia de las películas de dibujos animados, de la 2 a la -4')

var films = {

    0: 'LosVengadores',
    1: 'CadenaPerpetua',
    2: 'LaVieEstBelle',
    3: 'ComoEntrenarATuDragon',
    4: 'ReyLeon',
    5: 'Tarzan',
    6: 'LoslunesAlSol',
    7: 'MillionDollarBaby',

    length: 8
}
var sliceFilms3 = slice(films, 2, -4)
console.log(films)
console.log(sliceFilms3)
/*Expect Result: sliceFilms2 = {0:'LaVieEstBelle',1:'ComoEntrenarATuDragon, length:2}
*/
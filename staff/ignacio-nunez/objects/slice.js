function slice(object, indexStart, indexEnd) {
    var result = { length: 0 }

    // si no tenemos ni indexStart ni indexStart, retornamos un clon del object
    if (indexEnd === undefined && indexStart === undefined) {
        var objectClone = { ...object }

        return objectClone
    }
    // si no nos envian indexEnd, le asignamos el object.length que seria el final
    if (indexEnd === undefined || indexEnd > object.length) {
        indexEnd = object.length
    }

    if (-indexEnd > object.length || indexStart > object.length) {
        return result
    }

    if (indexEnd < 0) {
        indexEnd = object.length + indexEnd
    }

    // si no nos envian indexStart, le asignamos el 0 que seria el comienzo
    if (indexStart === undefined || -indexStart > object.length) {
        indexStart = 0
    }

    if (indexStart < 0) {
        indexStart = object.length + indexStart
    }

    for (var i = indexStart; i < indexEnd; i++) {
        var resultIndex = i - indexStart

        result[resultIndex] = object[i]
    }

    result.length = indexEnd - indexStart

    return result
}

console.log('FUNCTION SLICE')
console.log('CASE 1: extract from object the values between index 2 and 6')

var superHeroes = {
    0: 'Batman',
    1: 'Superman',
    2: 'Flash',
    3: 'Spiderman',
    4: 'Hulk',
    5: 'The Thing',
    6: 'Wonder woman',
    7: 'Iron man',
    8: 'Arrow',

    length: 9
}
var slicedSuperHeroes = slice(superHeroes, 2, 6)

console.log(superHeroes)
console.log(slicedSuperHeroes)
// { 0: 'Flash', 1: 'Spiderman', 2: 'Hulk', 3: 'The Thing', length: 4 }

console.log('CASE 2: extract from object the values between index 2')

var slicedSuperHeroes2 = slice(superHeroes, 2)

console.log(superHeroes)
console.log(slicedSuperHeroes2)
// {
//     0: 'Flash',
//     1: 'Spiderman',
//     2: 'Hulk',
//     3: 'The Thing'
//     4: 'Wonder woman',
//     5: 'Iron man',
//     6: 'Arrow',
//     length: 7
// }

console.log('CASE 3: extract all values from object')

var slicedSuperHeroes3 = slice(superHeroes)

console.log(superHeroes)
console.log(slicedSuperHeroes3)
// {
//     0: 'Batman',
//     1: 'Superman',
//     2: 'Flash',
//     3: 'Spiderman',
//     4: 'Hulk',
//     5: 'The Thing',
//     6: 'Wonder woman',
//     7: 'Iron man',
//     8: 'Arrow',

//     length: 9
// }

console.log('CASE 4: extract from object the values between index -7 and 6')

var slicedSuperHeroes4 = slice(superHeroes, -7, 6)

console.log(superHeroes)
console.log(slicedSuperHeroes4)
// { 0: 'Flash', 1: 'Spiderman', 2: 'Hulk', 3: 'The Thing', length: 4 }

console.log('CASE 5: extract from object the values between index 2 and -3')

var slicedSuperHeroes5 = slice(superHeroes, 2, -3)

console.log(superHeroes)
console.log(slicedSuperHeroes5)
// { 0: 'Flash', 1: 'Spiderman', 2: 'Hulk', 3: 'The Thing', length: 4 }

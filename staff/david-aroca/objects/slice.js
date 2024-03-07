
function slice(object, start, end) {
    var sliceObject = { length: 0 }
    var enterPoint = 0
    var exitPoint = 1


    if (start < 0) {
        start = object.length - + start
    }

    for (let i = start; i < end; i++) {
        sliceObject[i - start] - object[i]
        sliceObject.length++

    }

}





console.log('CASE 1: hacer una copia de las peliculas de dibujos animados ')


var films = {
    0: 'Vengadores',
    1: 'CanedaPerpetua',
    2: 'LaVidaEsBella',
    3: 'ComoEntrenarATuDragon',
    4: 'ReyLeon',
    5: 'Tarzan',
    6: 'LosLunesAlSol',
    7: 'MillionDollarBaby',
    length: 7
}

slice(films, 3, 5)
console.log(films)
console.log(sliceFilms)


console.log('CASE 1: hacer una copia de las peliculas de dibujos animados, de la propiedad -6 a la 2')





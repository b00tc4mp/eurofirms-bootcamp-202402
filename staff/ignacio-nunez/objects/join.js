function join(object, separator = ',') {
    //* creamos un acumulador que iniciamos como un string vacio de los valores
    //* recorrer objeto completo con bucle for
    //* tomar cada uno de los valores y los vamos acumulando en el result
    //* i = 0  Almendro  (acumulador = '' object[i] = Almendro) (condicion para no poner la coma)
    //* i = 1  Almendro,Olivo  (acumulador = 'Almendro' separator = ',' object[i] = Olivo)
    //* i = 2  Almendro,Olivo,Roble,  (acumulador = 'Almendro,Olivo' separator = ',' object[i] = Roble)
    //* i = 3  Almendro,Olivo,Roble,Pino, (acumulador = 'Almendro,Olivo,Roble' separator = ',' object[i] = Pino)

    var result = ''

    for (var i = 0; i < object.length; i++) {
        var element = object[i]

        // condicion para no agregar la coma al principio
        if (i !== 0) {
            // acumular los elementos
            result = result + separator + element
        }
        else {
            // si i es 0, insertamos el primero elemento (Almendro) en result 
            result = element
        }

        // condicion para no agregar la coma en el final
        // if (i !== object.length - 1) {
        //     result = result + element + separator
        // }
        // else {
        //     result = result + element
        // }
    }

    return result
}


console.log('FUNCTION JOIN')

console.log('CASE 1: join elements from object into an string with default separator ","')

var trees = {
    0: 'Almendro',
    1: 'Olivo',
    2: 'Roble',
    3: 'Pino',
    4: 'Abeto',
    5: 'Palmera',
    6: 'Manzano',
    7: 'Araucaria',
    8: 'Limonero',

    length: 9
}

var result = join(trees)

console.log(trees)
console.log(result)
// expected result = 'Almendro,Olivo,Roble,Pino,Abeto,Palmera,Manzano,Araucaria,Limonero'

console.log('CASE 2: join elements from object into an string with "-" separator')

var result2 = join(trees, '-')

console.log(trees)
console.log(result2)
// expected result = 'Almendro-Olivo-Roble-Pino-Abeto-Palmera-Manzano-Araucaria-Limonero'


function filter(object, callback) {
    //* creamos una nueva variable que la inicializaremos con un objeto vacio, donde iremos guardando los elementos aprobados por el filtro
    //* recorrer object
    //* dentro del bucle llamar a la callback con cada uno de los elementos de object (object[i]) y asignarle su valor de retorno a una variable
    //* evaluar la respuesta de la callback, y en caso de que sea true, agregamos el elemento al nuevo objecto que retornaremos y modificamos la longitud
    //* retornamos el nuevo objecto
    var result = { length: 0 }
    for (var i = 0; i < object.length; i++) {
        var callbackResult = callback(object[i])

        if (callbackResult) {
            result[result.length] = object[i]

            result.length++
            // result = { length: 0}
            // result = {0: -20, length: 1}
            // result = {0: -20, 1: 14, length: 2}
            // result = {0: -20, 1: 14, 2: 54, length: 3}
        }
    }

    return result
}

console.log('FUNCTION FILTER')

console.log('CASE 1: filter all the numbers with one digit')

var numbers = {
    0: -5,
    1: -20,
    2: 14,
    3: 6,
    4: 9,
    5: 54,
    6: -43,
    7: 0,
    length: 8
}

const filterCallback = function (number) {
    return number > 9 || number < -9
    // if (number < 0) {
    //     return number.toString().length > 2
    //         //    '-2'.length -> 2 > 2  false
    //         //   '-20'.length -> 3 > 2  true
    // }
    // else {
    //     return number.toString().length > 1
    // }
}

var result = filter(numbers, filterCallback)

console.log(numbers) // seguir igual
console.log(result)
console.log(result === numbers) // false
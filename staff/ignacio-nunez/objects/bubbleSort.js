function bubbleSort(object) {
    // creamos esta variable para saber si ha habido un cambio en los elementos
    // la iniciamos en true para entrar al for
    var elementsMoved = true

    // bucle para repetir las iteraciones sobre el objecto
    for (var i = 0; elementsMoved; i++) {
        // la cambiamos a false para que en caso de que no se mueva ningun elemento, no repita el bucle
        elementsMoved = false

        // bucle para recorrer el objecto y detectar si debemos cambiar algun elemento
        for (var j = 0; j < object.length - 1 - i; j++) {
            var element = object[j]
            var nextElement = object[j + 1]

            // valoramos si el elemento actual es menor que el siguiente
            if (element > nextElement) {
                // si se cumple, los intercambiamos
                object[j] = nextElement
                object[j + 1] = element
                // detectamos un cambio de elementos asi que la pasamos a true para repetir el primer bluce 
                elementsMoved = true
            }
        }
    }

    return object
}

console.log('FUNTION BUBBLESORT')

console.log('CASE 1: sort numbers object from minor to max')

var numbers = {
    0: 8,
    1: 23,
    2: 90,
    3: 6,
    4: 44,
    5: 10,
    6: 84,
    7: 41,
    8: 17,
    9: 19,

    length: 10
}

var sortedNumbers = bubbleSort(numbers)
console.log(numbers)
console.log(sortedNumbers)
console.log({ equalObjects: numbers === sortedNumbers })
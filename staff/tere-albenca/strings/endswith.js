console.log('FUNCTION ENDSWITH')

function endsWith(string, searchString, position) {
    var length = string.length
    var searchStringLength = searchString.length

    // Si la posición no es un número válido o es mayor que la longitud, la posición será igual a length.
    if (typeof position !== 'number' || position !== position || position > length) {
        position =length
    }

    // Calculamos la posición de inicio de la búsqueda.
    var startIndex = position - searchStringLength
    startIndex = startIndex < 0 ? 0 : startIndex // Aseguramos que startIndex no sea negativo.

    // Iteramos sobre la cadena desde startIndex hasta el principio.
    for (var i = startIndex; i >= 0; i--) {
        var found = true
        // Comparamos cada carácter de la subcadena con la cadena principal.
        for (var j = 0; j < searchStringLength; j++) {
            if (string[i + j] !== searchString[j]) {
                found = false
                break
            }
        }
        // Si encontramos la subcadena, devolvemos true.
        if (found) {
            return true
        }
    }

    // Si no se encontró la subcadena, devolvemos false.
    return false
}

var stringFruits = 'milk, Water, pepper'
console.log('CASE 1: endsWith in string fruits')
console.log(endsWith(stringFruits, 'pepper'))
// Expected: true
console.log('CASE 2: endsWith in incorrect index')
console.log(endsWith(stringFruits, 'pepper!', 4))
// Expected :false
console.log('CASE 3: endsWith in string fruits')
console.log(endsWith(stringFruits, 'pepper '))
// Expected: false
console.log(endsWith(stringFruits, 'milk',4))
// Expected: true
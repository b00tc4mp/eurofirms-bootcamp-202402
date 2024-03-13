console.log('FUNCTION ENDSWITH')
console.log('CASE 1: endsWith in string fruits')
function endsWith(string, searchString, position) {
    var length = string.length;
    var searchStringLength = searchString.length;

    // Si la posición no es un número válido o es mayor que la longitud, la posición será igual a length.
    if (typeof position !== 'number' || position !== position || position > length) {
        position =length;
    }

    // Calculamos la posición de inicio de la búsqueda.
    var startIndex = position - searchStringLength;
    startIndex = Math.max(0, startIndex); // Aseguramos que startIndex no sea negativo.

    // Iteramos sobre la cadena desde startIndex hasta el principio.
    for (var i = startIndex; i >= 0; i--) {
        var found = true;
        // Comparamos cada carácter de la subcadena con la cadena principal.
        for (var j = 0; j < searchStringLength; j++) {
            if (string[i + j] !== searchString[j]) {
                found = false;
                break;
            }
        }
        // Si encontramos la subcadena, devolvemos true.
        if (found) {
            return true;
        }
    }

    // Si no se encontró la subcadena, devolvemos false.
    return false;
}

var stringFruits = 'Tomate, Banana, strawberry, potato, bread, milk, Water, pepper';

console.log(endsWith(stringFruits, 'pepper'));
// Expected output: true

console.log(endsWith(stringFruits, 'pepper!', 17));

console.log(endsWith(stringFruits, 'pepper '));
// Expected output: false

// function endsWith(string, endPosition) {
//     var result = ''

//     if (typeof endPosition === 'undefined' || endPosition > string.length) {
//         endPosition = string.length
//     }

//     for (var i = endPosition - 1; i >= 0; i--) {
//         if (string[i] !== ' ') {
//             result = string[i] + result
//         }

//         else {
//             break
//         }
//     }
//     return result
// }
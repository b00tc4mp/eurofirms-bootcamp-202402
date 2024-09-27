console.log('FUNCTION REPLACE')

function replace(string, firstWord, finalWord) {
    var result = "";
    var i = 0; // Índice para recorrer la cadena

    while (i < string.length) {
        // Buscar una ocurrencia de la primera palabra
        var found = true;
        for (var j = 0; j < firstWord.length; j++) {
            if (string[i + j] !== firstWord[j]) {
                found = false;
                break;
            }
        }

        // Si se encuentra, se reemplaza por la finalword y avanza el índice
        if (found) {
            // Añado la palabra final al resultado
            result += finalWord;
            i += firstWord.length; // Avanzar al final de la palabra encontrada
        } else {
            result += string[i]; // Agregar el carácter actual al resultado
            i++; // Avanzar al siguiente carácter
        }
    }

    return result;
}

// Test cases
var stringFruits = "I like apples, oranges, and bananas."
var regex = /apples/i

console.log('CASE 1: replace in string fruits')
console.log(replace(stringFruits, 'apples', 'strawberries'))
console.log('CASE 2: REPLACE WITH REGEX')
console.log(replace(stringFruits, regex, 'grapes'))
function trim(string) {
    var result = ''

    // eliminar los del principio
    for (var i = 0; i < string.length; i++) {
        //si no es vacio o result ya no tiene caracteres en blanco
        if (string[i] !== ' ' || result) {
            //añade los caracteres a result
            result += string[i]
        }
    }

    // eliminar los del final
    var final = ''
    //Desde el finalsi 
    for (var i = result.length - 1; i >= 0; i--) {
        //no hay huevos vacios o la variable final no tiene caracteres blancos
        if (result[i] !== ' ' || final) {
            //se añade result a final
            final = result[i] + final
        }
    }

    return final
}

var trimHello = trim('   hello   ')

console.log('FUNCTION TRIM')
console.log('CASE 1: Delete the first and last empty characters')
console.log(trimHello)
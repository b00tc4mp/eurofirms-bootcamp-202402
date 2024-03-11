function slice(string, indexStart, indexEnd) {
    var resultado = ''
    for (var i = indexStart; i < indexEnd; i++){
        resultado += string[i]
    }
    return resultado
}

console.log("Caso 1: Eliminar desde el index 6 hasta el index 18")
var string = "Hola, ¿Cómo estás?"

var resultado = slice(string, 6, 18)
console.log({expected: "¿Cómo estás?", received: resultado})
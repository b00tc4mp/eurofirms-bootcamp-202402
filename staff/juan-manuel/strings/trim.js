function trim(string) {
    var resultado = ""
    for (var i = 0; i < string.length; i++){
        if (string[i] !== " " && resultado)
        resultado += string[i]
}
return resultado
}

var string = "   HOLA    "
console.log("CASO 1: eliminar espacios al principio y al final. Resultado = Primer carácter que no sea espacio")
console.log({resultado: trim(string)})
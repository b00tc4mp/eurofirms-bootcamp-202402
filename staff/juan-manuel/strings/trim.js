function trim(string) {
    var resultado = "";
    var inicio = 0;
    var fin = string.length - 1;

    for (inicio = 0; inicio < string.length; inicio++) {
        if (string[inicio] !== " ") {
            break;
        }
    }

    for (fin = string.length - 1; fin >= inicio; fin--) {
        if (string[fin] !== " ") {
            break;
        }
    }

    for (var i = inicio; i <= fin; i++) {
        resultado += string[i];
    }

    return resultado;
}

var string = "   HOLA    ";
console.log("CASO 1: eliminar espacios al principio y al final. Resultado = Primer carácter que no sea espacio");
console.log({ resultado: trim(string) });
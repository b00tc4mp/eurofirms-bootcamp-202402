function trim(string) {
    // creamos una variable donde iremos guardando nuestro nuevo string, que inicializamos con un string vacio
    // recorrer el string con un bucle
    // si encontramos espacios antes de llegar al primer caracter, no lo agregamos a nuestro nuevo string
    // la accion anterior la repetimos hasta encontrar un caracter que no sea un espacio
    var result = ''
}

console.log('FUNCTION TRIM')

console.log('CASE 1: delete empty spaces from begining and end of "   Hello World  "')

var helloWorld = '   Hello World  '

var result = trim(helloWorld)

console.log(result) // 'Hello World'
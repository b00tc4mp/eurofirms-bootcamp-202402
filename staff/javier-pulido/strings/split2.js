function split (string, separator ){
//poner un contenedor vacio, en modo string en el array, donde iran los patrones o bloques del resultado del acumulador ,cuando se encuentra con un espacio.
// poner un acumulador, donde se iran pasando caracter a caracter hasta encontrarse con un espacio
// hacer un bucle que recorrar el array completo
//hacer una condicion para que el indice que haya en ese momento se compare con el separador

    var result = []
    var acumulatedString = ''

    for ( var i = 0; i < string.length; i++){
        if(string[i]=== separator)
    }

}

console.log('FUNCTION SPLIT')

console.log('CASE 1: split into string blocks or patterns of an array when it finds a space "Hello World, I am Learning JavaScript"')

var string = 'Hello World, I am Learning JavaScript.'

var result = split(string,' ')
console.log({ expected:[ 'Hello', 'World,', 'I', 'am', 'Learning', 'JavaScript.'], received : result} )
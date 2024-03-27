function split( string, separator) {
    var result = []
    var acumulatedString = ''

    for (var i = 0; i < string.length; i++){
       if (string[i] === separator){
        result[result.length] = acumulatedString

        acumulatedString = ''
       }

       else  acumulatedString += string[i]

       if ( i === string.length -1 ){
            result[result.length] = acumulatedString

    }

}

return result

}

console.log('FUNCTION SPLIT')

console.log('CASE 1: dividir en bloques string o patrones de un array cuando encuentra un espacio "Hello World, I am Learning JavaScript"')

var string = 'Hello World, I am Learning JavaScript.'

var result = split(string,' ')
console.log({expected: [ 'Hello', 'World,', 'I', 'am', 'Learning', 'JavaScript.'], received : result} )
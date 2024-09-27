function split(string, separator, limit) {
    var result = [];
    var accumulatedString = ''
    var separatorCount = 0;

    for (var i = 0; i < string.length; i++) {
        var character = string[i]
        //si el valor del caracter es igual a separator, se suma al array y pone en blanco el nuevo string, y suma un count
        if (character === separator) {
            result[result.length] = accumulatedString;
            accumulatedString = ''
            separatorCount++
            //si no acumula el caracter al string 
            if (separatorCount >= limit)
                break
            
        } else {
            accumulatedString += character
        }
    }
    //si accumulatedString no es un string vacio se devuelve dentro del array
    if (accumulatedString !== '') {
        result[result.length] = accumulatedString
    }

    return result
}

console.log('function split')
console.log('CASE 1')

var string = 'Hello world I am Maite'
var result = split(string, ' ', 3)
console.log(result)
console.log({ expected: ['Hello', 'world', 'I'] })
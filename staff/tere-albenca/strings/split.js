function split(string, separator, limit) {
    var result = [];
    var accumulatedString = '';
    var separatorCount = 0;
    
    for (var i = 0; i < string.length; i++) {
        //comprobar si ha alcanzado el limite y si el separatorCount es mayor o igual que el limite final
        if (limit && separatorCount >= limit - 1) {
            // Si se ha alcanzado el límite del patrón, se agrega el resto en el último string del array
            result.push(string.substring(i));
            break;
        }
        //si el valor del caracter es igual a separator, hace push del string al arrray y pone en blanco el nuevo string, suma un count
        if (string[i] === separator) {
            result.push(accumulatedString);
            accumulatedString = '';
            separatorCount++;
            //si no acumula el caracter al string 
        } else {
            accumulatedString += string[i];
        }
    }
    //si accumulatedString no es un string vacion se devuelve dentro del array
    if (accumulatedString !== '') {
        result.push(accumulatedString);
    }

    return result;
}

console.log('function split');
console.log('CASE 1');

var string = 'Hello world I am Maite';
var result = split(string, ' ', 5)
console.log(result);
console.log({ expected: ['Hello', 'world', 'I', 'am', 'Maite'] })

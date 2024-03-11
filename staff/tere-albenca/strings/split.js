function split(string, separator, limit) {
    var result = [];
    var accumulatedString = '';
    var separatorCount = 0;
    
    for (var i = 0; i < string.length; i++) {
        //comprobar si ha alcanzado el limite y si el separeor count es mayor o igual que el limite menos uno
        if (limit && separatorCount >= limit - 1) {
            // Si se ha alcanzado el límite de divisiones permitidas, se agrega el resto
            result.push(string.substring(i));
            break;
        }

        if (string[i] === separator) {
            result.push(accumulatedString);
            accumulatedString = '';
            separatorCount++;
        } else {
            accumulatedString += string[i];
        }
    }

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

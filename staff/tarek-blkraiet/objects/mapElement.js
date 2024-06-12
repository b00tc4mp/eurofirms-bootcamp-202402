//  el motodo map da un array con cambio de valores o las operaciones que queria hacer nuevo iniciando desde un array hay existe y mantiene el antigo array. y la misma length

//ejemplo que he hecho con manuel
/*maps each elemrent from interable object to another iterable object.
*
*@param(*) iterable
*@param(*) callback
*/
function mapElement(object, callback) {
    var result = []

    for (var i = 0; i < object.length; i++) {
        // calls the function print to add mixWords to the property
        result[i] = callback(object[i])
    }
    return result
}

// function to add mixWords to something

function print(something) {
    return ' mixWords de ' + something
}

var mixWords = {
    0: 'papers',
    1: 'film',
    2: 'keyboard',
    3: 'phone',
    4: 'table',
    5: 'bed',

    length: 6

}

console.log('CASE: map all the mixWords with callback')

var map = mapElement(mixWords, print)

console.log(map)


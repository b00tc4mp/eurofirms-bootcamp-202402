console.log('FUNCTION ENDSWITH')
console.log('CASE 1: endsWith in string fruits')

function endsWith(string, endPosition) {
    var result = ''

    if (endPosition === undefined) {
        return result
    }

    if (endPosition > string.length) {
        return result
    }

    for (var i = endPosition; i >= 0; i--) {
        if (string[i] === ' ' || i === 0) {
            result = string.substring(i, endPosition)
            break
        }
    }

    return result
}

var string = 'Tomate, Banana, strawberry, potato, bread, milk, Water, pepper'
var endsFruits = endsWith(string)

console.log(string)
console.log(endsFruits)

console.log('CASE 2: endsWith in position')
var endStrawberrie = endsWith(string, 26)
console.log(endStrawberrie)
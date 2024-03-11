function slice(string, indexStart, indexEnd) {
    var result = ''

    if (indexEnd === undefined && indexStart === undefined) {
        var newString = []
        return newString
    }

    if (indexEnd === undefined || indexEnd > string.length) {
        indexEnd = string.length
    }

    if (-indexEnd > string.length || indexStart > string.length) {
        return result
    }

    if (indexEnd < 0) {
        indexEnd = string.length + indexEnd
    }

    if (indexStart === undefined || -indexStart > string.length) {
        indexStart = 0
    }

    if (indexStart < 0) {
        indexStart = string.length + indexStart
    }

    for (var i = indexStart; i < indexEnd; i++) {
        result += string[i]
    }

    return result
}

console.log('FUNCTION SLICE')
console.log('CASE 1: extract from string the values between index 2 and 6')

var string = 'Tomate, Banana, strawberry, potato, bread, milk, Water, pepper'
var slicedfruits = slice(string, 2, 6)

console.log(string)
console.log(slicedfruits)
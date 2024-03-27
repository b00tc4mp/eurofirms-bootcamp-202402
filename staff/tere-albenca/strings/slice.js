function slice(string, indexStart, indexEnd) {
    var result = ''

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

var string = 'Tomate, Banana, strawberry, potato, bread, milk, Water, pepper'

console.log('FUNCTION SLICE')
console.log('CASE 1: extract from string the values between index 8 and 14')

var slicedfruits = slice(string, 8, 14)
console.log(slicedfruits)

console.log('CASE 1: extract from string the values between index -13 and -8')

var slicedtwo = slice(string, -13, -8)
console.log(slicedtwo)

function slice(string, indexStart, indexEnd) {
    // si index start es negativo -> modificar su valor
    // si indexEnd es negativo -> modificar su valor
    if(indexStart < 0)
    indexStart = string.length + indexStart
    if(indexEnd<0)
    indexEnd = string.length + indexEnd
    
    var result = ''
    for (var i = indexStart; i < indexEnd; i++) {
        result += string[i]
    }
    return result
}


var string = 'Hello my name is Ana María'

console.log('CASE1: copiar desde el index 0 hasta el index 4')
var result = slice(string, 0, 5)
console.log({ expected: 'Hello', received: result })

console.log('CASE2: copiar desde el index 6 hasta el 13')
var result = slice(string, 6, 13)
console.log({ expected: 'my name', received: result })

console.log('CASE2: copiar desde el index -1 hasta el -10')
var result2 = slice(string, -9, string.length)
console.log({ expected: 'Ana María', received: result2 })


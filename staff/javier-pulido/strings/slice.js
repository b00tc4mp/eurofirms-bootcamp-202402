function slice(string, indexStart, indexEnd) {
    var result = ''
    // if (indexStart === -indexStart)
    // if (indexEnd === -indexEnd)
    if (indexStart < 0) {
        indexStart = string.length + indexStart;
    }
    if (indexEnd < 0) {
        indexEnd = string.length + indexEnd;
    }
    
    for (var i = indexStart; i < indexEnd; i++) {
        result += string[i]
    }
    return result
}

console.log('FUNCTION SLICE')

console.log('CASE 1: cut the extract of sentence "Hello World, I am Learning JavaScript "')

var string = 'Hello World, I am Learning JavaScript.'

var result = slice(string, 0, 11)
console.log({ expected: 'Hello World', received: result })

console.log('CASE 2: cut the extract of sentence "I am Learing JavaScript, I am Learning JavaScript "')

var string = 'Hello World, I am Learning JavaScript.'

var result = slice(string, 11, 38)
console.log({ expected: 'I am Learning JavaScript', received: result })

console.log('CASE 3: cut the extract of sentence with negative index "I am Learing JavaScript, I am Learning JavaScript "')

var string = 'Hello World, I am Learning JavaScript.'

var result = slice(string, -25, -1)
console.log({ expected: 'I am Learning JavaScript', received: result })







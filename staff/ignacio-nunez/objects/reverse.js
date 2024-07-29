function reverse(object) {
    var iterations = Math.floor(object.length / 2)
    for (var i = 0; i < iterations; i++) {
        var element = object[i]

        object[i] = object[object.length - 1 - i]

        object[object.length - 1 - i] = element
    }

    return object
}

console.log('FUNCTION REVERSE')

console.log('CASE 1: reverse the tv series object')

var series = {
    0: 'Friends',
    1: 'The office',
    2: 'La que se avecina',
    3: 'Homeland',
    4: 'Los Simpsons',
    5: 'Futurama',
    6: 'American horror stories',
    7: 'The big bang theory',
    length: 8
}

var result = reverse(series)

console.log(result)
console.log(series)
console.log({ sameObjects: result === series })


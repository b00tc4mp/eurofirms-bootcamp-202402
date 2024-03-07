function reverse(object) {
    var objectCopy = { ...object}


for (var i=0; i< object.length; i++) {
    object[i] = objectCopy[object.length -1 -i]
}

return objectCopy

}

console.log('FUNCTION REVERSE')

console.log('CASE 1: reverse the tv series object')

var series = {
    0: 'Friends',
    1: 'The office',
    2: 'La que se avecina',
    3: 'Homeland',
    4: 'Los simpsons',
    5: 'Futurama',
    6: 'American horror stories',
    7: 'The big bang theory',
    lenght: 8
}

var result = reverse(series)
console.log (result)
console.log (series)
console.log ({sameObjects: result === series})


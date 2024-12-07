function mapElement(object, callback) {
    var result = []
    for (var i = 0; i < object.length; i++) {
        //calls the function print to add continente de to the property
        result[i] = callback(object[i])
    }
    return result
}
//function to add continente de to something
function print(something) {
    return 'continente de ' + something
}

var continents = {
    0: 'america del norte',
    1: 'america del sur',
    2: 'europa',
    3: 'africa',
    4: 'asia',
    5: 'australia',
    length: 6
}
console.log('CASE : map all the continents with callback')
var map = mapElement(continents, print)
console.log(map)

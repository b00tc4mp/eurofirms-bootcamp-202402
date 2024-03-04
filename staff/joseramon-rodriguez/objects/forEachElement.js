function forEachElement(object, callback) {
    for (var i = 0; i < object.length; i++) {
        callback(object[i])
    }

}
//function that prints somthing
function print(something) {
    console.log(something)
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
console.log('CASE : show all the continents with callback')
forEachElement(continents, print)

function filterElement(object, callback) {
    var result = { length: 0 }
    for (var i = 0; i < object.length; i++) {
        if (callback(object[i])) {
            result[result.length] = object[i]
            result.length++
        }
    }

    return result
}
//function that compares if the length is less than 5 characters
function lessThan5(something) {
    if (something.length < 5)
        return true
    else
        return false
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
console.log('CASE : filter all the america continents with callback by 4 characters or less')
var map = filterElement(continents, lessThan5)
console.log(map)
function joinElement(object, separator = ',') {//check if there is a separator, if not we take (',') as our separator by default
    var stringResult = ''

    //construct a string containing the values of the elements separated by our separator
    for (var i = 0; i < object.length; i++) {
        if (i !== object.length - 1)
            stringResult = stringResult + object[i] + separator
        // the last element of our string will never be followed by a separator, thats why the separator is not added to the string
        else
            stringResult = stringResult + object[i]
    }
    //return the string
    return stringResult

}
var elements = {
    0: 'fire',
    1: 'water',
    2: 'earth',
    3: 'air',
    length: 4

}
console.log('CASE 1: join elements with no separator attached')

console.log(joinElement(elements))
//expected result fire,water,earth,air

console.log('CASE 2: join elements with the separator /')

console.log(joinElement(elements, '/'))
//expected result fire/water/earth/air
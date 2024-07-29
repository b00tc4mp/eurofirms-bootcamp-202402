function indexOfElement(object, value, fromIndex = 0) {    //check if fromIndex exist. If undefined then fromIndex = 0

    // if (fromIndex === undefined)
    //     fromIndex = 0
    //if fromIndex exceeds the length of our object or is equal then we dont search in our object and -1 is returned
    if (fromIndex >= object.length)
        return -1
    //if fromIndex is negative we set fromIndex to start from the end bacakwards
    //if fromIndex is negative and is greater than the object length then we search in the whole object -> fromIndex = 0
    if (fromIndex < 0) {
        if (fromIndex < -object.length)
            fromIndex = 0
        else
            fromIndex = object.length + fromIndex
    }
    //check if fromIndex is valid inside our object

    for (var i = fromIndex; i < object.length; i++) {
        if (value === object[i])
            return i

    }
    //if value doesnt exist inside our object then return -1
    return -1



}

var elements = {
    0: 'fire',
    1: 'water',
    2: 'earth',
    3: 'air',
    4: 'fire',
    length: 5
}

console.log('CASE 1 : search in elements the first instance of fire with no start attached')

console.log(indexOfElement(elements, 'fire'))
//expected result -> 0

console.log('CASE 2 : search in elements the first instance of fire with start attached-> 3')

console.log(indexOfElement(elements, 'fire', 3))
//expected result -> 4

console.log('CASE 3 : search in elements the first instance of darkness with start attached-> 3')

console.log(indexOfElement(elements, 'darkness', 3))
// if the element doesnt exist in the object -1 is returned
//expected result -> -1

console.log('CASE 4 : search in elements the first instance of air with start attached-> -3')

console.log(indexOfElement(elements, 'fire', -3))
//function can search with negative index
//expected result -> 4

console.log('CASE 5 : search in elements the first instance of air with start attached-> -50')

console.log(indexOfElement(elements, 'fire', -50))
//function can search with negative index
//expected result -> 0

console.log('CASE 6 : search in elements the first instance of air with start attached-> 50')

console.log(indexOfElement(elements, 'fire', 50))
//function cant search if the start its at the end of the object or doesnt exist
//expected result -> -1
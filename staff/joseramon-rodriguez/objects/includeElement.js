function includeElement(object, value, fromIndex = 0) {//check if fromIndex exist. If undefined then fromIndex = 0

    // if (fromIndex === undefined)
    //     fromIndex = 0
    //if fromIndex exceeds the length of our object or is equal then we dont search in our object and false is returned
    if (fromIndex >= object.length)
        return false
    //if fromIndex is negative we set fromIndex to start from the end bacakwards
    //if fromIndex is negative and is greater than the object length then we search in the whole object -> fromIndex = 0
    if (fromIndex < 0) {
        if (fromIndex < -object.length)
            fromIndex = 0
        else
            fromIndex = object.length + fromIndex
    }
    //checks if the element is included in our object. we assume it doesnt exist by default

    //check fromIndex if undefined we start at object[0]
    //search into the object for a coincidence
    for (var i = fromIndex; i < object.length; i++) {
        if (object[i] === value)
            //return true if it exists
            return true
    }
    //return false if not
    return false
}


var cities = {
    0: 'Madrid',
    1: 'Barcelona',
    2: 'Valencia',
    3: 'Tokyo',
    4: 'Santiago',
    5: 'Manchester',
    6: 'Lima',
    7: 'Sevilla',
    length: 8
}

console.log('function includeElement')

console.log('CASE 1: return true when search for tokyo on the object cities')

var result = includeElement(cities, 'Tokyo')

console.log({ result })

console.log('CASE 2: return false when search for Liverpool on the object cities')

var result = includeElement(cities, 'Liverpool')

console.log({ result })

console.log('CASE 3: return false when search for Valencia on the object cities from index 6')

var result = includeElement(cities, 'Valencia', 6)

console.log({ result })

console.log('CASE 4: return true when search for Santiago on the object cities from index 3')

var result = includeElement(cities, 'Santiago', 3)

console.log({ result })

console.log('CASE 5: return true when search for Santiago on the object cities from index -3')

var result = includeElement(cities, 'Santiago', -3)

console.log({ result })

console.log('CASE 6: return true when search for Santiago on the object cities from index -6')

var result = includeElement(cities, 'Santiago', -6)

console.log({ result })

console.log('CASE 5: return true when search for Santiago on the object cities from index -33')

var result = includeElement(cities, 'Santiago', -33)

console.log({ result })

console.log('CASE 5: return true when search for Santiago on the object cities from index 33')

var result = includeElement(cities, 'Santiago', 33)

console.log({ result })
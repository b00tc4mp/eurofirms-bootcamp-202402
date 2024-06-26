function includes(object, value, fromIndex = 0) {
    for (var i = fromIndex; i < object.length; i++) {
        test = object[i]
        if (value == test) {
            return true

            // }else{verificator= true} 
        }
    }
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

var result = includes(cities, 'Tokyo')
console.log(result)

console.log('CASE 2 : return false when search for Liverpool on the object')
var result = includes(cities, 'Liverpool')
console.log(result)



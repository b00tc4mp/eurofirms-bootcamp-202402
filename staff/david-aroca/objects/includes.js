function includes(object, value, fromIndex) {

}


var cities = {
    0: 'Madrid',
    1: 'Barcelona',
    2: 'Valencia'
    3: 'Tokyo',
    4: 'Santiago',
    5: 'Manchester',
    6: 'Lima',
    7: 'Sevilla',
    length: 8
}

console.log('FUNCTION INCLUDES')

console.log('Case 1: return true when search for tokyo')

var result = includes(cities, 'Tokyo')

console.log({ result })

console.log('Case 2 :return false when search for Liverpool')
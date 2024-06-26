function indexOf(object, value) {
    for (var i = 0; i < object.length; i++) {
        if (value == object[i]) {
            return i
        }
    } return 'error there is not ' + value + ' in this object'
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

result = indexOf(cities, 'Barcelona')
console.log(result)

result = indexOf(cities, 'Badajoz')
console.log(result)
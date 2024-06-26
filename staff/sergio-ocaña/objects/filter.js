function filter(object, callback, value, filter) {
    filtered = { length: 0 }
    for (var i = 0; i < object.length; i++) {
        result = callback(object[i], value, filter)
        if (result) {
            filtered[filtered.length] = object[i]
            filtered.length++
        }
    } return filtered
}
var callback = function (element, value, filter) {

    if (typeof value === "number") {
        if (filter === "mayor") {
            if (element.length > value)
                return true

        }
        if (filter === "menor") {
            if (element.length < value)
                return true
        }
        if (filter === "igual") {
            if (element.length = value)
                return true
        }
        return false

    }
    if (typeof value === "string") {
        for (var j = 0; j <= value.length; j++) {
            if (element.charAt[j] !== value.charAt[j])
                return false
        }
    } else { return true }
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

var filteredCities = filter(cities, callback, 'Ma')
console.log(filteredCities)
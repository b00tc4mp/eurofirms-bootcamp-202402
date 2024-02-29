function join(object, value) {
    var phrase = "'"

    if (value === undefined)
        value = ','
    for (var i = 0; i < object.length; i++) {
        var string = object[i]

        if (i < object.length - 1)
            phrase = phrase + string + value
        else
            phrase = phrase + string + "'"

    }
    return phrase
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
var result = join(cities)
console.log(result)

var result = join(cities, '+')
console.log(result)
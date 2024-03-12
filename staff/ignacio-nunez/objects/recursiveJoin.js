function recursiveJoin(object) {
    // TODO add separator
    var result = ''
    for (var i = 0; i < object.length; i++) {
        if (object[i] === object) {
            result += ','
        }
        else if (object[i] instanceof Object) {
            result += recursiveJoin(object[i])
        } else {
            result += object[i]
        }
    }

    return result
}

var countries = {
    0: {
        0: {
            0: 'Chile',
            1: 'España',
            length: 2
        },
        1: {
            0: 'Colombia',
            1: 'Angola',
            length: 2
        },
        length: 2
    },
    1: {
        0: {
            0: 'Peru',
            1: 'Japon',
            length: 2
        },
        1: {
            0: 'Italia',
            1: 'China',
            length: 2
        },
        length: 2
    },
    length: 3
}

countries[2] = countries

var result = recursiveJoin(countries)

console.log(result)
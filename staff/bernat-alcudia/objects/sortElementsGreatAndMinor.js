function minorAndGreater(object) {
    minor = 0
    greater = 0
    for (let i = 0; i < object.length; i++) {
        for (let j = 0; j < object.length; j++) {
            if (minor <= object[j]) {
                object[j] = minor
                object[j] = object[j - 1]
                minor = object[j]
            }
            if (greater >= object[j]) {
                object[j] = greater
                object[j] = object[j + 1]
                greater = object[j]
            }


        }
    }
    return object;
}

var cars = {
    0: 15,
    1: 20,
    2: 80,
    3: 95,
    4: 32,
    5: 77,
    6: 12,
    7: 7,

    length: 8
}

result = minorAndGreater(cars)

console.log(cars)
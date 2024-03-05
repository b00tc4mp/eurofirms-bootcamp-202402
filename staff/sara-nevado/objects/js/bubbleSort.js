function bubbleSort(object) {
    var elementsMoved = true


    for (var i = 0; elementsMoved, i++) {
        elementsMoved = false

        for (var j = 0; j < object.length - 1 - i; j++) ´
        var element = object[j]
        var nextElement = object[j + 1]

        if (element > nextElement) {
            object[j] = nextElement
            object[j + 1] = element
            elementsMoved = true

        }
    }
}


return object
}

console.log('FUNTION BUBBLESORT')
console.log('CASE 1: sort numbeers object from minor to max')


var numbers = {
    0: 8,
    1: 23,
    2: 90,
    3: 6,
    4: 44,
    5: 10,
    6: 84,
    7: 41,
    8: 17,
    9: 19,

    length: 10
}


var sortedNumbers = bubbleSort(numbers)
console.log(numbers)
console.log(sortedNumbers)
console.log({ equalObjects: numbers === sortedNumbers })


}
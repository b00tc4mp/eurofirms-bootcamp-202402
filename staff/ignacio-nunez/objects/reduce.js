function reduce(object, callback, initialValue) {
    var result = initialValue
    var index = 0

    if (initialValue === undefined) {
        result = object[0]
        index = 1
    }

    for (var i = index; i < object.length; i++) {
        result = callback(result, object[i], i, object)
        //                  0       10  = 10
        //                  10      20  = 30
        //                  30      30  = 60
        //                  60      40  = 100
        //                  100     50  = 150
    }

    return result
}
// var result = reduce(numbers, function (totalAdd, number) {
//     return totalAdd + number
// }, 0)

console.log('FUNCTION REDUCE')

console.log('case 1: add numbers from array on one result with 0 as initial value')

var numbers = {
    0: 10,
    1: 20,
    2: 30,
    3: 40,
    4: 50,
    length: 5
}

var result = reduce(numbers, function (totalAdd, number) {
    return totalAdd + number
}, 0)

console.log(result) // 150

console.log('case 2: add numbers from array on one result with no initial value')

var result2 = reduce(numbers, function (totalAdd, number) {
    return totalAdd + number
})

console.log(result2) // 150

console.log('case 3: create an object array from an strings array')

var names = {
    0: 'pepito',
    1: 'wendy',
    2: 'grillo',
    3: 'peter',
    length: 4
}

var result3 = reduce(names, function (actualObject, name) {
    actualObject[actualObject.length] = { name }

    actualObject.length++

    return actualObject
}, { length: 0 })

console.log(result3)
// {
//     0: {name: 'pepito'},
//     1: {name: 'wendy'},
//     2: {name: 'grillo'},
//     3: {name: 'peter'},
//     length: 4
// }
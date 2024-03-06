

function reduce(object, callback, initialValue) {
    var result
    for (var i = 0; i < object.length; i++) {
        result = callback(result, object[i])
        //                0     10= 10
        //                0     20= 30
        //                0     30= 60
        //                0     40= 100
        //                0     50= 150           
    }

    return result
}

console.log('FUNCTION REDUCE')

console.log('case 1: add numbers from array on one result with 0 initial value')

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

console.log('case 1: add numbers from array on one result with 0 initial value')

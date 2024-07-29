// /**
//  * 
//  */
// function forEach(iterable, callback) {
//     for (var i = 0; i < iterable.length; i++) {
//         var element = iterable[i]

//         callback(element)
//     }
// }

// console.log(CASE 1: iterar en los numeros para multiplicar en la consola)

// var a = [10, 20, 30, 40, 50]

// forEach(nums, function (element {
//     console.log(element * 10)
// }))
// // 100
// // 200
// // 300
// // 400
// // 500

/**
 * Loops on each value from iterable object.
 */
function forEach(iterable, callback) {
    for (var i = 0; i < iterable.length; i++) {
        var element = iterable[i]

        callback(element)
    }
}

console.log('TEST forEach')

console.log('CASE 1: iterate on nums to show each one multiplied in the console')

var nums = {
    0: 10,
    1: 20,
    2: 30,
    3: 40,
    4: 50,
    length: 5
}

forEach(nums, function (element) {
    console.log(element * 10)
})
// 100
// 200
// 300
// 400
// 500

console.log('CASE 2: iterate on nums to put each one multiplied by 10 in a new array')

var nums = {
    0: 10,
    1: 20,
    2: 30,
    3: 40,
    4: 50,
    length: 5
}
var numsX10 = { length: 0 }

forEach(nums, function (element) {
    numsX10[numsX10.length] = element * 10
    numsX10.length++
})

console.log(numsX10)
// 100, 200, 300, 400, 500
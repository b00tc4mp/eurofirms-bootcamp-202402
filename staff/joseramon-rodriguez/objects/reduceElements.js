/**
 * function that will add all the numbers in nums with a callback function
 */
function reduceElements(object, callback, initialValue) {
    var result = initialValue === undefined ? object[0] : initialValue
    var aux = initialValue === undefined ? 1 : 0
    for (var i = aux; i < object.length; i++) {
        result = callback(result, object[i])
    }
    return result
}

function callback(accumulator, currentValue, currentIndex, object) {
    return currentValue + accumulator
}

var nums = {
    0: 1,
    1: 2,
    2: 3,
    3: 4,
    length: 4
}

console.log('CASE 1: add all the elements of nums without initialValue specified')
var case1 = reduceElements(nums, callback)
console.log(case1)
//expected result case1 = 10

console.log('CASE 2: add all the elements of nums with initialValue 10')
var case2 = reduceElements(nums, callback, 10)
console.log(case2)
//expected result case2 = 20
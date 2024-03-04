/**
 * 
 */
function forEach(iterable, callback) {
    for (var i = 0; i < iterable.length; i++) {
        var element = iterable[i]

        callback(element)
    }
}

console.log(CASE 1: iterar en los numeros para multiplicar en la consola)

var a = [10, 20, 30, 40, 50]

forEach(nums, function (element {
    console.log(element * 10)
}))
// 100
// 200
// 300
// 400
// 500
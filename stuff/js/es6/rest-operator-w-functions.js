/*
function add() {
    var nums = arguments

    var result = 0

    for (var i = 0; i < nums.length; i++) {
        var num = nums[i]

        result += num
    }

    return result
}
*/

function add(...nums) {
    var result = 0

    for (var i = 0; i < nums.length; i++) {
        var num = nums[i]

        result += num
    }

    return result
}


var r = add(10, 20, 30)
console.log(r)
// 60

var r = add(60, 50)
console.log(r)
// 110

var r = add(1.5, 3.5, 2.5, 4.5)
console.log(r)
// 12


// VM3578:31 60
// VM3578:35 110
// VM3578:39 12
// undefined
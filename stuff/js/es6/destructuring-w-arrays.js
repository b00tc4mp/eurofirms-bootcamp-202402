var a = [10, 20, 30]

/*
var x = a[0]
var y = a[1]
var z = a[2]
*/

// var { 0: x, 1: y, 2: z } = a

var [x, y, z] = a

console.log(x, y, z)
// VM3388: 13 10 20 30
// undefined
x
// 10
y
// 20
z
// 30
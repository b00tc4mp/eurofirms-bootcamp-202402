var o = {
    0: 10,
    1: 20,
    2: 30,
    length: 3
}

/*
var x = o[0]
var y = o[1]
var z = o[2]
*/

var { 0: x, 1: y, 2: z } = o

console.log(x, y, z)
// VM3380:16 10 20 30
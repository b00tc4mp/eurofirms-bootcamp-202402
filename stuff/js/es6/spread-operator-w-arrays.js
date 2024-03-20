var a = [10, 20, 30]

/*
var b = []
b[0] = a[0] 
b[1] = a[1] 
b[2] = a[2]
*/

var b = [...a]

console.log(b)
console.log(a === b)

// VM3002:5 (3) [10, 20, 30]
// VM3002:7 false
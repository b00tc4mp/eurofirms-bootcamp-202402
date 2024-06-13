function add(x, y, z) {
    return x + y + z
}

var o = {
    0: 10,
    1: 20,
    2: 30,
    length: 3
}

//var r = add(o[0], o[1], o[2]) // this works
var r = add(...o) // this doesn't work

console.log(r)

// VM3155:13 Uncaught TypeError: Spread syntax requires ...iterable[Symbol.iterator] to be a function
//     at <anonymous>:13:9
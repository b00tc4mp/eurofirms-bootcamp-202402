function add(x, y, z) {
    return x + y + z
}

var a = [10, 20, 30]

//var r = add(a[0], a[1], a[2])
var r = add(...a)

console.log(r)

// VM3151: 10 60
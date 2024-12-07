var a = [10, 20, 30]
var b = ['A', 'B', 'C']

/*
// imperative (imperates in how-to do the for-loop)
for (var i = 0; i < a.length; i++) {
    var n = a[i]

    console.log(n)
}
*/

// declarative (declares what-to do with each element, not how-to do the for-loop)
/*
a.forEach(function(n) {
    console.log(n)
})
*/

/*
a.forEach(function(n) {
    console.warn(n)
})
*/

function printWarn(value) {
    console.warn(value)
}

a.forEach(printWarn)
b.forEach(printWarn)


VM911: 25 10
printWarn @VM911: 25
    (anonymous) @VM911: 28
VM911: 25 20
printWarn @VM911: 25
    (anonymous) @VM911: 28
VM911: 25 30
printWarn @VM911: 25
    (anonymous) @VM911: 28
VM911: 25 A
printWarn @VM911: 25
    (anonymous) @VM911: 29
VM911: 25 B
printWarn @VM911: 25
    (anonymous) @VM911: 29
VM911: 25 C
printWarn @VM911: 25
    (anonymous) @VM911: 29
undefined
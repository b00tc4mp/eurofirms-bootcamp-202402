// CASE 1

function a() {
    console.log('evalua a')

    return false
}

function b() {
    console.log('evalua b')

    return false
}

a() && b()
// VM791:2 evalua a
// false


// CASE 2

function a() {
    console.log('evalua a')

    return false
}

function b() {
    console.log('evalua b')

    return true
}

a() && b()
// VM799:2 evalua a
// false


// CASE 3

function a() {
    console.log('evalua a')

    return true
}

function b() {
    console.log('evalua b')

    return false
}

a() && b()
// VM805:2 evalua a
// VM805:8 evalua b
// false


// CASE 4

function a() {
    console.log('evalua a')

    return true
}

function b() {
    console.log('evalua b')

    return true
}

a() && b()
// VM810: 2 evalua a
// VM810: 8 evalua b
// true
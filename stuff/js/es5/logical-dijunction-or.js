// CASE 1

function a() {
    console.log('evalua a')

    return false
}

function b() {
    console.log('evalua b')

    return true
}

a() || b()
// VM768:2 evalua a
// VM768:8 evalua b
// true


// CASE 2

function a() {
    console.log('evalua a')

    return true
}

function b() {
    console.log('evalua b')

    return false
}

a() || b()
// VM773:2 evalua a
// true


// CASE 3

function a() {
    console.log('evalua a')

    return true
}

function b() {
    console.log('evalua b')

    return true
}

a() || b()
// VM778:2 evalua a
// true


// CASE 4

function a() {
    console.log('evalua a')

    return false
}

function b() {
    console.log('evalua b')

    return false
}

a() || b()
// VM787: 2 evalua a
// VM787: 8 evalua b
// false
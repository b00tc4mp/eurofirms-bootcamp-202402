// const array1 = [5, 12, 8, 130, 44];

// const isLargeNumber = (element) => element > 13;

// console.log(array1.findIndex(isLargeNumber));
// // Expected output: 3

function findIndex(object, callback) {
    for (var i = 0; i < object.length; i++) {
        callback(object[i])
    }
    return i
}

var callback = function (element) {
    if (element === 'sun') {
        return true

    }
    return false
}

console.log('CASE1: FIND planet made with fire ')

var planets = {
    0: 'moon',
    1: 'earth',
    2: 'sun',
    3: 'mercury',
    4: 'jupiter',
    5: 'pluto',
    length: 6
}

console.log{ findIndex(planets, callback) }
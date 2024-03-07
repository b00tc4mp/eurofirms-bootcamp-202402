function every(object, callback) {
    for (var i = 0; i < object.length; i++) {
        if (!callback(object[i])) return false
    }

    return true
}



var nums = {
    0: 100,
    1: 200,
    2: 300,
    3: 400,
    4: 500,

    length: 5
}

console.log(every(nums, function (element) {
    return element > 200

}))

console.log(every(nums, function (element) {
    return element > 1

}))
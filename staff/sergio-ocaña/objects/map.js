function map(object, value) {
    result = {}
    for (i = 0; i < object.length; i++) {
        result[i] = callback(object[i], value)
    }
    result.length = object.length
    return result
}

function callback(propertyValue, value) {
    final = propertyValue * value
    return final
}

var nums = {
    0: 100,
    1: 3,
    2: 700,
    3: 400,
    4: 230,
    length: 5
}
nums2 = map(nums, 5)
console.log(nums2)
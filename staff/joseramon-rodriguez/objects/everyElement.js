function everyElement(object, callback) {
    var result = true
    for (var i = 0; i < object.length; i++) {
        if (!callback(object[i]))
            result = false
    }
    return result
}

function callback(element, index, object) {
    return element > 20
}

var nums = {
    0: 20,
    1: 33,
    2: 564456,
    3: 56,
    length: 4
}
console.log('CASE 1 : check if all the elements of nums are greater than 20 -> it should return false since there is a property that isnt greater than 20, nums[0]->20')
var case1 = everyElement(nums, callback)
console.log(case1)
console.log('CASE 2 : check if all the elements of nums are less than 66666666 -> it should return true since all the properties are less than 66666666')
var case2 = everyElement(nums, function (element) { return element < 66666666 })
console.log(case2)
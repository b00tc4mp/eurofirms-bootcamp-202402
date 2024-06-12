function findIndexElement(object, callback) {
    // la methodo findIndex develove el indice de element que cumple la condition requerida si no cumople de imgun element devolve -1

    indexFind = -1

    for (var i = 0; i < object.length; i++) {
        if (callback(object[i])) {
            // indexFind = i
            return i
        }
    }
    return indexFind
}

function callback(element, index, object) {
    return element < -33
}

var nums = {
    0: 33,
    1: -12,
    2: 0,
    3: 1354,

    length: 4
}

console.log('CASE 1: find the index that statisfies the following condition -> num < -33. it will return -1 because there is no matching nums for this condition ')

var nums2 = findIndexElement(nums, callback)
console.log(nums2)

console.log('CASE 2: find the index that satisfies the following condition -> num = 0. it will return 2 because there is a matching num for this condition nums[2]')
var nums3 = findIndexElement(nums, function (element) { return element === 0 })
console.log(nums3)

console.log('CASE 3: find the index that satisfies the following condition -> num > 0.it will return 0 beacause the first matching num for this condition is nums[0]')
var nums4 = findIndexElement(nums, function (element) { return element > 0 })
console.log(nums4)
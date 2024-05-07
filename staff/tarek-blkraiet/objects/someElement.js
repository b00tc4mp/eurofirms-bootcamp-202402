function someElement(object, callback){
    for(var i = 0; i< object.length; i++) {
        if(callback(object[i]))

        return true
    }
    return false
}
function callback(element) {
    return element % 2 === 0
}
var nums = {
    0: '1',
    1: '5',
    2: '7',
    3: '9',
    4:'4',
   
    length: 5
}
console.log('CASE 1: check if there are any even numbers in nums -> it should return true since there are some')
var case1 = someElement(nums, callback)
console.log(case1)

console.log('CASE 2: check if there are any numbers in nums that are greater than 6-> it should return false since there are not some')
var case2 = someElement(nums, function(element){ return element > 10})
console.log(case2)
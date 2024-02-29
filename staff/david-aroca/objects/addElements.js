// Adds one element to iterable objects

function addElement(object, element) {
    object.length++
    object[object.length - 1] = element
}
console.log('CASE 1: add a to chars')

var chars = {
    0: 'h',
    1: 'o',
    2: 'l',
    length: 3


}

addElement(chars, 'a')

console.log(chars)

console.log('CASE 2: add 500 to nums')

var nums = {
    0: 100,
    1: 200,
    2: 300,
    3: 400,

}
addElement(nums, 500)
console.log(nums)

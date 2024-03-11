//function sortElement(object) will sort the properties of an object from lowest to largest
/**
 * how it works:
 * it will check the property (x) next to it and compare to the next (y), if x is greater than y it will move x to the next spot and repeat until x is the greatest of the properties of the object.
 * this means that objects will be ordered from lower to greater at the end of the function
 */
function sortElement(object) {
    var somethingMoved = true //this will be used to verify if we moved a property, in order to keep checking if x > y
    for (var i = 0; somethingMoved; i++) { //the function will be comparing and moving values until we reach a point that we dont need to, this is tracked by somethingMoved
        somethingMoved = false
        for (var j = 0; j < object.length - 1 - i; j++) { //this will compare x and y, if x > y -> x value x will be move one property ahead and y will be left behind
            if (object[j] > object[j + 1]) {
                var objectToMove = object[j] // we store x before moving it to prevent it from losing x
                object[j] = object[j + 1]
                object[j + 1] = objectToMove
                somethingMoved = true // since we move a property we change somthingMoved to true to keep comparing x and y
            }
        }
    }
    return object
}

var nums = {
    0: 20,
    1: -3,
    2: 30,
    3: -6,
    length: 4
}
console.log('CASE 1 : sort nums')
console.log('nums sorted')
sortElement(nums)
console.log(nums)

/*
Expected result
nums ={
    0: -6,
    1: -3,
    2: 20,
    3: 30
    length: 4
}
*/
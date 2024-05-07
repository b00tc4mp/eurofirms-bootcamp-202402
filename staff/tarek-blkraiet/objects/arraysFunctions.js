var numbers = {
    '0': 20,
    '1': 30,
    '2': 40,
    '3': 50,
}
function push(object, element) {
    //The push() method of Array instances adds the specified elements to the END of an array 
    //and returns the new length of the array.


    // code that adds a new element
    var newIndex = object['length']
    object[newIndex] = element

    // code that modify the length
    object.length++

    // code that returns a value
    return object.length
}

function pop(object) {
    //The pop() method REMOVE  the last element and RETURNS that element. 
    //This method changes the length


    var lastIndex = object.length - 1

    //code that removes the last element

    var deletedElement = object[lastIndex]
    delete object[lastIndex]

    // code that modify the length
    object - length--
    // code that returns a value
    return deletedElement

}

// var numbers = {
// '0': 20, // 30
//'1': 30, // 40
//'2':40, // 50
//'3':50, // 50
// 'length': 4
//}

function shift(object) {
    // uso shift to remove the first element

    // var firstIndex = 0
    // code that removes the first elrement
    var deletedElement = object[0]
    // delete object[firstIndex]
    // code that modify the length


    // adjust and move the elements of the object
    // let newLength = object.length - 1

    for (let i = 0; i < object.length - 1; i++) {

        object[i] = object[i + 1]

    }
    object.length--
    // delete the last object because its no longer there
    delete object[object.length]

    // code that returs a value
    return deletedElement

}
// var numbers = {
// '0': 20, //0:20
//'1': 30, // 1:20
//'2':40, // 2:30
//'3':50, // 3:40
// 'length': 4 // 4:50
// length:5
//}

function unshift(object, value) {
    // unshift the mothdo de add news element and return new length

    // code that modify the length
    object.length++

    // adjust and move the element of the object
    // let newLength = object.length

    for (let i = object.lenght; i > 0; i--) {
        // let newIndex = 
        object[i] = object[i - 1]

    }

    // var firstIndex = 0
    // code that add to the first element
    // var deletedElement = object[0]
    object[0] = value

    // delete the last object because its no longer there

    delete object[object.length]
    // code that returns a value

    return object.length
}
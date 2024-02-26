// slice funcion returns a copy of the object selected from a start and end. 
//This function will not modify the original object
function sliceElement(object) {
    var positionStart = 0
    var positionEnd = 0
    arguments = sliceElement.arguments
    //check if there is a specified start and / or end and grab the values to operate with them positionStart and positionEnd
    if (arguments[1] <= 0 || arguments[1] >= 0) {
        positionStart = arguments[1]
    } else {
        positionStart = 0
    }
    if (arguments[2] <= 0 || arguments[2] >= 0) {
        positionEnd = arguments[2]
    } else {
        positionEnd = object.length
    }
    //if any of the positions are numbers the positions are treated as 0 and the whole object will be copied
    //check if the positions are good to create a copy of the object.
    var indexStart = positionStart
    var indexEnd = positionEnd
    switch (positionStart > 0) {
        case true:
            if (positionStart >= object.length) { //if the start is equal or greater than the object's length then nothing is returned
                return
            } else {
                indexStart = positionStart
            }
            break
        case false:
            if (positionStart === 0) {
                break
            }
            if (positionStart > -object.length) {
                indexStart = object.length + positionStart
            } else {
                break // if the negative start is greater than the object's length backwards then index start is 0 because it wont chage from the beggining //positionStart is still 0
            }
            break

    }
    // if the positions conditions are good to go we can get the indexes of the object to create the copy
    // negative values will get the index in reverse order positionEnd = -1 will be indexEnd = object.length - 1
    switch (positionEnd > 0) {
        case true:
            if (positionEnd >= object.length) { // if the end is equal or greater than  the object's length then we take the last property in order to copy the whole object
                indexEnd = object.length
            } else {
                indexEnd = positionEnd
            }
            break
        case false:
            if (positionEnd === 0) {
                break
            }
            if (positionEnd > -object.length) {
                indexEnd = object.length + positionEnd
            } else {
                break// if the backwards end is greater than the object's length then the end is set to 0 //positionEnd is still 0 because we never modified it yet
            }
            break
    }
    //if the end position is the same as the start position or its before the start position nothing is returned
    if (indexStart === indexEnd) {
        return
    } else if (indexEnd < indexStart) {
        return
    }
    // now that we got the indexes we can return the copy with the specified indexes
    var slicedElement = {
        length: 0
    }
    var numberOfOperations = indexEnd - indexStart
    for (var i = 0; i < numberOfOperations; i++) {
        var origin = object[indexStart + i]
        slicedElement[i] = origin
        slicedElement.length++
    }
    return slicedElement




}

var cars = {
    0: 'peugeot',
    1: 'ford',
    2: 'renault',
    3: 'audi',
    4: 'bmw',
    5: 'mercedez',
    6: 'bentley',
    7: 'ferrari',
    length: 8

}

console.log('CASE 1 : copy cars into cars2 by passing no start and end')

var cars2 = sliceElement(cars)

// var cars2 = {
//     0: 'peugeot',
//     1: 'ford',
//     2: 'renault',
//     3: 'audi',
//     4: 'bmw',
//     5: 'mercedez',
//     6: 'bentley',
//     7: 'ferrari',
//     length: 8

// }

console.log(cars2)
console.log(cars)

console.log('CASE 2: copy cars3 from cars from index 6 (start) to unspecified end')

var cars3 = sliceElement(cars, 6)
console.log(cars3)

/*
var cars3 = {
    0:'bentley',
    1:'ferrari',
    length:2
    }
*/
console.log('CASE 3: copy cars4 from cars from position - 3 (start) to position  -2 (end)')

var cars4 = sliceElement(cars, -3, -2)
console.log(cars4)

/*
var cars4 = {
    0:'mercedez',
    length:1
    }
*/

console.log('CASE 4: copy cars5 from cars from position 10 (start)->this returns nothing')

var cars5 = sliceElement(cars, 10)
console.log(cars5)

console.log('CASE 5: copy cars6 from cars from position 2 (start) to position 1(end) ->this return nothing')
var cars6 = sliceElement(cars, 2, 1)
console.log(cars6)



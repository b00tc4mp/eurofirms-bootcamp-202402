// slice function returns a copy of the object selected from a start and end
// this function will not modify the original object

function sliceElement(object) {
    var slicedElement = {
        length: 0
    }
    var positionStart = 0
    var positionEnd = object.length
    // check if there is a specified start and / or end and grab the values to operate with them positionStart and positionEnd
    if (arguments[1] <= 0 || arguments[1] >= 0) {
        positionEnd = arguments[1]
    }

    // else {
    // positionStart = 0
    //}
    // if any of the position are not numbers the positions are treated as 0 and the whole object will be copied
    // check if the positions are good to create a copy of the object
    // var indexStart = positionStart
    // var indexEnd = positionEnd

    switch (positionStart > 0) {
        case true:
            if (positionStart >= object.length) { // if true start is equal or greater than the object's length then nothing is returned
                return sliceElement

            }
            // else{
            // indexStart = positionStart
            //}

            break
        case false:
            if (positionStart === 0) {
                break
            }
            if (positionStart > -object.length) {
                positionStart = object.length + positionStart
            } else {
                break // if the negative start is greater than the object's length backwards then index start is 0 because if wont change from the the begging // positionStart is still 0
            }
            break
    }
    // if the position conditions are good to go we can get the indexes of the object to create the copy
    // negative value will get the index in reserve order positionEnd = -1 will be indexEnd = object.length
    switch (positionEnd > 0) {
        case true:
            if (positionEnd >= object.length) { // if the end is equal or greater than the object's length then we take the last property in order top copy the whole object
                positionEnd = object.length

            }
            // else {
            // indexEnd = positionEnd
            //}
            break

        case false:
            // if(positionEnd === 0){
            // break
            //}

            if (positionEnd > -object.length) {
                positionEnd = object.length + positionEnd
                // } else {
                // break // if the backwards end is greater than the object's length then the end is set to 0 // positionEnd is still 0 because we never modify it yet

            }
            break


    }
    // if the end position is the same as the start position or its before the startPosition nothing is returned
    if (positionStart === positionEnd) {
        return slicedElement
    }
    if (positionEnd < positionStart) {
        return slicedElement
    }
    // now that we got the indexes we can return the copy with the specified indexes

    var numberOfOperations = positionEnd - positionStart

    for (var i = 0; i < numberOfOperations; i++) {
        var origin = object[positionStart + i]
        slicedElement[i] = origin
        slicedElement.length++
    }

    return sliceElement
}

var mixWords = {
    0: 'papers',
    1: 'film',
    2: 'keyboard',
    3: 'phone',
    4: 'citroen',
    5: 'Volkswagen',
    6: 'Seat',
    7: 'table',
    8: 'bed',

    length: 9

}
console.log('CASE 1: copy cars into mixWords2 by passing no start and end')

var mixWords2 = sliceElement(mixWords)

/*  var mixWords = {
        0: 'papers',
        1: 'film',
        2: 'keyboard',
        3: 'phone',
        4:'citroen'
        5:'Volkswagen'
        6:'Seat'
        7: 'table',
        8: 'bed',
    
        length: 9
//} */

console.log(mixWords2)
console.log(mixWords)

console.log('CASE 2: copy mixWord3 from mixWords from index 6(start) to unspecified end')

var mixWords3 = sliceElement(cars, 6)
console.log(mixWords3)

/*

var mixWords3 = {
    0:'seat',
    1:'table',
    2:'bed',

    length:3
}
*/
console.log('CASE 3: copy mixWords4  from mixWords position -3(start) to position -2(end)')

var mixWords4 = sliceElement(mixWords, -2, 2)

console.log(mixWords4)

/*
var mixWords4 = {
    0:'seat',
    1:'table',

    length:2
}
*/
console.log('CASE 4: copy mixWords5 from mixWords from position 10(start)- > this returns an empty object ')

var mixWords5 = sliceElement(mixWords, 10)
console.log(mixWords5)

console.log('CASE 5: copy mixWords6 from mixWords from position 2 (start) to position 1(end) -> this return an empty object')
var mixWords6 = sliceElement(mixWords, 2, 1)
console.log(mixWords6)
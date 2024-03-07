var fruits = {
    0: 'apple',
    1: 'orange',
    2: 'strawberry',
    3: 'watermelon',
    4: 'pineapple',
    5: 'banana',
    6: 'lemon',
    7: 'tomato',
    length: 8
}


function sliceElements( object, start, stop) {
    var resultSlice = {length: 0}

    if(start < 0) {
        start = object.length-start
    }
    if (start > object.length) {
        start = object.length
    }
    if (stop < 0) {
        stop = object.length - stop
    }
    if (stop > object.length) {
        stop = object.length
    }


    for ( var  i = start; i < stop; i++ ) {
        resultSlice[i-start] = object[i]
        resultSlice.length++

    }
    return resultSlice
} 
sliceElements(fruits,2,6)

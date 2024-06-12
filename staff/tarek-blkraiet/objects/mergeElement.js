/*
Merge elements from iterable object to another iterable object at specified index 
*/

function mergeElements(object, index, objectToMerge) {
    // todo
    // move properties to make space for the new ones

    var elementsToInsert = objectToMerge.length

    for (var i = 0; i < elementsToInsert; i++) {
        var origin = object.length - 1 - i
        var destination = object.length - 1 + elementsToInsert - i
        object[destination] = object[origin]
    }

    // 
    for (var i = 0; i < elementsToInsert; i++) {
        var origin = objectToMerge[i]
        var destination = index + i
        object[destination] = origin
    }
    //
}

console.log('CASE1: inserts citroen, volkswagen and seat in mixWords at index 4')

var mixWords = {
    0: 'papers',
    1: 'film',
    2: 'keyboard',
    3: 'phone',
    4: 'table',
    5: 'bed',

    length: 6

}

var cars = {
    0: 'citroen',
    1: 'volkswagen',
    2: 'seat',

    length: 3
}

mergeElements(mixWords, 4, cars)

console.log(mixWords)

/*

var mixWords = {
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

}
*/
console.log(cars)

/*

{
    0:'citroen',
    1:'Volkswagen',
    2:'seat',

    length:34
}

*/
console.log('Case 2: add 250, 260, 270, 280, 290, in nums at index 3')

var nums = {
    0: 100,
    1: 200,
    2: 300,
    3: 400,
    4: 500,
    length: 5
}

var nums1 = {
    0: 250,
    1: 260,
    2: 270,
    3: 280,
    4: 290,

    length: 5
}
mergeElements(nums, 3, nums1)

console.log(nums)

/*

0:250,
1:260,
2:270,
3:250,
4:260,
5:270,
6:280,
7:290,
8:280,
9:290,

length:10

*/

console.log(nums1)

/**
0:250,
1:260,
2:270,
3:280,
4:290,

length:5
 */
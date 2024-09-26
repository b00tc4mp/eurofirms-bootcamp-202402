function mergeElements(object, index, objectToMerge) {
    // mover los elementos de object
    for (var i = object.length - 1; i >= index; i--) {
        object[i + objectToMerge.length] = object[i]
    }

    // introducir los elementos de objectToMerge en object
    for (var i = 0; i < objectToMerge.length; i++) {
        var mergeElement = objectToMerge[i]
        object[index + i] = mergeElement
    }

    object.length = object.length + objectToMerge.length
}

console.log('CASE 1: inserts banana, apple an orange in fruits at index 3')
var fruits = {
    0: 'pinne',
    1: 'watermelon',
    2: 'lemon',
    3: 'strawberry',
    4: 'kiwi',
    5: 'mango',
    length: 6
}

var fruits1 = {
    0: 'banana',
    1: 'apple',
    2: 'orange',
    length: 3
}
mergeElements(fruits, 3, fruits1)

console.log('CASE 2: inserts red, yellow and purple in fruits at index 3')
var colors = {
    0: 'pink',
    1: 'green',
    2: 'white',
    3: 'black',
    4: 'blue',
    5: 'orange',
    6: 'brown',
    length: 7
}

var colors1 = {
    0: 'red',
    1: 'yellow',
    2: 'purple',
    length: 3
}
mergeElements(colors, 3, colors1)
console.log(colors)
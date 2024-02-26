function slice(object, start, end) {
    var newobject = {};
    if (start === undefined)
        start = 0
    if (end === undefined)
        end = object.length
    if (start < 0)
        if (Math.abs(start) > object.length)
            start = 0
        else start = object.length + start
    if (end < 0)
        end = object.length + end - 1
    if (end > object.length)
        end = object.length - 1
    if (start > object.length)
        return newobject
    for (i = 0; i + start < end; i++) {
        newobject[i] = object[start + i]
    }
    return newobject
}

var animals = {
    0: "dog",
    1: "cat",
    2: "bird",
    3: "fish",
    4: "cocodrile",
    5: "elephant",
    6: "bear",
    7: "rabbit",
    8: "pig",
    9: "rat",
    length: 10
}
animals2 = slice(animals, 2, 6)
console.log(animals2)

var nums = {
    0: 100,
    1: 150,
    2: 200,
    3: 250,
    4: 300,
    length: 5
}
nums2 = slice(nums, -2, 5)
console.log(nums2)
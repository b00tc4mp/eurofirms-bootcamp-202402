var numbers = {
    0: 1,
    1: 33,
    2: 76,
    3: 44,
    4: 96,
    5: 39,
    6: 95,
    7: 100,
    length: 8
}
function biggerThan(element) {
     return element > 77

}
function findIndex(object, callback) {
    for (var i = 0; i < object.length; i++) {
       var number = object[i]
        if (callback(number)) {
            console.log(i)
            return i;
        }
    }
    return -1
}


findIndex(numbers, biggerThan)
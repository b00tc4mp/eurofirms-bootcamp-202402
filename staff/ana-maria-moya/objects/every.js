function every(object, callback) {
    for (i = 0; i < object.length; i++) {
        if (!callback(object[i])) return false
    }
    return true
}

var callback = function (element) {
    return element > 3

}







console.log('CASE1:comprobar si los elementos son > 3')

var food = {
    0: 'milk',
    1: 'meat',
    2: 'fish',
    3: 'potatoes',
    4: 'cake',
    length: 5
}
console.log(every(food, callback))
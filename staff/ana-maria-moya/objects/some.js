function some(object, callback) {
    for (i = 0; i < object.length; i++){
        if(callback(object[i]))
        return true
    }
    return false
}

var callback = function (element) {
    if (element === 'milk')
        return true

    return false
}


console.log('CASE1:COMPROBAR SI EXISTE QUE HAY BEBIDA EN MI OBJETO')
var food = {
    0: 'milk',
    1: 'meat',
    2: 'fish',
    3: 'potatoes',
    4: 'cake',
    length: 5
}
console.log(some(food, callback))
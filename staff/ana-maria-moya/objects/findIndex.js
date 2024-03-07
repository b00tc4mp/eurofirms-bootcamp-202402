

function findIndex(object, callback) {
    for (var i = 0; i < object.length; i++) {
        if (callback(object[i])) //==true
            return i
    }

}

var callback = function (element) {
    if (element === 'blue') {
        return true
    }
    return false

}

console.log('CASE1 : ENCONTRAR EL PRIMER ELEMENTO QUE CONTENGA BLUE Y QUE ME DEVUELVA EL INDEX DE ESE ELEMENTO')

var colors = {
    0: 'red',
    1: 'yellow',
    2: 'orange',
    3: 'blue',
    4: 'green',
    5: 'pink',
    length: 6
}
console.log(findIndex(colors, callback))

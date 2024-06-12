// la function devolve el primer element que cumple la condition si no cumple develove undefined
function findElement(object, callback) {
    var result = undefined

    // iterate the object to find a match with the callback

    for (var i = 0; i < object.length; i++) {
        var element = object[i]
        if (callback(element)) {
            result = element
            return result
        }
    }
    return result
}

// the callback will return true if element satisfy with the condition

function find(element, index, object) {
    return element === 'Maroco'
}

var worlds = {
    0: 'Palastine',
    1: 'tunez',
    2: 'peña',
    3: 'Maroco',
    4: 'naranja',
    5: 'España',
    6: 'Baja',
    length: 7
}
console.log('case 1 : find the world Maroco with callback inside the worlds')
var Maroco = findElement(worlds, find)
console.log(Maroco)


console.log('case 2: find the Luxemburg with callback inside the worlds')
var Luxemburg = findElement(worlds, function (element) { return element === 'Luxermburg' })

console.log(Luxemburg)
console.log('removeLastElement')

function removeLastElement(object){
    //object -> {0: 'h', 1: 'o', 2: 'l', length: 3}
    object.length--
    var element = object[object.length]
    delete object[object.length]
    return element
}
console.log(removeLastElement)

var characters = {
    0:'h',
    1:'o',
    2:'l',

    length:3
}
var lastCharacter = removeLastElement(characters)

console.log(lastCharacter)

console.log('case2: remove mandarina from fruits')
var fruits = {
    0:'tomate',
    1:'banana',
    2:'apple',
    3:'watermelon',
    4:'orange',
    5:'mandarina',
    length: 6
}
var lastFruit = removeLastElement(fruits)
console.log(lastFruit)
console.log(fruits)
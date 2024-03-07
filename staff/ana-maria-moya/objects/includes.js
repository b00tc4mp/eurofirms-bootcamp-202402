function includes(object, value) {
    for (var i = 0; i < object.length; i++) {
    if(object[i]===value)
    return true
    }
return false
}

var food = {
    0: 'fish',
    1: 'meat',
    2: 'patatoe',
    3: 'tomatoe',
    4: 'pasta',
    5: 'cake',
    6: 'cereals',
    7: 'bread',
    length: 8
}
console.log('CASE1: comprobar si existe la propiedad pasta')
includes(food, 'pasta')
var result = includes(food, 'pasta')
console.log(result)
console.log(food)
console.log('CASE2: comprobar si existe la propiedad strawberry')
includes(food, 'strawberry')
var result2 = includes(food, 'strawberry')
console.log(result2)

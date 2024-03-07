function indexOf(object, value) {
    for (var i = 0; i < object.length; i++) {
        if (object[i] === value)
            return value
         }
         return -1   
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
console.log('CASE1: indicar el indice del elemento cake')

var result = indexOf(food, 'cake')

console.log(result)
console.log(food)

var colors = {
    0: 'red',
    1: 'orange',
    2: 'blue',
    3: 'green',
    4: 'grey',
    5: 'black',
    6: 'purple',
    7: 'white',
    length: 8
}
console.log('CASE2: retorna -1 cuando no encuentra el elemento')

var result = indexOf(colors, 'yellow')

console.log(result)
console.log(colors)

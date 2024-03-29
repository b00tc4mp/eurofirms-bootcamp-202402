var Carray = require('./Carray')

console.log('TEST Carray')

console.log('> constructor')

console.log('CASE construct an instance without elemnt')

var c = new Carray

console.log(c)
//Carray { length: 0}

console.log('CASE constructor an instance with number elements')

var c = new Carray(10, 20, 30)

console.log(c)
// Carray {0:10, 1: 20, 2: 30, length: 3}

console.log('CASE construct an instance with string elemnts')

var c = new Carray('Ana', 'Adrian', 'Javier', 'Sergio', 'Bernat', 'Maite', 'Sara')

console.log(c)
// Carray {0:'Ana, 1: 'Adrian', 2:'Javier', 3: 'Sergio', 4:'Bernat', 5:'Maite', 6:'Sara', length:7}

console.log('< forEach')

console.log('CASE iterates an instance with number elemnts')

var c = new Carray(10, 20, 30)

c.forEach(function (element) {
    console.log(element)
})
// 10
// 20
// 30

console.log('CASE iterates an instance with string to upper-case')

var c = new Carray(10, 20, 30)

c.forEach(function (element) {
    console.log(element)
})
//10
//20
//30

console.log('CASE iterate an instance with string to upper-case')

var names = new Carray('Ana', 'Adrian', 'Javier', 'Sergio', 'Bernat', 'Maite', 'Sara')

names.forEach(function (element) {
    console.log(element.toUpperCase())
})

// ANA
// ADRIAN
// JAVIER
// SERGIO
// BERNAT
// MAITE
// SARA

console.log('> find')

console.log('CASE find person with age 20')

var people = new Carray(
    { name: 'Peter', age: 30 },
    { name: 'Wendy', age: 25 },
    { name: 'James', age: 20 },
    { name: 'Campa', age: 15 }
)

var person = people.find(function (person) {
    return person.age === 20
})
console.log(person)
// { name: 'James' age: 20}

console.log('> map')

console.log('CASE maps products from cart to subtotals')

var cart = new Carray(
    { name: 'Socks Adidas', prince: 20, quantity: 2 },
    { name: 'Nike Air max', prince: 80, quantity: 1 },
    { name: 'Shorts Puma', prince: 30, quantity: 24 }
)

var subtotals = cart.map(function (product) {
    return product.price * product.quantity
})

console.log(subtotals)
// Carray {0: 40, 1: 80, 2: 90, 3:280, length: 4}

console.log('CASE maps names to upper-case')

var names = new Carray('Ana', 'Adrian', 'Javier', 'Sergio', 'Bernat', 'Maite', 'Sara')

var namesInUpperCase = names.map(function (name) {
    return name.toUpperCase()
})

console.log(namesInUpperCase)
// Carray { 0: 'ANA', 1: 'ADRIAN', 2: 'JAVIER', 3: 'SERGIO', 4: 'BERNAT', 5: 'MAITE, 6: 'SARA', length: 7 }

console.log('< push')

console.log('CASE añade un nuevo elemento que es 40 al final del objeto')

var c = new Carray(10, 20, 30)

c.push(40)
console.log(c)

// Carray {0: 10, 1:20, 2:30, 3:40, length:5}

console.log('< every')
console.log('CASE comprobar si los elementos son mayores 4')
var c = new Carray('Ana', 'Adrian', 'Javier', 'Sergio', 'Bernat', 'Maite', 'Sara')

var name = c.every(function (element) {
    return element.length > 4
}) 
console.log(name)

// console.log('< removefirstElement')
// console.log('CASE quitar el primer elemento que seria "Ana"')
// var c = new Carray('Ana', 'Adrian', 'Javier', 'Sergio', 'Bernat', 'Maite', 'Sara')

// c.shift(firstElemnt)
// console.log(c)

console.log('< filter')
console.log( 'CASE1: filtrar los elementos que sean > 4')
var names = new Carray('Ana', 'Adrian', 'Javier', 'Sergio', 'Bernat', 'Maite', 'Sara')
var namesFiltered= names.filter(function(element){
    return element.length > 4
})
console.log(namesFiltered)
//RESULT: [ 'Adrian', 'Javier', 'Sergio', 'Bernat', 'Maite', length:5]
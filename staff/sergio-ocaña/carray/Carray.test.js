var Carray = require('./Carray')

console.log('Test Carray')

console.log('> constructor')

console.log('CASE construct an instance without elements')

var c = new Carray

console.log(c)
//Carray{length:0}

console.log('CASE construct an instance with elements')
var c = new Carray(10, 20, 30)
//Carray {0:10, 1:20, 2:30, length:3}

console.log('CASE construct an instance with string elements')

var c = new Carray('Ana', 'Adrian', 'Javier', 'Sergio', 'Bernat', 'Maite', 'Sara')
console.log(c)

console.log('> forEach')

console.log('CASE iterates an instance with number elements')

var c = new Carray(10, 20, 30)

c.forEach(function (element) {
    console.log(element)
})

var c = new Carray('Ana', 'Adrian', 'Javier', 'Sergio', 'Bernat', 'Maite', 'Sara')

c.forEach(function (element) {
    console.log(element.toUpperCase())
})

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

console.log('>map')

var cart = new Carray(
    { name: 'Socks Adidas', price: 20, quantity: 2 },
    { name: 'Nike Air Max', price: 80, quantity: 1 },
    { name: 'Shorts Puma', price: 30, quantity: 3 },
    { name: 'Glasses Ray Ban', price: 70, quantity: 4 }

)

var subtotals = cart.map(function (product) {
    return product.price * product.quantity
})

console.log(subtotals)

var c = new Carray('Ana', 'Adrian', 'Javier', 'Sergio', 'Bernat', 'Maite', 'Sara')

var namesInUpperCase = c.map(function (names) {
    return names.toUpperCase()
})

console.log(namesInUpperCase)

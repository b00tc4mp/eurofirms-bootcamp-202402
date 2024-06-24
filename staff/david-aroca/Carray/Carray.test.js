var Carray = require('./Carray')

console.log('TEST Carray')

console.log('> constructor')

console.log('CASE construct an instance without element')

var c = new Carray

console.log(c)
// Carray (length: 0)

console.log('CASE constructor an instance with number elements')

var c = new Carray(10, 20, 30)

console.log(c)
//Carray { 0:10, 1: 20, 2: 30, length: 3}

console.log('CASE constructs an instance with string elements')

var c = new Carray('Ana', 'Adrian', 'Javier', 'Sergio', 'Bernar', 'Maite', 'Sara')

console.log(c)
// Carray {0: 'Ana', 1: 'Adrian, 'Javier', 'Sergio', 'Bernat', 'Maite', 'Sara', length 7

console.log('> forEach')

console.log('CASE  iterates an instance with number elements')

var c = new Carray(10, 20, 30)

c.forEach(function (element) {
    console.log(element)
})
// 10
// 20
// 30

console.log('CASE iterates an instance with string to upper-case')

var c = new Carray('Ana', 'Adrian', 'Javier', 'Sergio', 'Bernat', 'Maite', 'Sara')

c.forEach(function (element) {
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
// { name: 'James', age: 20}

console.log('> map')

console.log('CASE maps products from cart to subtotals')

var cart = new Carray(
    { name: 'Socks Adidas', price: 20, quantity: 2 },
    { name: 'Nike Air Max', price: 80, quantity: 1 },
    { name: 'Shorts Puma', price: 30, quantity: 4 },
)

var subtotals = cart.map(function () {
    return product.price * product.quantity
})

console.log(subtotals)
//Carray { 0:40, 1:80, 2:90, 3:200, length: 4}

console.log('CASE maps names to upper-case')

var names = new Carray('Ana', 'Adrian', 'Javier', 'Sergio', 'Bernat', 'Maite', 'Sara')

var namesinUpperCase = names.map(function (name) {
    return name.toUpperCase()
})

console.log(namesinUpperCase)
// Carray {0: 'ANA', 1: 'ADRIAN', 2: 'JAVIER', 3 'SERGIO', 4: 'BERNAT', 5: 'MAITE', 6: 'SARA', lentgh: 7}


console.log('CASE find the names whith (A)')

var names = new Carray('Ana', 'Adrian', 'Javier', 'Sergio', 'Bernat', 'Maite', 'Sara')

var nanesWithA = names.find(function(name){
    return name.includes('a')
})

console.log(namesinUpperCase)


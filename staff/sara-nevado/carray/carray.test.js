var Carray
console.log('TEST Carray')

console.log('>constructor')

console.log('CASE construct an instance without elements')

var c = new Carray

console.log(c)
//carray { length: 0}

console.log('CASE construct an instance with elements')

var c = new Carray(10, 20, 30)

console.log(c)
//carray {0: 10, 1: 20, 2: 30, length: 3}



//forEach

console.log('forEach')

console.log('CASE iterantes an instance with number elements')

var c = new Carray(10, 20, 30)

c.forEach(function (element) {
    console.log(element)
})



console.log('CASE iterates an instance with strings to upper-case')

var c = Carray('Ana', 'Adrian', 'Javier', 'Sergio', 'Bernat', 'Maite', 'Sara')
c.forEach(function (element) {
    console.log(element.toUpperCase())
})

//find

console.log('find')

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
// { name: 'James', age: 20 }


console.log('> map')

console.log('CASE maps products from cart to subtotals')

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
// Carray { 0: 40, 1: 80, 2: 90, 3: 280, length: 4 }

console.log('CASE maps names to upper-case')

var names = new Carray('Ana', 'Adrian', 'Javier', 'Sergio', 'Bernat', 'Maite', 'Sara')

var namesInUpperCase = names.map(function (name) {
    return name.toUpperCase()
})

console.log(namesInUpperCase)
// Carray { 0: 'ANA', 1: 'ADRIAN', 2: 'JAVIER', 3: 'SERGIO', 4: 'BERNAT', 5: 'MAITE', 6: 'SARA', length: 7 }




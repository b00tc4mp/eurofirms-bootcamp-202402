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




// usando el find, encuentra el primer numero mayor a 20

var numbers = [10, 20, 30, 40, 50, 60]
var caseOne = numbers.find(function(element){
    return element > 20
})
console.log(caseOne)

// --------------------------------------------------

// encuentra el primer string que contenga una 'u'

var strings = ['hola', 'mundo', 'a', 'todos']
var caseTwo = numbers.find(function(element){
    return element.includes('u')
})
console.log(caseTwo)

// --------------------------------------------------

// encuentra el primer numero impar

var numbers2 = [12, 40, 6, 7, 13]
var caseThree = numbers2.find(function(element) {
    return element % 2 !== 0
});
console.log(caseThree)

// --------------------------------------------------

// encuentra el usuario con email 'wendy@darling.com'

var users = [
    { name: 'pepito', email: 'pepito@grillo.com' },
    { name: 'wendy', email: 'wendy@darling.com' },
    { name: 'peter', email: 'peter@pan.com' },
    { name: 'pinocho', email: 'pin@ocho.com' },
]
var caseFour = users.find(function(element) {
    return element.email === 'wendy@darling.com'
});
console.log(caseFour)

// --------------------------------------------------

// encuentra el usuario con la ciudad 'Barcelona'

var users2 = [
    {
        name: 'pepito', information: {
            city: 'Madrid',
            number: '65787959'
        }
    },
    {
        name: 'wendy', information: {
            city: 'Barcelona',
            number: '7869406'
        }
    },
    {
        name: 'peter', information: {
            city: 'Sevilla',
            number: '78795040'
        }
    },
    {
        name: 'pinocho', information: {
            city: 'Valencia',
            number: '57694068'
        }
    }
]
var caseFive = users2.find(function(element) {
    return element.information.city === 'Barcelona'
})
console.log(caseFive)
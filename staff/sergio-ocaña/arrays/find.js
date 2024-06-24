var numbers = [10, 20, 30, 40, 50, 60]
//numero mayor 20
console.log(numbers.find(function (x) { return x > 20 }))


var strings = ['hola', 'mundo', 'a', 'todos']
// contenga una u
console.log(strings.find(function (x) { return x.includes('u') }))

//encuentra el primer numero impar
var numbers2 = [12, 40, 6, 7, 24]


//encuentra el usuario con email 'wendy@darling.com'

var users = [
    { name: 'pepito', email: 'pepito@grillo.com' },
    { name: 'wendy', email: 'wendy@darling.com' },
    { name: 'peter', email: 'peter@pan.com' },
    { name: 'pinocho', email: 'pin@ocho.com' },
]
console.log(users.find(function (x) { return x.email === 'wendy@darling.com' }))

// encuentra usuario con la ciudad 'Barcelona' 
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
            number: '657694068'
        }
    }
]
console.log(users2.find(function (x) { return x.information.city === 'Barcelona' }))
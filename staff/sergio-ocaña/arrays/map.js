var numbers = [10, 20, 30, 40, 50, 60]
// numeros*2
console.log(numbers.map(function (x) { return x * 2 }))
console.log(numbers)

var strings = ['hola', 'mundo', 'a', 'todos']
// longitud strings
console.log(strings.map(function (x) { return x.length }))

//resto cada uno de los numeros entre 2
var numbers2 = [12, 40, 6, 7, 24]
console.log(numbers2.map(function (x) { return x % 2 }))

//que contengan los emails de los usuarios

var users = [
    { name: 'pepito', email: 'pepito@grillo.com' },
    { name: 'wendy', email: 'wendy@darling.com' },
    { name: 'peter', email: 'peter@pan.com' },
    { name: 'pinocho', email: 'pin@ocho.com' },
]

console.log(users.map(function (x) {
    return x.email
}))
// que contenga la ciudad 
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
console.log(users2.map(function (x) { return x.information.city }))
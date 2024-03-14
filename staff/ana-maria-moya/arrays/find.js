var numbers = [10, 20, 30, 40, 50, 60]
var found = numbers.find(function (number) {
    return number > 20
})
console.log(found)
// encuentra el primer 
var strings = ['hola', 'mundo', 'a', 'todos']
//crea un nuevo array, con el resto de 2 de cada uno de los numeros
var numbers2 = [12, 40, 6, 7, 24]
//crea un nuevo array. que contenga los emails de los usuarios como string
var users = [
    { name: 'pepito', email: 'pepito@grillo.com' },
    { name: 'wendy', email: 'wendy@darling.com' },
    { name: 'peter', email: 'peter@pan.com' },
    { name: 'pinocho', email: 'pin@ocho.com' }
]

// crea un nuevo array, que contenga la ciudad de los ususarios como string
var user2 = [
    {
        name: 'pepito', information: {
            city: 'Madrid',
            number: '6578759'
        }
    },
    {
        name: 'wendy', information: {
            city: 'Barcelona',
            number: '6869406'
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
            city: 'Vaencia',
            number: '57694068'
        }
    },
]

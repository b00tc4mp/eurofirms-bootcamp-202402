// usando el map, crea un nuevo array, con cada uno de los numeros multiplicado por 2

var numbers = [10, 20, 30, 40, 50, 60]

var numbersx2 = numbers.map(function (number) {
    return number * 2
})

console.log(numbersx2)

// --------------------------------------------------

// crea un nuevo array, con la longitud de cada uno de los strings

var strings = ['hola', 'mundo', 'a', 'todos']

// --------------------------------------------------

// crea un nuevo array, con el resto de 2 de cada uno de los numeros

var numbers2 = [12, 40, 6, 7, 24]

// --------------------------------------------------

// crea un nuevo array, que contenga los emails de los usuarios como string

var users = [
    { name: 'pepito', email: 'pepito@grillo.com' },
    { name: 'wendy', email: 'wendy@darling.com' },
    { name: 'peter', email: 'peter@pan.com' },
    { name: 'pinocho', email: 'pin@ocho.com' },
]

var emails = users.map(function (user) {
    return user.email
})

console.log(emails)

// --------------------------------------------------

// crea un nuevo array, que contenga la ciudad de los usuarios como string

var users2 = [
    {
        name: 'pepito',
        information: {
            city: 'Madrid',
            number: '65787959'
        }
    },
    {
        name: 'wendy',
        information: {
            city: 'Barcelona',
            number: '7869406'
        }
    },
    {
        name: 'peter',
        information: {
            city: 'Sevilla',
            number: '78795040'
        }
    },
    {
        name: 'pinocho',
        information: {
            city: 'Valencia',
            number: '57694068'
        }
    }
]

var cities = users2.map(function (user) {
    return user.information.city
})

// var cities = users2.map(user => user.information.city)

console.log(cities)

// var myFunction = () => { }
// var myFunction2 = function () { }

var arrowFunction = () => 'hola'
// usando el find, encuentra el primer numero mayor a 20

var numbers = [10, 20, 30, 40, 50, 60]

var findNumber = numbers.find(function(number){
    return number > 20
}
)

console.log (findNumber) // received: 30



// --------------------------------------------------

// encuentra el primer string que contenga una 'u'

var strings = ['hola', 'mundo', 'a', 'todos']

var stringChar = strings.find(function (string) {
    return string.includes('u')

})
 console.log (stringChar) // received: mundo


// --------------------------------------------------

// encuentra el primer numero impar

var numbers2 = [12, 40, 6, 7, 13]

var numberImpar = numbers2.find(function(number2){
    return number2 % 2 !== 0 
})

console.log (numberImpar) // receive : 7

// --------------------------------------------------

// encuentra el usuario con email 'wendy@darling.com'

var users = [
    { name: 'pepito', email: 'pepito@grillo.com' },
    { name: 'wendy', email: 'wendy@darling.com' },
    { name: 'peter', email: 'peter@pan.com' },
    { name: 'pinocho', email: 'pin@ocho.com' },
]

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
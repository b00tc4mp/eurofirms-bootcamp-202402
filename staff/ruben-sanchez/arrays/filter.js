// usando el filter, crea un nuevo array, 
// que contenga los numeros impares

var numbers2 = [0, 12, 5, 40, 6, 7, 24, 13, 21]
var newArray = numbers2.filter(function(x) {
    return x % 2 !== 0
   
     
 })
 console.log(newArray)
// --------------------------------------------------

// crea un nuevo array con los elementos que tienen 2 palabras

var strings = ['hola mundo', 'pepito', 'hello world to the people', 'todos']
var newArray2 = strings.filter(function (string){
    return string.split(' ').length === 2
})
console.log(newArray2)

// --------------------------------------------------

// crea un nuevo array que contenga los numeros con dos digitos

var numbers = [100, -20, 3, -200, 50, 8, -5]
var lengthPlus = numbers.filter(function(x){
   return  x> 9 || x < -9
})
console.log(lengthPlus)
// --------------------------------------------------

// crea un nuevo array, con los usuarios cuyo nombre empiece con p

var users = [
    { name: 'pepito', email: 'pepito@grillo.com' },
    { name: 'wendy', email: 'wendy@darling.com' },
    { name: 'topa', email: 'to@pa.com' },
    { name: 'peter', email: 'peter@pan.com' },
    { name: 'pinocho', email: 'pin@ocho.com' },
]
var usersP = users.filter(function(string){
   return string.name[0] === 'p'
})
console.log(usersP)
// --------------------------------------------------

// crea un nuevo array, que contenga los usuarios Barcelona

var users2 = [
    {
        name: 'pepito', information: {
            address: {
                city: 'Madrid',
                street: 'Gran via'
            },
            number: '65787959'
        }
    },
    {
        name: 'wendy', information: {
            address: {
                city: 'Barcelona',
                street: 'Diagonal'
            },
            number: '66575846'
        }
    },
    {
        name: 'peter', information: {
            address: {
                city: 'Sevilla',
                street: 'bakeer street'
            },
            number: '78795040'
        }
    },
    {
        name: 'topa', information: {
            address: {
                city: 'Barcelona',
                street: 'Reina Amalia'
            },
            number: '565768564'
        }
    },
    {
        name: 'pinocho', information: {
            address: {
                city: 'Valencia',
                street: 'siempre viva'
            },
            number: '57694068'
        }
    }
]
var finalResult = users2.filter(function(string){
    return string.information.address.city === 'Barcelona'
})
console.log(finalResult)
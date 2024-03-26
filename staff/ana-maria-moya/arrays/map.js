//usando el map, crean un nuevo array, con cada uno de los numeros multiplicando por 2
var numbers = [10, 20, 30, 40, 50, 60]
var numberx2 = numbers.map(function(x){
    return x * 2
})
console.log(numberx2)
// crea un nuevo array, con la longitud de cada uno de los strings
var strings = ['hola', 'mundo', 'a', 'todos']
var array = strings.map(function(string){
    return string.length
})
console.log(array)
//crea un nuevo array, con el resto de 2 de cada uno de los numeros
var numbers2 = [12, 40, 6, 7, 24]
//crea un nuevo array. que contenga los emails de los usuarios como string
var users = [
    {name: 'pepito', email: 'pepito@grillo.com'},
    {name: 'wendy', email: 'wendy@darling.com'},
    {name: 'peter', email: 'peter@pan.com'},
    {name: 'pinocho', email: 'pin@ocho.com'}
]
var emails = users.map(function(users){
    return users.name
})
console.log(emails)
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
            city:'Barcelona',
            number: '6869406'
        }
    },
    {
        name: 'peter', information: {
            city:'Sevilla',
            number: '78795040'
        }
    },
    {
        name: 'pinocho', information: {
            city:'Vaencia',
            number: '57694068'
        }
    },
]
var cities = user2.map(function(user){
    return user.information.city
})
console.log(cities)
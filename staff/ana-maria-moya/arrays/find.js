var numbers = [10, 20, 30, 40, 50, 60]
var found = numbers.find(function (number) {
    return number > 20
})
console.log(found)
// encuentra el primer string que contenga una 'u'

var strings = ['hola', 'mundo', 'a', 'todos']
 var found = strings.find(function(string){
    return string.includes('u')
})
 console.log(found)
// --------------------------------------------------

// encuentra el primer numero impar

var numbers2 = [12, 40, 6, 7, 13]

// --------------------------------------------------

// encuentra el usuario con email 'wendy@darling.com'

var users = [
    { name: 'pepito', email: 'pepito@grillo.com' },
    { name: 'wendy', email: 'wendy@darling.com' },
    { name: 'peter', email: 'peter@pan.com' },
    { name: 'pinocho', email: 'pin@ocho.com' },
]
var found = users.find(function(user){
    return user.email.includes('wendy@darling.com')

})
console.log(found)
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
var found = users2.find(function(name){
    return name.information.city.includes('Barcelona')
})
console.log(found)
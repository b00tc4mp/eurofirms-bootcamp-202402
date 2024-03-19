// usando el indexOf, encuenta el numero 30
// ahora usando el splice, borralo

var numbers = [10, 20, 30, 40, 50, 60]
var numIndex = numbers.indexOf(30)
numbers.splice(numIndex, 1)

// usando el findIndex encuenta al usuario con el id 'g48ge5g' y borralo

var users = [
    { id: 'fdg5t5t', name: 'pepito', email: 'pepito@grillo.com', saved: ['5hg75', '4huehet', 'ghueghu5e'] },
    { id: 'g48ge5g', name: 'wendy', email: 'wendy@darling.com', saved: ['gjk5g54', 'engljeg'] },
    { id: '5t45e5i', name: 'peter', email: 'peter@pan.com', saved: ['grghejh4', '4tw4hj4', 'f4jkg4g', 'f4wfjw4f'] },
    { id: 'djn5gje', name: 'pinocho', email: 'pin@ocho.com', saved: [] },
]
var userIndex = users.findIndex(function (user) { user.id === 'g48ge5g' })
users.splice(userIndex, 1)

// borra numeros impares

var numbers2 = [12, 3, 40, 6, 7, 43, 13, 24, 5]
var impares = numbers2.filter(function (num) { return num % 2 === 1 })
impares.forEach(function (impar) {
    var index = numbers2.indexOf(impar)
    numbers2.splice(index, 1)
})
console.log(numbers2)
// borra usuarios cuyo nombre empiece con 'pe'

var users = [
    { id: 'fdg5t5t', name: 'pepito', email: 'pepito@grillo.com', saved: ['5hg75', '4huehet', 'ghueghu5e'] },
    { id: 'g48ge5g', name: 'wendy', email: 'wendy@darling.com', saved: ['gjk5g54', 'engljeg'] },
    { id: '5t45e5i', name: 'peter', email: 'peter@pan.com', saved: ['grghejh4', '4tw4hj4', 'f4jkg4g', 'f4wfjw4f'] },
    { id: 'djn5gje', name: 'pinocho', email: 'pin@ocho.com', saved: [] },
]

// var peUsers = users.filter(function (user) { return user.name.startsWith('pe') })
// peUsers.forEach(function () {
//         indexPeUser = users.findIndex(function (user) {
//             return user.name.startsWith('pe')
//         })
//     })
//   
//     users.splice(indexPeUser, 1)
// })
// console.log(users)


var peUsers = users.filter(function (user) { return !user.name.startsWith('pe') })
users = peUsers
console.log(users)
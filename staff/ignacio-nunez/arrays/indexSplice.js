// usando el indexOf, encuenta el numero 30
// ahora usando el splice, borralo

var numbers = [10, 20, 30, 40, 50, 60]

//--------------------------------------------------

// usando el findIndex encuenta al usuario con el id 'g48ge5g' y borralo

var users = [
    { id: 'fdg5t5t', name: 'pepito', email: 'pepito@grillo.com', saved: ['5hg75', '4huehet', 'ghueghu5e'] },
    { id: 'g48ge5g', name: 'wendy', email: 'wendy@darling.com', saved: ['gjk5g54', 'engljeg'] },
    { id: '5t45e5i', name: 'peter', email: 'peter@pan.com', saved: ['grghejh4', '4tw4hj4', 'f4jkg4g', 'f4wfjw4f'] },
    { id: 'djn5gje', name: 'pinocho', email: 'pin@ocho.com', saved: [] },
]

//--------------------------------------------------

// borra todos los numeros impares

var numbers2 = [12, 3, 40, 6, 7, 43, 13, 24, 5]

var numbers2Clone = [...numbers2]

numbers2Clone.forEach(function (number) {
    var isImpar = number % 2 !== 0

    if (isImpar) {
        var index = numbers2.indexOf(number)
        numbers2.splice(index, 1)
    }
})

console.log(numbers2)

// borra todos los usuarios cuyo nombre empiece con 'pe'

var users = [
    { id: 'fdg5t5t', name: 'pepito', email: 'pepito@grillo.com', saved: ['5hg75', '4huehet', 'ghueghu5e'] },
    { id: 'g48ge5g', name: 'pewendy', email: 'wendy@darling.com', saved: ['gjk5g54', 'engljeg'] },
    { id: '5t45e5i', name: 'peter', email: 'peter@pan.com', saved: ['grghejh4', '4tw4hj4', 'f4jkg4g', 'f4wfjw4f'] },
    { id: 'djn5gje', name: 'pinocho', email: 'pin@ocho.com', saved: [] },
]

users = users.filter(function (user) {
    return !user.name.startsWith('pe')
})

console.log(users)

//usando el indexOf, encuentra el numero 30
// ahora usando el splice, borralo

var numbers = [10, 20, 30, 40, 50, 60]

var indexFind = numbers.indexOf(30)

numbers.splice(indexFind, 1)

console.log(numbers)


//------------------------------------------------------

// usando el findIndex encuentra al usuario con el id 'g48ge5g' y borralo

var users = [
    { id: 'fdg5t5t', name: 'pepito', email: 'pepito@grillo.com', saved: ['5hg75', '4huehet', 'ghueghu5e'] },
    { id: 'g48ge5g', name: 'wendy', email: 'wendy@darling.com', saved: ['gjk5g54', 'engljeg'] },
    { id: '5t45e5i', name: 'peter', email: 'peter@pan.com', saved: ['grghejh4', '4tw4hj4', 'f4jkg4g', 'f4wfjw4f'] },
    { id: 'djn5gje', name: 'pinocho', email: 'pin@ocho.com', saved: [] },
]


var index = users.findIndex(function(user){
    return user.id === 'g48ge5g'
    })
    users.splice(index, 1)
    
    console.log(users)
    

//---------------------------------------------------

// borra todos los numeros impares
// foreach findIndex splice

var numbers2 = [12, 3, 40, 6, 7, 43, 13, 24, 5]

numbers2.forEach(function(element){
    element.findIndex[]
    element.splice(( 2 !== 0))

})



// borra todos los usuarios cuyo nombre empiece con 'pe'

var users = [
    { id: 'fdg5t5t', name: 'pepito', email: 'pepito@grillo.com', saved: ['5hg75', '4huehet', 'ghueghu5e'] },
    { id: 'g48ge5g', name: 'wendy', email: 'wendy@darling.com', saved: ['gjk5g54', 'engljeg'] },
    { id: '5t45e5i', name: 'peter', email: 'peter@pan.com', saved: ['grghejh4', '4tw4hj4', 'f4jkg4g', 'f4wfjw4f'] },
    { id: 'djn5gje', name: 'pinocho', email: 'pin@ocho.com', saved: [] },
]

var filterUsers = users.filter(function(user){
    return !user.name.startsWith('pe')
})

users = filterUsers
console.log(users)
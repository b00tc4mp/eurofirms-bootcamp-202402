// usando el reduce, suma todos los numeros del array 

var numbers = [0, 12, 5, 40, 6, 7, 24, 13, 21]

//------------------------------------------------

// multiplica todos los numeros del array 

var numbers2 = [1, 12, 5, 40, 6, 7, 24, 13, 21]

//------------------------------------------------

//  suma todos los numeros del array, dando un valor inicial de 10

var numbers3 = [0, 12, 5, 40, 6, 7, 24, 13, 21]

//------------------------------------------------

// junta todos los strings del array, en uno solo (con el reduce)
// dando un valor inicial de 'Hola'

var strings = ['mundo', 'pepito', 'como', 'va todo']

//------------------------------------------------

// haz un array con todos los usuarios cuyo nombre empiezan con pe

var users = [
    { id: 'fdg5t5t', name: 'pepito', email: 'pepito@grillo.com', saved: ['5hg75', '4huehet', 'ghueghu5e'] },
    { id: 'g48ge5g', name: 'wendy', email: 'wendy@darling.com', saved: ['gjk5g54', 'engljeg'] },
    { id: '5t45e5i', name: 'peter', email: 'peter@pan.com', saved: ['grghejh4', '4tw4hj4', 'f4jkg4g', 'f4wfjw4f'] },
    { id: 'djn5gje', name: 'pinocho', email: 'pin@ocho.com', saved: [] },
]

var usersWithPe = users.reduce(function (accumulator, user) {
    if (user.name.startsWith('pe'))
        accumulator.push(user)

    return accumulator
    // if (user.name.startsWith('pe')) 
    //     return [...accumulator, user]

    // return accumulator
}, [])

console.log(usersWithPe)

//------------------------------------------------

// haz un array que contenga cada uno de los usuarios, pero solo con la propiedad name y email

var users2 = [
    { id: 'fdg5t5t', name: 'pepito', email: 'pepito@grillo.com', saved: ['5hg75', '4huehet', 'ghueghu5e'] },
    { id: 'g48ge5g', name: 'wendy', email: 'wendy@darling.com', saved: ['gjk5g54', 'engljeg'] },
    { id: '5t45e5i', name: 'peter', email: 'peter@pan.com', saved: ['grghejh4', '4tw4hj4', 'f4jkg4g', 'f4wfjw4f'] },
    { id: 'djn5gje', name: 'pinocho', email: 'pin@ocho.com', saved: [] },
]

var usersBasicInfo = users2.reduce(function (accumulator, { name, email }) {
    var newUser = { name, email }

    return [...accumulator, newUser]
}, [])

console.log(usersBasicInfo)

//------------------------------------------------

// en users3 esta el name como primer valor y surname como segundo del usuario,
// crea un objecto que contenga estas propiedades

var users3 = ['peter', 'pan']

var user = users3.reduce(function (accumulator, string) {
    if (accumulator.name)
        return { ...accumulator, surname: string }

    return { name: string }
}, {})

console.log(user)
//------------------------------------------------

// users4 es un array que contiene arrays, dentro de este segundo array, tenemos el name en primera posicion
// y el surname en segunda posicion de cada usuario
// crea un array de objetos, donde cada objecto tenga la propiedad name y surname correspondiente

var users4 = [['pepito', 'grillo'], ['wendy', 'darling'], ['peter', 'pan']]

var usersBasicInfo2 = users4.reduce(function (accumulator, user) {
    var newUser = {
        name: user[0],
        surname: user[1]
    }

    return [...accumulator, newUser]
}, [])

console.log(usersBasicInfo2)
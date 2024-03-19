// usando el reduce, suma todos los numeros del array 

var numbers = [0, 12, 5, 40, 6, 7, 24, 13, 21]
var numbersReduced = numbers.reduce(function (acumulator, current) {
    return acumulator + current
})
console.log(numbersReduced)
//------------------------------------------------

// multiplica todos los numeros del array 

var numbers2 = [1, 12, 5, 40, 6, 7, 24, 13, 21]
var numbers2Reduced = numbers2.reduce(function (acumulator, current) {
    return acumulator * current
})
console.log(numbers2Reduced)
//------------------------------------------------

//  suma todos los numeros del array, dando un valor inicial de 10

var numbers3 = [0, 12, 5, 40, 6, 7, 24, 13, 21]
var numbers3Reduced = numbers3.reduce(function (acumulator, current) {
    return acumulator + current
}, 10)
console.log(numbers3Reduced)
//------------------------------------------------

// junta todos los strings del array, en uno solo (con el reduce)
// dando un valor inicial de 'Hola'

var strings = ['mundo', 'pepito', 'como', 'va todo']
var stringReduced = strings.reduce(function (acumulator, current) {
    return acumulator + ' ' + current
}, 'Hola')
console.log(stringReduced)
//------------------------------------------------

// haz un array con todos los usuarios cuyo nombre empiezan con pe

var users = [
    { id: 'fdg5t5t', name: 'pepito', email: 'pepito@grillo.com', saved: ['5hg75', '4huehet', 'ghueghu5e'] },
    { id: 'g48ge5g', name: 'wendy', email: 'wendy@darling.com', saved: ['gjk5g54', 'engljeg'] },
    { id: '5t45e5i', name: 'peter', email: 'peter@pan.com', saved: ['grghejh4', '4tw4hj4', 'f4jkg4g', 'f4wfjw4f'] },
    { id: 'djn5gje', name: 'pinocho', email: 'pin@ocho.com', saved: [] },
]

var usersReduced = users.reduce(function (acumulator, current) {

    if (current.name.startsWith('pe')) {
        acumulator.push(current)
    }
    return acumulator

}, [])
console.log(usersReduced)
//------------------------------------------------

// haz un array que contenga cada uno de los usuarios, pero solo con la propiedad name y email

var users2 = [
    { id: 'fdg5t5t', name: 'pepito', email: 'pepito@grillo.com', saved: ['5hg75', '4huehet', 'ghueghu5e'] },
    { id: 'g48ge5g', name: 'wendy', email: 'wendy@darling.com', saved: ['gjk5g54', 'engljeg'] },
    { id: '5t45e5i', name: 'peter', email: 'peter@pan.com', saved: ['grghejh4', '4tw4hj4', 'f4jkg4g', 'f4wfjw4f'] },
    { id: 'djn5gje', name: 'pinocho', email: 'pin@ocho.com', saved: [] },
]
var users2Reduced = users2.reduce(function (acumulator, current) {
    delete current.id
    delete current.saved
    acumulator.push(current)
    return acumulator

}, [])
console.log(users2Reduced)
//------------------------------------------------

// en users3 esta el name como primer valor y surname como segundo del usuario,
// crea un objecto que contenga estas propiedades

var users3 = ['peter', 'pan']

var users3Reduced = users3.reduce(function (acumulator, current, currentIndex = 0) {

    if (currentIndex === 0) {
        acumulator.name = current
    } else { acumulator.surname = current }
    currentIndex++
    return acumulator

}, {})
console.log(users3Reduced)
//------------------------------------------------

// users4 es un array que contiene arrays, dentro de este segundo array, tenemos el name en primera posicion
// y el surname en segunda posicion de cada usuario
// crea un array de objetos, donde cada objecto tenga la propiedad name y surname correspondiente

var users4 = [['pepito', 'grillo'], ['wendy', 'darling'], ['peter', 'pan']]
var users4Reduced = users4.reduce(function (acumulator, current) {
    var object = {}
    object.name = current[0]
    object.surname = current[1]
    acumulator.push(object)
    return acumulator
}, [])
console.log(users4Reduced)
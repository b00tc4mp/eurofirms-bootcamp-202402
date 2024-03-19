// usando el reduce, suma todos los numeros del array 

var numbers1 = [0, 12, 5, 40, 6, 7, 24, 13, 21]
var valorInicial = 0
var suma1 = numbers1.reduce(function (total, current) {
    // `accumulator: ${accumulator}, currentValue: ${currentValue},
    return total + current
    // necesito un valor total de los numeros y luego el valor actual del array
}, valorInicial)

console.log(suma1)

//------------------------------------------------

// multiplica todos los numeros del array 

var numbers2 = [1, 12, 5, 40, 6, 7, 24, 13, 21]

var multiplicador = numbers2.reduce(function (total, current) {
    return total * current
}, 1)
console.log(multiplicador)


//------------------------------------------------

//  suma todos los numeros del array, dando un valor inicial de 10

var numbers3 = [0, 12, 5, 40, 6, 7, 24, 13, 21]
var valorInicial1 = 10
var suma10 = numbers3.reduce(function (total, current) {

    return total + current

}, valorInicial1)

console.log(suma10)

//------------------------------------------------

// junta todos los strings del array, en uno solo (con el reduce)
// dando un valor inicial de 'Hola'

var strings = ['mundo', 'pepito', 'como', 'va todo']
var valorInicial2 = 'Hola '
var strings2 = strings.reduce(function (total, current) {
    return total + current + ' '
}, valorInicial2)

console.log(strings2)

//------------------------------------------------

// haz un array con todos los usuarios cuyo nombre empiezan con pe

var users = [
    { id: 'fdg5t5t', name: 'pepito', email: 'pepito@grillo.com', saved: ['5hg75', '4huehet', 'ghueghu5e'] },
    { id: 'g48ge5g', name: 'wendy', email: 'wendy@darling.com', saved: ['gjk5g54', 'engljeg'] },
    { id: '5t45e5i', name: 'peter', email: 'peter@pan.com', saved: ['grghejh4', '4tw4hj4', 'f4jkg4g', 'f4wfjw4f'] },
    { id: 'djn5gje', name: 'pinocho', email: 'pin@ocho.com', saved: [] },
]

//------------------------------------------------

// haz un array que contenga cada uno de los usuarios, pero solo con la propiedad name y email

var users2 = [
    { id: 'fdg5t5t', name: 'pepito', email: 'pepito@grillo.com', saved: ['5hg75', '4huehet', 'ghueghu5e'] },
    { id: 'g48ge5g', name: 'wendy', email: 'wendy@darling.com', saved: ['gjk5g54', 'engljeg'] },
    { id: '5t45e5i', name: 'peter', email: 'peter@pan.com', saved: ['grghejh4', '4tw4hj4', 'f4jkg4g', 'f4wfjw4f'] },
    { id: 'djn5gje', name: 'pinocho', email: 'pin@ocho.com', saved: [] },
]

//------------------------------------------------

// en users3 esta el name como primer valor y surname como segundo del usuario,
// crea un objecto que contenga estas propiedades

var users3 = ['peter', 'pan']

//------------------------------------------------

// users4 es un array que contiene arrays, dentro de este segundo array, tenemos el name en primera posicion
// y el surname en segunda posicion de cada usuario
// crea un array de objetos, donde cada objecto tenga la propiedad name y surname correspondiente

var users4 = [['pepito', 'grillo'], ['wendy', 'darling'], ['peter', 'pan']]
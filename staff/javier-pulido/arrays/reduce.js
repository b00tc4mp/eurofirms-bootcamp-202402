//usando el reduce, suma todos los numeros del array

var numbers = [0, 12, 5, 40, 6, 7, 24, 13, 21]

var total = numbers.reduce(function(a, b){
    return a + b
})
console.log(total)

//---------------------------------------------------------

//multiplica todos los numeros del array

var numbers2 = [1, 12, 5, 40, 6, 7, 24, 13, 21]

var total1 = numbers2.reduce(function(a, b){
    return a * b
})

console.log(total1)

//--------------------------------------------------------

//suma todos los numeros del array, dando un valor inicial de 10

var numbers3 = [0, 12, 5, 40, 6, 7, 24, 13, 21]

var totalInicial10 = numbers3.reduce(function(valorAnterior, valorActual, index, vector){
    return valorAnterior + valorActual
}, 10)

console.log(totalInicial10)

//-----------------------------------------------------------------

// junta todos los strings del array, en un solo (con el reduce)
// dando un valor inicial de 'Hola'

var strings = ['mundo', 'pepito', 'como', 'va todo']

var totalInicialHola = strings.reduce(function(valorAnterior, valorActual){
    return valorAnterior + valorActual
}, 'hola')

console.log(totalInicialHola)



// haz un array con todos los usuarios cuyo nombre empiezen con pe

var users = [
    { id: 'fdg5t5t', name: 'pepito', email: 'pepito@grillo.com', saved: ['5hg75', '4huehet', 'ghueghu5e'] },
    { id: 'g48ge5g', name: 'wendy', email: 'wendy@darling.com', saved: ['gjk5g54', 'engljeg'] },
    { id: '5t45e5i', name: 'peter', email: 'peter@pan.com', saved: ['grghejh4', '4tw4hj4', 'f4jkg4g', 'f4wfjw4f'] },
    { id: 'djn5gje', name: 'pinocho', email: 'pin@ocho.com', saved: [] },
]

var totalInicialPe = users.reduce(function(accumulator, valorActual ){
    if ( !valorAnterior.name.startsWith('pe'){
        return accumulator
}),
 [])

console.log(totalInicialPe)


//------------------------------------------------

// haz un array que contenga cada uno de los usuarios, pero solo con la propiedad name y email

var users2 = [
    { id: 'fdg5t5t', name: 'pepito', email: 'pepito@grillo.com', saved: ['5hg75', '4huehet', 'ghueghu5e'] },
    { id: 'g48ge5g', name: 'wendy', email: 'wendy@darling.com', saved: ['gjk5g54', 'engljeg'] },
    { id: '5t45e5i', name: 'peter', email: 'peter@pan.com', saved: ['grghejh4', '4tw4hj4', 'f4jkg4g', 'f4wfjw4f'] },
    { id: 'djn5gje', name: 'pinocho', email: 'pin@ocho.com', saved: [] },
]

var totalNameEmail = numbers3.reduce(function(accumulator, user, index, array){
  if((array.user.name && array.user.email){
    return array
}
  }, [])

  


console.log(totalNameEmail)



//------------------------------------------------

// en users3 esta el name como primer valor y surname como segundo del usuario,
// crea un objecto que contenga estas propiedades


var users3 = ['peter', 'pan']

// var object = users3.reduce(function())

// console.log(users3)

//------------------------------------------------

// users4 es un array que contiene arrays, dentro de este segundo array, tenemos el name en primera posicion
// y el surname en segunda posicion de cada usuario
// crea un array de objetos, donde cada objecto tenga la propiedad name y surname correspondiente

var users4 = [['pepito', 'grillo'], ['wendy', 'darling'], ['peter', 'pan']]

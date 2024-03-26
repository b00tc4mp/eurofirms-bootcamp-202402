//usando el reduce, suma todos los numeros del array

var numbers = [0, 12, 5, 40, 6, 7, 24, 13, 21]
var initiallValue = 0
var sum = numbers.reduce(function (accumulator, currentValue) {
    return currentValue + accumulator

})
console.log(sum)
//_________________________________________________

// multiplica todos los numeros del array
var numbers2 = [1, 12, 5, 40, 6, 7, 24, 13, 21]
var mult = numbers2.reduce(function (accumulator, currentValue,) {
    return currentValue * accumulator

})
console.log(mult)
//___________________________________________________

// suma todos los numeros del array, dando un valor inicial de 10
var numbers3 = [0, 12, 5, 40, 6, 7, 24, 13, 21]
var initialValue = 10
var sum2 = numbers3.reduce(function (accumulator, currentValue) {
    return currentValue + accumulator
},
    initialValue
);

console.log(sum2)
//_______________________________________________

// junta todos los strings del array, en uno solo (con el reduce)
// dando un valor inicial de 'Hola'

var strings = ['mundo', 'pepito', 'como', 'va todo']
var initialValue = 'Hola'
var sumStrings = strings.reduce(function (accumulator, currentValue) {
    return currentValue + accumulator
},
    initialValue
);
console.log(sumStrings)
//______________________________________________________

// haz un array con todos los usuarios cuyo nombre empiezan con pe

var users = [
    { id: 'fdg5t5t', name: 'pepito', email: 'pepito@grillo.com', saved: ['5hg75', '4huehet', 'ghueghu5e'] },
    { id: 'g48ge5g', name: 'wendy', email: 'wendy@darling.com', saved: ['gjk5g54', 'engljeg'] },
    { id: '5t45e5i', name: 'peter', email: 'peter@pan.com', saved: ['grghejh4', '4tw4hj4', 'f4jkg4g', 'f4wfjw4f'] },
    { id: 'djn5gje', name: 'pinocho', email: 'pin@ocho.com', saved: [] },
]


var array = users.reduce(function (accumulator, user) {
    if (user.name.startsWith('pe')) {
        accumulator.push(user)

    }
    return accumulator
}, [])

console.log(array)
//_______________________________________________________________________________

// haz un array que contenga cada uno de los usuarios, pero solo con la propiedad name y email
var users2 = [
    { id: 'fdg5t5t', name: 'pepito', email: 'pepito@grillo.com', saved: ['5hg75', '4huehet', 'ghueghu5e'] },
    { id: 'g48ge5g', name: 'wendy', email: 'wendy@darling.com', saved: ['gjk5g54', 'engljeg'] },
    { id: '5t45e5i', name: 'peter', email: 'peter@pan.com', saved: ['grghejh4', '4tw4hj4', 'f4jkg4g', 'f4wfjw4f'] },
    { id: 'djn5gje', name: 'pinocho', email: 'pin@ocho.com', saved: [] },
]

var usersBasicInfo = users.reduce(function(accumulator, {name, email}){
 var newUser = {name, email}
 return[...accumulator,newUser]
},[])
console.log(usersBasicInfo)
//__________________________________________________________________________________________
// en users3 esta el name como primer valor y surname como segundo del usuario,
// crea un objecto que contenga estas propiedades
var users3 = ['peter', 'pan']
var user = users3.reduce(function (accumulator,string){
    if(accumulator.name){
        accumulator.surname = string
    }
    else{
        accumulator.name = string
    }
    return accumulator
}, {})
console.log(user)
//_______________________________________________________________________________
// users4 es un array que contiene arrays, dentro de este segundo array, tenemos el name en primera posicion
// y el surname en segunda posicion de cada usuario
// crea un array de objetos, donde cada objecto tenga la propiedad name y surname correspondiente

var users4 = [['pepito', 'grillo'], ['wendy', 'darling'], ['peter', 'pan']]

var usersBasicInfo2 = users4.reduce(function(accumulator,user){
    console.log(accumulator)
    var newUser = {
        name: user[0], 
        surname:user[1]
    }
    return {...accumulator, newUser}
}, [])
console.log(users4)


// usando el filter, crea un nuevo array, que contenga los nuevos impares
var numbers2 = [0, 12, 5, 40, 6, 7, 24, 13, 21]
var numbersToFilter = numbers2.filter(function(number){
    return number % 2 != 0
})
console.log(numbersToFilter)
//_________________________________________________
// crea un nuevo array con los elementos que tienen 2 palabras
var strings = ['hola mundo', 'pepito', 'hello world to the people', 'todos']
var stringsToFilter = strings.filter(function(element){
return element.split(' ').length === 2
//^['hola','mundo]]
})
console.log(stringsToFilter)
//______________________________________________________
//crea un nuevo array que contenga los numeros con dos digitos
var numbers = [100, -20, 3, -200, 50, 8, -5]
var numbersToFilter2 = numbers.filter(function(number){
return number > 9 && number <= 99 || number <-9 && number >= -99
})
console.log(numbersToFilter2)
//_________________________________________________
//crea un nuevo array, con los usuarios cuyo nombre empiece con p
var users=[
    {name:'pepito', email: 'pepito@grillo'},
    { name: 'wendy', email: 'wendy@darling.com' },
    { name: 'topa', email: 'to@pa.com' },
    { name: 'peter', email: 'peter@pan.com' },
    { name: 'pinocho', email: 'pin@ocho.com' },
]
var usersToFilter = users.filter(function(user){
    return user.name[0]=== 'p'
})
console.log(usersToFilter)
//________________________________________________________
// crea un nuevo array, que contenga los usuarios que viven en Barcelona
var users2 = [
{
name:'pepito', information: {
    address: {
        city:'Madrid',
        street:'Gran via'
    },
    number: '65787959'
}
},
{
    name: 'wendy', information: {
        address: {
            city: 'Barcelona',
            street: 'Diagonal'
        },
        number: '66575846'
    }
},
{
    name: 'peter', information: {
        address: {
            city: 'Sevilla',
            street: 'bakeer street'
        },
        number: '78795040'
    }
},
{
    name: 'topa', information: {
        address: {
            city: 'Barcelona',
            street: 'Reina Amalia'
        },
        number: '565768564'
    }
},
{
    name: 'pinocho', information: {
        address: {
            city: 'Valencia',
            street: 'siempre viva'
        },
        number: '57694068'
    }
}
]
var userToFilter2= users2.filter(function(user){
return user.information.address.city ==='Barcelona'
})
console.log (userToFilter2)
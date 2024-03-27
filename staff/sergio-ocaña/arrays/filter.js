// tenga los numeros impares
var numbers2 = [0, 12, 5, 40, 6, 7, 24, 13, 21]
numbers2filtered = numbers2.filter(function (num) {
    return num % 2 == !0
})
console.log(numbers2filtered)
//los elementos que tienen 2 palabras

var strings = ['hola mundo', 'pepito', 'hello world to the people', 'todos']
stringsfiltered = strings.filter(function (string) {
    return string.split(' ').length === 2
})
console.log(stringsfiltered)
// numeros con 2 digitos

var numbers = [100, -20, 3, -200, 50, 8, -5]

numberfiltered = numbers.filter(function (num) {
    return num > 9 && num < 100 || num < -9 && num > -100
})

console.log(numberfiltered)
//usuarios nombre empiece por p
var users = [
    { name: 'pepito', email: 'pepito@grillo.com' },
    { name: 'wendy', email: 'wendy@darling.com' },
    { name: 'topa', email: 'to@pa.com' },
    { name: 'peter', email: 'peter@pan.com' },
    { name: 'pinocho', email: 'pin@ocho.com' },
]

console.log(users.filter(function (x) {
    return x.name[0] = 'p'
}))

var users2 = [
    { name: 'pepito', information: { address: { city: 'Madrid', street: 'Gran via' }, number: '65787959' } },
    { name: 'wendy', information: { address: { city: 'Barcelona', street: 'Diagonal' }, number: '66575846' } },
    { name: 'peter', information: { address: { city: 'Sevilla', street: 'bakeer street' }, number: '78795040' } },
    { name: 'topa', information: { address: { city: 'Barcelona', street: 'Reina Amalia' }, number: '565768564' } },
    { name: 'pinocho', information: { address: { city: 'Valencia', street: 'siempre viva' }, number: '57694068' } }
]

console.log(users2.filter(function (x) {
    return x.information.address.city === 'Barcelona'
}))

var numbers =[10,20,30,40,50,60]
//multiplicando *2
//const case1 = numbers.map(x)function(x*2){

var caseOne = numbers.map(function(x){
    return x *2
})
console.log(caseOne)
//crear un nuevo array con la longitud de cada uno de los strings

var strings= ['hola','mundo','a','todos']

var casetwo = strings.map(function(x){
    return x.length
})
console.log(caseTwo)
//crea un nuevo array con el resto de 2 de cada uno de los nuevos numeros

var numberstwo = [12,40,6,7,24]
var casethree = numberstwo.map(function(x){
    return x % 2
})
console.log(casethree)
//crea un nuevo array que contenga los email de los usuarios como strings
var user = [
    {name:'pepito', email:'pepito@grillo.com'},
    {name:'wendy', email: 'wendy@darling.com'},
    {name:'peter', email:'peter@pan.com'},
    {name:'pinocho',email:'pinn@ocho.com'}
]
var casefour = user.map(function(x){
    return x.email
})
console.log(casefour)
//que contenga la ciudad de los usuarios como string
var users= [
    {name:'Pepito', information:{
        city:'Madrid',
        number:'65787959'
    }},
    {name:'Wendy', information:{
        city:'Barcelona',
        number:'66645982'
    }},
    {name:'Peter', information:{
        city:'Sevilla',
        number:'699774251'}},
    {name:'Pinocho', information:{
        city:'Valencia',number:'669574343'}}
]

var casefive = user.map(function(x){
    return x.information.city
})
console.log(casefive)




 

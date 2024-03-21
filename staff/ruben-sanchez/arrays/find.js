// usando el find encuentra el primer numero mayor a 20
var numbers = [10, 20, 30, 40, 50, 60]
const greater = numbers.find(function(x){
    return x > 20
})
console.log(greater)
// encuentra el primer string que contenga una u

var  strings = ['hola', 'mundo', 'a', 'todoss']

const unu = strings.find(function(x){
     for(var i=0; i < x.length; i++){
        if(x[i] === 'u') {
            return x
        }
     }
})
console.log(unu)
// encuentra el primer numero impar
var numbers2 = [12, 40  , 6 , 7, 13]
const impar = numbers2.find(function(x){
    if(x%2 !== 0){
        return x
    }
}) 
console.log(impar)

// encuentra el primer email con wendy@darling.com
var users2 = [
    {name:'pepito', email: 'pepito@grillo.com'},
    {name: 'wendy', email: 'wendy@darling.com'},
    {name: 'peter', email: 'peter@pan.com'},
    {name: 'pinocho', email: 'pin@ocho.com'},
]
const vari =users2.find(function(x){
    if(x.email === 'wendy@darling.com' ){
        return x.email
    }
})
console.log(vari)
// encuentra el usuario con la ciudad 'Barcelona
var users3 = [
    {
        name:'pepito', information: {
            city: 'Madrid',
            madrid: '65787959'
        }

        

    },
    {
        name: 'wendy', information: {
            city: 'Barcelona',
            number: '7869406'
        }
    },
    {
        name: 'peter', information: {
            city: 'Sevilla',
            number: '78795040'
        }
    },
    {
        name: 'pinocho', information: {
            city: 'Valencia',
            number: '57694068'
        }
    }
]
const vari3 = users3.find(function(x){
    if(x.information.city === 'Barcelona'){
        return x.information.city
    }
})
console.log(vari3)
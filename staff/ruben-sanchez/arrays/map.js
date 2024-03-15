var numbers = [10, 20, 30, 40, 50, 60]

const map1 = numbers.map(function(x){
return x * 2
});

console.log(map1)

// caso 2 crea un nuevo array con la longitud de cada uno de los strings
 var strings = ['hola', 'numdo', 'a', 'todos']

 const map2 = strings.map(function(string){
    return string.length
 })
console.log(map2)
 // caso 3 crea un nuevo arary con el resto de 2 de cada uno de los elementos
 var numbers2 = [12, 40 , 6 , 7, 24]
 const resto = numbers2.map(function(x){
    return x % 2
 })
console.log(resto)
 //crea un nuevo array con contenga los emails de los usuarios

 var users2 = [
    {name:'pepito', email: 'pepito@grillo.com'},
    {name: 'wendy', email: 'wendy@darling.com'},
    {name: 'peter', email: 'peter@pan.com'},
    {name: 'pinocho', email: 'pin@ocho.com'},
 ]
 const emails = users2.map(function(mail){
    return mail.email
})
console.log(emails)
 console.log(emails)
 // crea un nuevo array que contenga la ciudad de los usuarios como string
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
const cities = users3.map(function(x){
    return x.information.city

})
console.log(cities)
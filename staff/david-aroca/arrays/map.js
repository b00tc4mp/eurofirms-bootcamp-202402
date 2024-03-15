//usando el map crea un nuevo array con cada uno de los numeros multiplicados x2 
var numbers = [10, 20, 30, 40, 50, 60]

var numbersx2 = numbers.map(function (x) {
    return x * 2

})
console.log(numbersx2)


//--------------------------------------------------

//crea un nuevo array  con la longitud de cada uno de los elementos 

var string = ['hola', 'mundo', 'a', 'todos']

var longitud = string.map(function (s) {
    return s.length
})
console.log(longitud)


//--------------------------------------------------

// crea un nuevo array , con el resto de 2 de cada uno de los numeros 

var numbers2 = [12, 40, 6, 7, 24]


//--------------------------------------------------

// crea un nuevo array, que contenga los emails de los usuarios como strings

var users = [
    { name: 'pepito', email: 'pepito@grillo.com' },
    { name: 'wendy', email: 'wendy@darling.com' },
    { name: 'peter', email: 'peter@pan.com' },
    { name: 'pinocho', email: 'pin@ocho.com' },
]


//--------------------------------------------------

// crea un nuevo array que contenga la ciudad de los usuarios como un string 


var users2 = [
    {
        name: 'pepito', information: {
            city: 'Madrid',
            number: '65787959'
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
            number: ''
        }

    },
    {
        name: 'wendy', information: {
            city: '',
            number: ''
        }

    }

]


// 1. Filtrar números impares

var numbers2 = [0, 12, 5, 40, 6, 7, 24, 13, 21];
var impares = numbers2.filter(function (num) {
    return num % 2 !== 0
})
console.log(impares)
// Resultado: [5, 7, 13, 21]



// 2. Filtrar elementos con 2 palabras
var strings = ['hola mundo', 'pepito', 'hello world to the people', 'todos'];
var twoWordStrings = strings.filter(function (string) {
    return string
})


console.log(twoWordStrings);
// Resultado: ["hola mundo", "hello world to the people"]




// 3. Filtrar números con dos dígitos
var numbers = [100, -20, 3, -200, 50, 8, -5];
var Numbers = numbers.filter(function (numbers) {
    return numbers
})
console.log(Numbers);
// Resultado: [-20, -200, 50]





// 4. Filtrar usuarios cuyo nombre empiece con "p"
var users = [
    { name: 'pepito', email: 'pepito@grillo.com' },
    { name: 'wendy', email: 'wendy@darling.com' },
    { name: 'topa', email: 'to@pa.com' },
    { name: 'peter', email: 'peter@pan.com' },
    { name: 'pinocho', email: 'pin@ocho.com' },
];

var users = users.filter(user => user.name.charAt(0) === 'p');
console.log(usersWithP);
// Resultado: [{ name: 'pepito', email: 'pepito@grillo.com' }, { name: 'peter', email: 'peter@pan.com' }, { name: 'pinocho', email: 'pin@ocho.com' }]




// 5. Filtrar usuarios que viven en barcelona
var users2 = [
    {
        name: 'pepito', information: {
            address: {
                city: 'Madrid',
                street: 'Gran via'
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
];
var filteredUsers = users2.map(user => ({ name: user.name, email: user.information.number }));
console.log(filteredUsers);

// Resultado: [{ name: 'pepito', email: '65787959' }, { name: 'wendy', email: '66575846' }, { name: 'peter', email: '78795040' }, { name: 'topa', email: '565768564' }, { name: 'pinocho', email: '57694068' }]

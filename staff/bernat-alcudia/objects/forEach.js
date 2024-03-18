// Función a ejecutar por cada elemento, que recibe tres argumentos:

// currentValue
// El elemento actual siendo procesado en el array.

// index Opcional
// El índice del elemento actual siendo procesado en el array.

// array Opcional
// El vector en el que forEach() esta siendo aplicado.

// thisArg Opcional
// Valor que se usará como this cuando se ejecute el callback.

var users = {
    '0': {
        name: 'Pepito',
        username: 'Pepito80',
        password: '12231234242342134'
    },
    '1': {
        name: 'Grillo',
        username: 'Grillo21',
        password: '12132123124'
    },
    '2': {
        name: 'Wendy',
        username: 'Smith',
        password: '3143442342'
    }
}

var printUaer = function (user) {
    console.log(user.name + '  ' + user.username)
}


function forEach(user, callback) {
    for (var i = 0; i < user.length; i++) {
        callback(user[i])

    }
}

forEach(users, printUaer)
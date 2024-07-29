function find(object, callback) {
    //* recorrer objeto
    //* pasar a la callback cada uno de los elementos y guardar su respuesta en una variable
    //* evaluar respuesta de la callback para saber si el elemento paso o no el test
    //* en caso de cumplirse, devolver ese elemento
    //* en caso de que ningun elemento cumpla la condicion, retornamos undefined

    for (var i = 0; i < object.length; i++) {
        var callbackResult = callback(object[i])

        if (callbackResult) {
            return object[i]
        }
    }
}

console.log('FUNCTION FIND')

console.log('CASE 1: find user by username "Grillo12"')

var users = {
    '0': {
        name: 'Pepito',
        userName: 'Pepito12',
        password: '123123123'
    },
    '1': {
        name: 'Grillo',
        userName: 'Grillo12',
        password: '123123123'
    },
    '2': {
        name: 'Wendy',
        userName: 'Wendy12',
        password: '123123123'
    },
    length: 3
}

var findCallback = function (user) {
    return user.userName === 'Grillo12'
}

var result = find(users, findCallback)

console.log(result)
// {
//     name: 'Grillo',
//     userName: 'Grillo12',
//     password: '123123123'
// }
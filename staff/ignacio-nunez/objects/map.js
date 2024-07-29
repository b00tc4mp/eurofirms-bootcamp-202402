function map(object, callback) {
    //* recorrer el objecto
    //* llamo a mi callback con cada uno de los elementos del array
    //* armar un nuevo array (objeto) con el valor que me retorne mi callback
    // modificar la longitud
    // retornar el nuevo array
    var result = {}
    for (var i = 0; i < object.length; i++) {
        result[i] = callback(object[i])
    }
    result.length = object.length

    return result
}

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

var userNames = map(users, function (user) {
    return user.userName
})

console.log(userNames)
// {
//     '0': 'Pepito12',
//     '1': 'Grillo12',
//     '2': 'Wendy12',
//     length: 3
// }

// var userNames = {}
// for (var i = 0; i < users.length; i++) {
//     userNames[i] = users[i].userName

//     userNames.length++
// }

// users.map(function (user){
//     return <div>
//         <h1>{user.name}</h1>
//         <h2>{user.userName}</h2>
//     </div>
// })
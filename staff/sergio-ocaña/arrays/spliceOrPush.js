// el usuario peter con id '5t45e5i' le ha dado a guardar a un post (el id de este se guarda en el array saved del user)
// si peter ya lo tiene guardado, deberia borrarse el id del array
// si no lo tiene, deberia agregarlo

// para busar al usuario, utilizar el id

// hacer dos casos, uno para cuando lo encuentra en el array, otro para cuando no lo encuentra

// metodos sugeridos a usar: find, includes, splice, push 
// (puedes agregar otros o prescindir de alguno si lo ves necesario, splice y push son obligatorios)

var users = [
    { id: 'fdg5t5t', name: 'pepito', email: 'pepito@grillo.com', saved: ['5hg75', '4huehet', 'ghueghu5e'] },
    { id: 'g48ge5g', name: 'wendy', email: 'wendy@darling.com', saved: ['gjk5g54', 'engljeg'] },
    { id: '5t45e5i', name: 'peter', email: 'peter@pan.com', saved: ['grghejh4', '4tw4hj4', 'f4jkg4g', 'f4wfjw4f'] },
    { id: 'djn5gje', name: 'pinocho', email: 'pin@ocho.com', saved: [] },
]


function savePost(userId, postId) {


    var user = users.find(function (user) {
        return user.id === userId
    })

    var indexResult = user.saved.indexOf(postId)

    if (indexResult === -1) {
        user.saved.push(postId)
    } else {
        user.saved.splice(indexResult, 1)
    }

    var indexUser = users.map(function (user) { return user.id }).indexOf(userId)

    users.splice(indexUser, 1, user)
}

console.log('CASE:1 remove "grghejh4" al user id "5t45e5i" ')
savePost('5t45e5i', 'grghejh4')
console.log(users)

console.log('CASE:2 add "adwoiu1298j" al user "5t45e5i"')
savePost('5t45e5i', 'adwoiu1298j')
console.log(users)
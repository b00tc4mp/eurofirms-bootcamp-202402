// el usuario peter con id '5t45e5i' le ha dado aguardar a un post (el id de este se guarda en el array saved del user)
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
var user = users.find(function (users) {
    return users.id === '5t45e5i'
    
})

// onclick (event, postId) {}

var postId = '4tw4hj4'
var index = users.forEach(function(user){
var isPostSaved = user.saved.includes(postId)
if(isPostSaved){
   user.saved.splice(index,1)
  //TODO borrar el id de el array  
}
else{user.saved.push(postId)
}
})  

console.log(user)

// el usuario peter con id '5t45e5i' le ha dado a guardar a un post (el id de este se guarda en el array saved del user)
// si peter ya lo tiene guardado, deberia borrarse el id del array
// si no lo tiene, deberia agregarlo

// para busar al usuario, utilizar el id

// hacer dos casos, uno para cuando lo encuentra en el array, otro para cuando no lo encuentra

// metodos sugeridos a usar: find, includes, splice, push
// (puedes agregar otros o prescindir de alguno si lo ves necesario, splice y push son obligatorios)

var users = [
  {
    id: "fdg5t5t",
    name: "pepito",
    email: "pepito@grillo.com",
    saved: ["5hg75", "4huehet", "ghueghu5e"],
  },
  {
    id: "g48ge5g",
    name: "wendy",
    email: "wendy@darling.com",
    saved: ["gjk5g54", "engljeg"],
  },
  {
    id: "5t45e5i",
    name: "peter",
    email: "peter@pan.com",
    saved: ["grghejh4", "4tw4hj4", "f4jkg4g", "f4wfjw4f"],
  },
  { id: "djn5gje", name: "pinocho", email: "pin@ocho.com", saved: [] },
];
function sliceOrPush(userId, postId) {
  var user = null; //si no encontrara el user se queda null
  for (var i = 0; i < users.length; i++) {
    if (users[i].id === userId) {
      user = users[i];
      break;
    }
  }

  if (!user) {
    console.log("Usuario no encontrado.");
    return;
  }

  var postIndex = user.saved.indexOf(postId);
  if (postIndex !== -1) {
    // Si encuentra el post, lo borramos
    user.saved.splice(postIndex, 1);
    console.log("Post eliminado de los guardados.");
  } else {
    // Si no lo encuentra, lo añadimos
    user.saved.push(postId);
    console.log("Post añadido a los guardados.");
  }
}

// Pruebas
sliceOrPush("5t45e5i", "4tw4hj4");
sliceOrPush("5t45e5i", "abc123");

// el usuario peter con id '5t45e5i' ha guardado un post (el id de este se guarda en el array saved del user)
// si peter ya lo tiene guardado, borrar id del array
// si no lo tiene, agregar id
// para busar al usuario, utilizar el id
// metodos a usar: find, includes, splice, push

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
function sliceorPush(userId = "", postIdToRemove = "") {
  // Encontrar al usuario por su ID
  var user = users.find(function (user) {
    return user.id === userId;
  });

  if (user) {
    // Verificar si el post ya está guardado por el usuario
    var postIndex = user.saved.indexOf(postIdToRemove);

    if (postIndex !== -1) {
      // Si el post está guardado, lo eliminamos
      user.saved.splice(postIndex, 1);
    } else {
      // Si el post no está guardado, lo agregamos
      user.saved.push(postIdToRemove);
    }
  }

  // Devolver el usuario modificado
  return user;
}
console.log(sliceorPush("5t45e5i", "grghejh4"));
console.log(sliceorPush("5t45e5i", "grghehee"));

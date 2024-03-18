//usamos indexOf, para encontrar el numero 30
//ahora usando el splice,borralo

var numbers = [10, 20, 30, 40, 50, 60];
var index = numbers.indexOf(30);
console.log(index);
var deleteItem = numbers.splice(index, 1);
console.log(numbers);
//usando el findexIndex encuentra al ussuarios con el ide 'g48ge5g'  y borralo

//borra todos los numeros impares de este array
var numbers2 = [12, 3, 40, 6, 743, 13, 24, 5];
var numbers2Clone = [...numbers2];

// Itera sobre cada elemento del array original
for (var i = 0; i < numbers2.length; i++) {
    var number = numbers2[i];
    // Verifica si el número es impar
    var isImparNumber = number % 2 !== 0;
    if (isImparNumber) {
        // Si es impar, lo elimina del array original
        var index = numbers2.indexOf(number);
        numbers2.splice(index, 1);
    }
}

console.log(numbers2);


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
    email: "wendy@garling.com",
    saved: ["gjk5g54", "engljeg"],
  },
  {
    id: "5t45e5i",
    name: "peter",
    email: "peter@pan",
    saved: ["grghejh4", "4tw4hj4", "f4jkg4g", "f4wfjw4f"],
  },
  {
    id: "djn5gje",
    name: "pinocho",
    email: "pin@ocho.com",
    saved: [],
  },
];

var indexUser = users.findIndex(function (user) {
  return user.id === "g48ge5g";
});
var deleteUser = users.splice(indexUser, 1);
console.log(users);


//borra todos los usuarios cuyo nombre empiece con 'pe'
var PeName = users.